import Link from "next/link";
import Image from "next/image";

export default function Logo({ logoSlug, logoWidth = 120, logoHeight = 120 }) {
    if (!logoSlug) {
        return null;
    }

    return (
        <div className="text-2xl font-bold">
            <Link href="/">
                <Image src={logoSlug} alt="Logo" width={logoWidth} height={logoHeight} />
            </Link>
        </div>
    );
}