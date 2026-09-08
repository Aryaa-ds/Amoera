import { NextRequest, NextResponse } from "next/server";
import { getRsvpsBySlug, addRsvp } from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const validAttendance = new Set(["hadir", "tidak_hadir"]);

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug")?.trim();

    if (!slug) {
        return NextResponse.json(
            { error: "Parameter slug diperlukan." },
            { status: 400 }
        );
    }

    try {
        const rsvps = await getRsvpsBySlug(slug);
        return NextResponse.json(
            { success: true, data: rsvps },
            { headers: { "Cache-Control": "no-store" } }
        );
    } catch {
        return NextResponse.json(
            { error: "Gagal mengambil data RSVP." },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { slug, name, attendance, wishes } = body;
        const normalizedAttendance = String(attendance || "").trim();

        if (!slug || !name || !normalizedAttendance) {
            return NextResponse.json(
                { error: "Slug, nama, dan status kehadiran wajib diisi." },
                { status: 400 }
            );
        }

        if (!validAttendance.has(normalizedAttendance)) {
            return NextResponse.json(
                { error: "Status kehadiran tidak valid." },
                { status: 400 }
            );
        }

        const savedRsvp = await addRsvp({
            slug: String(slug).trim(),
            name: String(name).trim(),
            attendance: normalizedAttendance as "hadir" | "tidak_hadir",
            wishes: String(wishes || "").trim(),
        });

        return NextResponse.json({ success: true, data: savedRsvp }, { status: 201 });
    } catch {
        return NextResponse.json(
            { error: "Gagal menyimpan data RSVP." },
            { status: 500 }
        );
    }
}
