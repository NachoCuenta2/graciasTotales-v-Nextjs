import { FireBaseApp } from "@/firebase/config";

export const AddUserToFirebase = async (uid: string, displayName: string) => {

    try {
        const { doc, setDoc, getFirestore } = await import("firebase/firestore");
        const FireBaseDB = getFirestore(FireBaseApp);
        await setDoc(doc(FireBaseDB, "usuarios", uid), {
            displayName: displayName,
            uid: uid,
        });
        console.log("Usuario agregado o actualizado correctamente");
    } catch (e) {
        console.error("Error al agregar o actualizar el usuario: ", e);
    }
}