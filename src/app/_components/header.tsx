import Image from "next/image";
import { Inter } from "next/font/google";
import userAvatar from "@/src/assets/header/user-avatar.png";

interface headerProps{
    userName: string
}

const inter = Inter({   
    subsets: ["latin"],
    weight: ["400", "600"],
}); 

function formatCurrentDate() {
    return new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    }).format(new Date());
}

export default function Header({userName}: headerProps) {
    const date = formatCurrentDate();
    const formattedDate = date.charAt(0).toUpperCase() + date.slice(1);

    const firstName = userName.split(' ')[0]
    const greeting = `Bem-vindo de volta, ${firstName}! 👋`

    return (
        <header
            className={`${inter.className} flex h-20 items-center justify-between border-b border-[#1E293B] bg-[#0F111A] px-8`}
        >
            <div className="flex flex-col">
                <h2 className="text-lg font-semibold leading-7 text-[#F1F5F9]">
                    {greeting}
                </h2>
                <p className="text-xs leading-4 text-[#94A3B8]">
                    {formattedDate}
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#334155] bg-[#1E293B]">
                    <Image
                        src={userAvatar}
                        alt="Avatar do usuário"
                        width={38}
                        height={38}
                        className="h-10 w-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
