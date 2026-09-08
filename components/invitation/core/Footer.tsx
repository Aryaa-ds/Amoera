"use client";

export default function Footer() {
    return (
        <footer className="bg-dark  px-3 py-10">

            <div className="mx-auto max-w-md text-center">


                {/* Made with love */}
                <p className="mt-5 text-sm text-muted">
                    Made with <span aria-label="love">♥</span> by AMOERA
                </p>

                {/* Social */}
                <div className="mt-8 flex items-center justify-center gap-3">

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/amoera.inv"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram AMOERA"
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            text-heading
                            transition
                            hover:border-primary
                            hover:text-primary
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect
                                width="20"
                                height="20"
                                x="2"
                                y="2"
                                rx="5"
                            />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp AMOERA"
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            text-heading
                            transition
                            hover:border-primary
                            hover:text-primary
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-4.1-1.1L3 20l1.3-4.7A8.3 8.3 0 1 1 21 11.5Z" />
                            <path d="M8 9.5c.2-.4.4-.5.7-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.7 1.2 1.7 2.1 3 2.7l.5-.6c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.4.6v.6c0 .3-.1.5-.4.7-.5.3-1.1.4-1.7.2-3.4-.9-6-3.5-6.9-6.9-.2-.6-.1-1.2.2-1.7Z" />
                        </svg>
                    </a>

                </div>

                {/* Copyright */}
                <p className="mt-8 text-[10px] tracking-[0.2em] text-muted">
                    © {new Date().getFullYear()} AMOERA
                </p>

            </div>

        </footer>
    );
}