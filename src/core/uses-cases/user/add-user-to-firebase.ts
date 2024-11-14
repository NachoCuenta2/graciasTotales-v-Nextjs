import { FireBaseDB } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const AddUserToFirebase = async (uid: string, displayName: string) => {

    try {
        await setDoc(doc(FireBaseDB, "usuarios", uid), {
            displayName: displayName,
            uid: uid,
        });
        console.log("Usuario agregado o actualizado correctamente");
    } catch (e) {
        console.error("Error al agregar o actualizar el usuario: ", e);
    }
}