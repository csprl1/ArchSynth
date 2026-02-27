// import puter from "@heyputer/puter.js";
// import { HOSTING_CONFIG_KEY, createHostingSlug, isHostedUrl, imageUrlToPngBlob, fetchBlobFromUrl, getImageExtension, getHostedUrl } from "./utils";


// // export const getOrCreateHostingConfig = async (): Promise<HostingConfig | null> => {
// //     const existing = (await puter.kv.get(HOSTING_CONFIG_KEY)) as HostingConfig | null;

// //     if (existing?.subdomain) return {subdomain: existing.subdomain};

// //     const subdomain = createHostingSlug();

// //     try{
// //         const created = await puter.hosting.create(subdomain, ' ');
// //         const record = {subdomain: created.subdomain};
// //         return record;
// //     }catch(e){
// //         console.warn(`could not find subdomain: ${e}`)
// //         return null;
// //     }
// // }
// export const getOrCreateHostingConfig = async (): Promise<HostingConfig | null> => {
//   const existing = (await puter.kv.get(HOSTING_CONFIG_KEY)) as HostingConfig | null;

//   console.log("KV existing:", existing);

//   if (existing?.subdomain) {
//     return { subdomain: existing.subdomain };
//   }

//   const subdomain = createHostingSlug();

//   try {
//     const created = await puter.hosting.create(subdomain, '');
//     const record = { subdomain: created.subdomain };

//     await puter.kv.set(HOSTING_CONFIG_KEY, record);

//     console.log("KV saved:", record);
//     console.log("Hosting config root binding check");

//     return record;
//   } catch (e) {
//     console.warn(`could not create subdomain: ${e}`);
//     return null;
//   }
// };

// export const uploadImageToHosting = async ({hosting, url, projectId, label}: StoreHostedImageParams): Promise<HostedAsset | null> => {
//     if(!hosting || !url) return null;
//     if(isHostedUrl(url)) return {url};

//     try{
//         const resolved = label === "rendered"
//             ? await imageUrlToPngBlob(url)
//                 .then((blob) => blob ? { blob, contentType: 'image/png' }: null)
//             : await fetchBlobFromUrl(url);

//         if(!resolved) return null;

//         const contentType = resolved.contentType || resolved.blob.type || '';
//         const ext =
//   contentType === "image/jpeg"
//     ? "jpg"
//     : getImageExtension(contentType, url);
//         // const dir = `projects/${projectId}`;
//         // const filePath = `${dir}/${label}.${ext}`;
//         const dir = `projects/${projectId}`;
// const filePath = `${dir}/${label}.${ext}`;

//         // const uploadFile = new File([resolved.blob], `${label}.${ext}`, {
//         //     type: contentType,
//         // }); 
//         // await puter.fs.mkdir(dir, { createMissingParents: true });
//         // await puter.fs.write(filePath, uploadFile);
//         await puter.fs.mkdir(dir, { createMissingParents: true });

// // Convert blob to ArrayBuffer
// const buffer = await resolved.blob.arrayBuffer();

// // Write raw binary data
// await puter.fs.write(filePath, buffer);
// const stat = await puter.fs.stat(filePath);
// console.log("File exists after write:", stat);

//         const hostedUrl = getHostedUrl({ subdomain: hosting.subdomain }, filePath);

//         return hostedUrl ? { url: hostedUrl } : null;

//     }catch(e){
//         console.warn(`Failed to store Hosted Image: ${e}`);
//         return null;
//     }
// }
import puter from "@heyputer/puter.js";
import {
    createHostingSlug,
    fetchBlobFromUrl, getHostedUrl,
    getImageExtension,
    HOSTING_CONFIG_KEY,
    imageUrlToPngBlob,
    isHostedUrl
} from "./utils";

export const getOrCreateHostingConfig = async (): Promise<HostingConfig | null> => {
    const existing = (await puter.kv.get(HOSTING_CONFIG_KEY)) as HostingConfig | null;

    if(existing?.subdomain) return { subdomain: existing.subdomain };

    const subdomain = createHostingSlug();

    try {
        const created = await puter.hosting.create(subdomain, '.');

        const record = { subdomain: created.subdomain };

        await puter.kv.set(HOSTING_CONFIG_KEY, record);

        return record;
    } catch (e) {
        console.warn(`Could not find subdomain: ${e}`);
        return null;
    }
}

export const uploadImageToHosting = async ({ hosting, url, projectId, label }: StoreHostedImageParams): Promise<HostedAsset | null> => {
    if(!hosting || !url) return null;
    if(isHostedUrl(url)) return { url };

    try {
        const resolved = label === "rendered"
            ? await imageUrlToPngBlob(url)
                .then((blob) => blob ? { blob, contentType: 'image/png' }: null)
            : await fetchBlobFromUrl(url);

        if(!resolved) return null;

        const contentType = resolved.contentType || resolved.blob.type || '';
        const ext = getImageExtension(contentType, url);
        const dir = `projects/${projectId}`;
        const filePath = `${dir}/${label}.${ext}`;

        const uploadFile = new File([resolved.blob], `${label}.${ext}`, {
            type: contentType,
        });

        await puter.fs.mkdir(dir, { createMissingParents: true });
        await puter.fs.write(filePath, uploadFile);

        const hostedUrl = getHostedUrl({ subdomain: hosting.subdomain }, filePath);

        return hostedUrl ? { url: hostedUrl } : null;
    } catch (e) {
        console.warn(`Failed to store hosted image: ${e}`);
        return null;
    }
}