'use client';

import { resumeData } from '@/data/resume';

export default function Contact() {
    const socialLinks = [
        {
            name: 'GitHub',
            url: resumeData.personal.github,
            icon: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            color: 'hover:bg-[#333]'
        },
        {
            name: 'LinkedIn',
            url: resumeData.personal.linkedin,
            icon: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            color: 'hover:bg-[#0077b5]'
        },
        {
            name: 'Farcaster',
            url: resumeData.personal.farcaster,
            icon: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M18.24.24H5.76C2.5789.24 0 2.8188 0 6v12c0 3.1811 2.5789 5.76 5.76 5.76h12.48c3.1812 0 5.76-2.5789 5.76-5.76V6C24 2.8188 21.4212.24 18.24.24m.8155 17.1662v.504c.2868-.0256.5458.1905.5439.479v.5688h-5.1437v-.5688c-.0019-.2885.2576-.5047.5443-.479v-.504c0-.22.1525-.402.358-.458l-.0095-4.3645c-.1589-1.7366-1.6402-3.0979-3.4435-3.0979-1.8038 0-3.2846 1.3613-3.4435 3.0979l-.0096 4.3578c.2276.0424.5318.2083.5395.4648v.504c.2863-.0256.5457.1905.5438.479v.5688H4.3915v-.5688c-.0019-.2885.2575-.5047.5438-.479v-.504c0-.2529.2011-.4548.4536-.4724v-7.895h-.4905L4.2898 7.008l2.6405-.0005V5.0419h9.9495v1.9656h2.8219l-.6091 2.0314h-.4901v7.8949c.2519.0177.453.2195.453.4724" />
                </svg>
            ),
            color: 'hover:bg-[#855DCD]'
        },
        {
            name: 'X',
            url: resumeData.personal.x,
            icon: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
            ),
            color: 'hover:bg-black'
        },
        {
            name: 'Telegram',
            url: resumeData.personal.telegram,
            icon: (props: any) => (
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            ),
            color: 'hover:bg-[#26A5E4]'
        }
    ];

    return (
        <section id="contact" className="w-full min-h-screen py-20 bg-primary relative overflow-hidden flex items-center justify-center">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-9xl font-display font-black uppercase text-white mb-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] md:drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                    LET'S WORK<br />TOGETHER
                </h2>

                <div className="flex flex-col items-center gap-8">
                    <a
                        href={`mailto:${resumeData.personal.email}`}
                        className="text-lg md:text-5xl font-mono font-bold bg-white border-[4px] border-black px-6 py-4 md:px-10 md:py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 break-all"
                    >
                        {resumeData.personal.email}
                    </a>

                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center bg-white text-black p-4 rounded-full border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:text-white hover:scale-110 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300 ${social.color}`}
                                aria-label={social.name}
                            >
                                <social.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
