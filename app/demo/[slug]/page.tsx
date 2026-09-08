import { notFound } from "next/navigation";
import { invitations } from "@/data/invitations";
import { templates } from "@/data/templates";

const DEFAULT_GUEST_NAME = "Tamu Undangan";

type Props = {
    params: Promise<{
        slug: string;
    }>;
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
};

function getQueryValue(value: string | string[] | undefined) {
    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
}

function normalizeGuestName(query: Awaited<NonNullable<Props["searchParams"]>>) {
    const rawGuest =
        getQueryValue(query.to) ||
        getQueryValue(query.guest) ||
        getQueryValue(query.kepada) ||
        getQueryValue(query.nama) ||
        getQueryValue(query.name) ||
        getQueryValue(query.u);

    if (!rawGuest?.trim()) {
        return DEFAULT_GUEST_NAME;
    }

    return rawGuest.trim().replace(/\+/g, " ");
}

export default async function InvitationPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const query = searchParams ? await searchParams : {};

    const guestName = normalizeGuestName(query);

    const invitation = invitations.find(
        (item) => item.slug === slug
    );

    if (!invitation) {
        notFound();
    }

    const TemplateComponent = templates[invitation.template];

    if (!TemplateComponent) {
        notFound();
    }

    return (
        <TemplateComponent
            invitation={invitation}
            guestName={guestName}
        />
    );
}
