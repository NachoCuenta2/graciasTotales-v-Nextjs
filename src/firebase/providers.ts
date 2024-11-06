// firebase/providers.ts
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    UserCredential
} from "firebase/auth";
import { FireBaseAuth } from "./config";
import { ApiResponse } from '../infraestructure/interfaces/api-response';
import { UserEntities } from "@/core/entities/user-entities";

const googleProvider = new GoogleAuthProvider();

export const signWithGoogle = async (): Promise<ApiResponse<UserEntities>> => {
    try {
        const data = await signInWithPopup(FireBaseAuth, googleProvider);
        const { displayName, email, uid } = data.user;
        if (displayName && email) {

            return {
                data: { displayName, email, uid },
                ok: true
            };
        } else {
            return {
                ok: false,

            };
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,

        };
    }
}

export const RegisterWithEmailPassword = async (emailP: string, password: string, displayName: string): Promise<ApiResponse<UserEntities>> => {
    try {
        const resp: UserCredential = await createUserWithEmailAndPassword(FireBaseAuth, emailP, password);
        await updateProfile(FireBaseAuth.currentUser!, { displayName });
        const { uid } = resp.user;
        return {
            ok: true,
            data: { email: emailP, uid, displayName }
        };
    } catch (error) {
        console.log(error)
        return {
            ok: false,
        };
    }
}

export const LogInWithEmailPassword = async (emailP: string, password: string): Promise<ApiResponse<UserEntities>> => {
    try {
        const resp: UserCredential = await signInWithEmailAndPassword(FireBaseAuth, emailP, password);
        const { email, uid, photoURL, displayName } = resp.user;
        if (!displayName) {
            return { ok: false }
        }

        return {
            ok: true,
            data: { email: emailP, uid, displayName }
        };
    } catch (error) {
        console.log(error)
        return {
            ok: false
        };
    }
}
