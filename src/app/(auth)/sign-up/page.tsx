import { AuthLayout } from "../_components/auth-layout";
import ArrowIcon from "../../../assets/arrow-icon.png";
import Image from "next/image";
import { inputClass } from "../_styles/input";

export default function SingUpPage() {
    return (
        <AuthLayout
            title="Criar conta"
            description="Preencha os dados para começar"
            footerText="Já tem uma conta?"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >
            <form className="space-y-6">
                <label className="block text-sm text-zinc-300 mb-2">Nome</label>
                <input
                    type="text"
                    placeholder="Seu nome"
                    className={inputClass}
                />
                <label className="block text-sm text-zinc-300 mb-2">
                    E-mail
                </label>
                <input
                    type="email"
                    placeholder="seu@email.com"
                    className={inputClass}
                />
                <label className="block text-sm text-zinc-300 mb-2">
                    Senha (mín. 8 caracteres)
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className={inputClass}
                />
            </form>

            <button
                type="submit"
                className="w-full bg-[#9333EA] flex items-center justify-center rounded-2xl py-4 gap-2 font-semibold cursor-pointer"
            >
                <span>Criar conta</span>
                <Image
                    src={ArrowIcon}
                    alt="imagem de seta da página de login"
                />
            </button>
        </AuthLayout>
    );
}
