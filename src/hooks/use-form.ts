import { useEffect, useMemo, useState } from "react";

// Definir la interfaz para el estado del formulario
interface FormState {
    displayName: string;
    Email: string;
    Contraseña: string;
}

// Definir un tipo para las claves de FormState
type FormKeys = keyof FormState;

// Definir la interfaz para el retorno de UseForm
interface UseFormReturn extends FormState {
    OnInputchange: ({ target }: { target: { name: string; value: string } }) => void;
    reset: () => void;
    isFormValid: boolean;
}



export const UseForm = (
    initialForm: FormState,
    formValidations: { [key in FormKeys]?: [(value: string) => boolean, string] } = {}): UseFormReturn => {
    const [formState, setFormState] = useState<FormState>(initialForm);
    const [formValidation, setFormValidation] = useState<{ [key: string]: string | null }>({});

    useEffect(() => {
        createValidators();
    }, [formState]);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm]);

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);

    const OnInputchange = ({ target }: { target: { name: string; value: string } }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const reset = () => {
        setFormState(initialForm);
    };

    const createValidators = () => {
        const formCheckedValues: { [key: string]: string | null } = {};

        for (const formField of Object.keys(formValidations) as FormKeys[]) {
            const validation = formValidations[formField];

            // Asegúrate de que validation no es undefined
            if (validation) {
                const [fn, errorMessage] = validation; // Desestructuración segura
                formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            }
        }

        setFormValidation(formCheckedValues);
    };

    return {
        ...formState, // Desestructuramos el estado del formulario
        OnInputchange,
        reset,
        isFormValid,
    };
};
