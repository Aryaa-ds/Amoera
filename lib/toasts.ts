import { toast } from "sonner";

export const notify = {
    copied: (message = "Berhasil disalin.") =>
        toast.success(message),

    success: (message: string) =>
        toast.success(message),

    error: (message: string) =>
        toast.error(message),

    loading: (message: string) =>
        toast.loading(message),

    info: (message: string) =>
        toast(message),
};