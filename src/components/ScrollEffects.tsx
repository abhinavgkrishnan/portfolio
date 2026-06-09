'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
    useEffect(() => {
        const nav = document.getElementById('topnav');
        const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let revealObs: IntersectionObserver | undefined;
        if (!reduce) {
            document.body.classList.add('reveal-ready');
            revealObs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            e.target.classList.add('in');
                            revealObs?.unobserve(e.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
            );
            document.querySelectorAll('.reveal').forEach((el) => revealObs?.observe(el));
        }

        const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'));
        const map: Record<string, HTMLAnchorElement> = {};
        links.forEach((a) => {
            map[a.getAttribute('href')!.slice(1)] = a;
        });
        const secObs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        links.forEach((a) => a.classList.remove('active'));
                        const el = map[e.target.id];
                        if (el) el.classList.add('active');
                    }
                });
            },
            { threshold: 0.4 }
        );
        ['work', 'about', 'experience', 'contact'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) secObs.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
            revealObs?.disconnect();
            secObs.disconnect();
        };
    }, []);

    return null;
}
