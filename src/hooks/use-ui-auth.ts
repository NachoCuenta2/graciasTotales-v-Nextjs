import { uiMessageStore } from "@/store/ui/auth/auth-message";

export const useUiAuth = () => {
    const message = uiMessageStore(state => state.message);
    const isActiveMessage = uiMessageStore(state => state.isActiveMessage);
    const setMessage = uiMessageStore(state => state.setMessage);
    const setIsActiveMessage = uiMessageStore(state => state.setIsActiveMessage);

    return {
        message,
        isActiveMessage,
        setMessage,
        setIsActiveMessage
    }
}