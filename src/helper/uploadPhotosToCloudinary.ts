
export const UploadingPhotos = async (files: File[]) => {
    const fileUploadPromises = [];
    for (const file of files) {
        fileUploadPromises.push(FilesUpload(file));
    }
    const photoURL = await Promise.all(fileUploadPromises);
    return photoURL
}
export const FilesUpload = async (file: File) => {

    if (!file) throw new Error('No se encontro ningun archivo para subir');
    const cloudURL = 'https://api.cloudinary.com/v1_1/nachoTrevisan/upload';
    const formData = new FormData();

    formData.append('upload_preset', 'graciasTotales-mern');
    formData.append('file', file);


    try {
        const resp = await fetch(cloudURL,
            {
                method: 'POST',
                body: formData,
            });
        console.log(resp)
        if (!resp.ok) {
            throw new Error('No se pudo subir ninguna imagen');
        } else {
            const cloudResp = await resp.json();

            return cloudResp.secure_url;
        }
    } catch (error: unknown) {
        console.log(error)
        throw new Error('No se pudo traer las imagenes del proveedor de imagenes');
    }
}