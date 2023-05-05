export const fileUpload = async(file) => {
    if( !file ) throw new Error('We don\'t have any files to upload 😕');

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const presetsName = import.meta.env.VITE_CLOUDINARY_PRESETS_NAME;

    const cloudURL = `https://api.cloudinary.com/v1_1/${ cloudName }/image/upload`;

    const formData = new FormData();
    formData.append('upload_preset', presetsName);
    formData.append('file', file);

    try {

        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData,
        });

        if( !resp.ok ) throw new Error('Could not upload images 😢');

        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch( error ) {
        throw new Error('Error uploading preset:', error.message);
    }
};