export const TranslateErrorMessage = (ErrorMessage: string): string | null => {
    switch (ErrorMessage) {
        case "Firebase: Error (auth/missing-email).":
            console.log('1')

            return "Por favor ingrese el email";

        case "Firebase: Error (auth/email-already-in-use).":
            console.log('2')

            return "Este email ya existe, por favor ingrese otro o inicie sesion";

        case "Firebase: Error (auth/invalid-credential).":
            console.log('3')

            return "Por favor, asegurese de haber ingresado sus credenciales correctamente";

        default:
            console.log('4', ErrorMessage)
            return null;
    }
}



