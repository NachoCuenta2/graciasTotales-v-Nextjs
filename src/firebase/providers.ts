// firebase/providers.ts
import { GoogleAuthProvider, signInWithPopup, UserCredential } from "firebase/auth";
import { FireBaseApp } from "./config";
import { ApiResponse } from '../infraestructure/interfaces/api-response';
import { UserEntities } from "@/core/entities/user-entities";

const googleProvider = new GoogleAuthProvider();

export const signWithGoogle = async (): Promise<ApiResponse<UserEntities>> => {
    try {
        // Carga diferida del módulo de autenticación
        const { getAuth } = await import("firebase/auth");
        const FireBaseAuth = getAuth(FireBaseApp);

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
        // Carga diferida del módulo de autenticación
        const { getAuth, createUserWithEmailAndPassword, updateProfile } = await import("firebase/auth");
        const FireBaseAuth = getAuth(FireBaseApp);

        const resp: UserCredential = await createUserWithEmailAndPassword(FireBaseAuth, emailP, password);
        await updateProfile(FireBaseAuth.currentUser!, { displayName });
        const { uid } = resp.user;

        return {
            ok: true,
            data: { email: emailP, uid, displayName }
        };
    } catch (error: unknown) {
        console.log(error)
        return {
            ok: false,
            msg: `${error}`.split('FirebaseError: ')[1]
        };
    }
}

export const LogInWithEmailPassword = async (emailP: string, password: string): Promise<ApiResponse<UserEntities>> => {
    try {
        // Carga diferida del módulo de autenticación
        const { getAuth, signInWithEmailAndPassword } = await import("firebase/auth");
        const FireBaseAuth = getAuth(FireBaseApp);

        const resp: UserCredential = await signInWithEmailAndPassword(FireBaseAuth, emailP, password);
        const { uid, displayName } = resp.user;
        if (!displayName) {
            return { ok: false }
        }

        return {
            ok: true,
            data: { email: emailP, uid, displayName }
        };
    } catch (error: unknown) {
        console.log(error)
        return {
            ok: false,
            msg: `${error}`.split('FirebaseError: ')[1]
        };
    }
}
