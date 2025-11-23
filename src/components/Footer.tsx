import { resumeData } from '@/data/resume';

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-black text-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="font-display font-bold text-xl mb-4 md:mb-0">
                    AGK_PORTFOLIO © {new Date().getFullYear()}
                </div>
                <div className="font-mono text-sm text-gray-400">
                    Designed with Neubrutalism style.
                </div>
            </div>
        </footer>
    );
}
