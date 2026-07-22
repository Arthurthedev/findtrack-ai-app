'use client'
import logoutIcon from "@/src/assets/sidebar/logout-icon..png";
import Image from "next/image";

import { authClient } from "@/src/lib/auth-client";
import { useRouter } from "next/navigation";

export const Logout = () => {
    const router = useRouter()
    async function handleLogout() {
        try {
            await authClient.signOut()
            router.push('/sign-in')
        } catch {
            console.error("Erro ao deslogar")
        }
    }

    return (
        <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-[#94A3B8] cursor-pointer" onClick={handleLogout}>
            <Image src={logoutIcon} alt="icone de saída" />
            <span className="text-base font-medium leading-normal text-center">
                Sair
            </span>
        </button>
    );
};
