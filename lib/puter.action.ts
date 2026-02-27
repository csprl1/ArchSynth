import puter from "@heyputer/puter.js";
import { getOrCreateHostingConfig, uploadImageToHosting } from "./puter.hosting";
import { isHostedUrl } from "./utils";

export const signIn = async () => await puter.auth.signIn();

export const signOut = () => puter.auth.signOut();

export const getCurrentUser = async () => {
    try {
        return await puter.auth.getUser();
    } catch {
        return null;
    }
}

export const createProject = async ({ item, visibility = "private" }: CreateProjectParams): Promise<DesignItem | null | undefined> => {
     const projectId = item.id;
     const hosting = await getOrCreateHostingConfig();
      console.log("Hosting subdomain:", hosting?.subdomain);
     const hostedSource = projectId ? await uploadImageToHosting ({
        hosting, url: item.sourceImage, projectId, label: "source",
     }):null;

     const hostedRender = projectId && item.renderedImage ? await uploadImageToHosting({
        hosting, url: item.renderedImage, projectId, label: "rendered",
     }): null;
     

     const resolvedSource = hostedSource?.url || 
     (isHostedUrl(item.sourceImage) ? item.sourceImage : "");
    // const resolvedSource = item.sourceImage;
//     if (!hostedSource?.url) {
//   console.error("Hosting failed. No file written.");
//   return null;
// }

// const resolvedSource = item.sourceImage;

     if(!resolvedSource){
        console.warn('Failed to host source image, skipping save.')
        return null;
     }

     const resolvedRender = hostedRender?.url ? hostedRender?.url : item.renderedImage && isHostedUrl(item.renderedImage) ? item.renderedImage : undefined;

     const{
        sourcePath: _SourcePath,
        renderedPath: _RenderedPath,
        publicPath: _PublicPath,
        ...rest
     } = item;

     const payload = {
        ...rest,
        sourceImage : resolvedSource,
        renderedImage : resolvedRender,
     }

     try{
        return payload;
     }catch(e){
        console.log("Failed to save project", e);
        return null;
     }
}