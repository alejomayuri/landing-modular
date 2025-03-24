"use client"
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/app/hooks/useScroll"; 

export default function Logo({ logoSlug, logoSlugScrolled, logoWidth = 120, logoHeight = 120 }) {
    const hasScrolled = useScroll();
    
    const logoClass = hasScrolled ? logoSlugScrolled ?? logoSlug : logoSlug;
    
    if (!logoSlug) {
        return null;
    }

    return (
        <div className="text-2xl font-bold">
            <Link href="/">
                <Image src={logoClass} alt="Logo" width={logoWidth} height={logoHeight} />
            </Link>
        </div>
    );
}