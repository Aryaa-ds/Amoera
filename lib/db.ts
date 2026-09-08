import { Timestamp } from "firebase-admin/firestore";
import { getFirebaseDb } from "./firebase-admin";

export type RsvpItem = {
    id: string;
    slug: string;
    name: string;
    attendance: "hadir" | "tidak_hadir";
    wishes: string;
    createdAt: string;
};

type FirestoreRsvpItem = Omit<RsvpItem, "id" | "createdAt"> & {
    createdAt?: Timestamp | Date | string;
};

const RSVP_COLLECTION =
    process.env.FIREBASE_RSVP_COLLECTION?.trim() || "rsvps";

function toIsoDate(value: FirestoreRsvpItem["createdAt"]) {
    if (value instanceof Timestamp) {
        return value.toDate().toISOString();
    }

    if (value instanceof Date) {
        return value.toISOString();
    }

    if (typeof value === "string" && value.trim()) {
        return value;
    }

    return new Date().toISOString();
}

function toRsvpItem(id: string, data: FirestoreRsvpItem): RsvpItem {
    return {
        id,
        slug: data.slug,
        name: data.name,
        attendance: data.attendance,
        wishes: data.wishes,
        createdAt: toIsoDate(data.createdAt),
    };
}

export async function getRsvpsBySlug(slug: string): Promise<RsvpItem[]> {
    try {
        const snapshot = await getFirebaseDb()
            .collection(RSVP_COLLECTION)
            .where("slug", "==", slug)
            .get();

        return snapshot.docs
            .map((doc) => toRsvpItem(doc.id, doc.data() as FirestoreRsvpItem))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch (error) {
        console.error("Error reading RSVPs from Firestore:", error);
        throw error;
    }
}

export async function addRsvp(
    data: Omit<RsvpItem, "id" | "createdAt">
): Promise<RsvpItem> {
    try {
        const createdAt = Timestamp.now();
        const payload: FirestoreRsvpItem = {
            ...data,
            createdAt,
        };

        const doc = await getFirebaseDb()
            .collection(RSVP_COLLECTION)
            .add(payload);

        return toRsvpItem(doc.id, payload);
    } catch (error) {
        console.error("Error saving RSVP to Firestore:", error);
        throw error;
    }
}
