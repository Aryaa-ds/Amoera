import Cover from "./Cover";
import BrideGroom from "./BrideGroom";
import QuranVerse from "./QuranVerse";
import LoveStory from "./LoveStory";
import WeddingEvent from "./WeddingEvent";
import Gallery from "./Gallery";
import Countdown from "./Countdown";
import WeddingGift from "./WeddingGift";
import RSVP from "./RSVP";
import Closing from "./Closing";
import Hero from "./Hero";
import MusicPlayer from "@/components/invitation/core/MusicPlayer";
import Footer from "@/components/invitation/core/Footer";
import type { InvitationData } from "@/data/invitations/demo";
import Refeal from "@/components/invitation/core/Refeal";

type Props = {
    invitation: InvitationData;
    guestName?: string;
};

export default function FloralMinimalist({
    invitation,
    guestName = "Tamu Undangan",
}: Props) {
    return (
        <>
            <Cover
                brideName={invitation.bride.name}
                groomName={invitation.groom.name}
                date={invitation.date}
                guestName={guestName}
                coverImage={invitation.cover}
            />
            <Hero
                brideName={invitation.bride.name}
                groomName={invitation.groom.name}
                date={invitation.date}
                coverImage={invitation.cover}
                weddingDate={invitation.weddingDate}
            />
            <Refeal animation="up">
                <Countdown
                    targetDate={invitation.weddingDate}
                />
            </Refeal>
            <BrideGroom
                bride={invitation.bride}
                groom={invitation.groom}
            />

            <QuranVerse />

            <LoveStory
                story={invitation.story}
            />

            <WeddingEvent
                akad={invitation.event.akad}
                reception={invitation.event.reception}
            />

            <Gallery images={invitation.gallery} />

            <WeddingGift gift={{
                banks: invitation.gift.banks,
                qris: invitation.gift.qris,
            }} />

            <RSVP
                slug={invitation.slug}
                guestName={guestName}
            />

            <Closing />
            <MusicPlayer music={invitation.music} />
            <Footer />
        </>
    );
}