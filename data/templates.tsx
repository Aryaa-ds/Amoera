import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { InvitationData } from "./invitations/demo";
import type { MaroonEleganceData } from "./invitations/invitation-data";
import type { ModernBlueData } from "./invitations/modern-blue";

export type InvitationTemplateProps = {
    invitation: InvitationData | MaroonEleganceData | ModernBlueData;
    guestName?: string;
};

// Komponen loading fallback saat bundle template diunduh
const TemplateLoading = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F5]">
        <div className="flex flex-col items-center gap-3">
            <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#24364B] border-t-transparent" />
            <p className="font-serif text-sm italic text-[#667789] tracking-wider">
                Memuat Undangan...
            </p>
        </div>
    </div>
);

// Registry template berbasis dynamic import (Code Splitting)
export const templates: Record<string, ComponentType<InvitationTemplateProps>> = {
    "floral-minimalist": dynamic(
        () => import("@/components/invitation/floral-minimalist/Index"),
        { loading: TemplateLoading }
    ) as ComponentType<InvitationTemplateProps>,
    "maroon-elegance": dynamic(
        () => import("@/components/invitation/maroon-elegance/Index"),
        { loading: TemplateLoading }
    ) as ComponentType<InvitationTemplateProps>,
    "modern-blue": dynamic(
        () => import("@/components/invitation/modern-blue/Index"),
        { loading: TemplateLoading }
    ) as ComponentType<InvitationTemplateProps>,

};

export default templates;
