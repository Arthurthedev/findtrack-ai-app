import Image from "next/image";
import iconReceitas from "@/src/assets/balance-card/receita-icon.png";
import iconDespesas from "@/src/assets/balance-card/despesa-icon.png";
import decorative from "@/src/assets/balance-card/wallet-icon.png";

function formatBRL(value: number): string {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}

export interface BalanceCardProps {
    balance: number;
    receitas: number;
    despesas: number;
}

export default function BalanceCard({
    balance,
    receitas,
    despesas,
}: BalanceCardProps) {
    return (
        <section
            className="relative flex w-full flex-col justify-between gap-2 self-stretch overflow-hidden rounded-[24px] bg-[#9333EA] p-8 font-[family-name:var(--font-inter)] shadow-[0px_8px_10px_-6px_rgba(168,85,247,0.2),0px_20px_25px_-5px_rgba(168,85,247,0.2)]"
            aria-label="Resumo do saldo"
        >
            {/* Overlays decorativos (círculos suaves) */}
            <div
                className="pointer-events-none absolute rounded-full bg-white/10"
                style={{ width: 256, height: 256, top: 46, right: -80 }}
                aria-hidden
            />
            <div
                className="pointer-events-none absolute rounded-full bg-white/5"
                style={{ width: 192, height: 192, left: -48, top: -48 }}
                aria-hidden
            />

            {/* Topo: Saldo total + ícone decorativo */}
            <div className="relative flex flex-row items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-[1.43] text-[#F3E8FF]">
                        Saldo total
                    </p>
                    <p className="text-[2.5rem] font-bold leading-none tracking-[-0.025em] text-white">
                        {formatBRL(balance)}
                    </p>
                </div>
                <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white/20 p-3 pb-3.5 pt-3 backdrop-blur-[12px]">
                    <Image
                        src={decorative}
                        alt="icone de carteira"
                        width={54}
                        height={63}
                        className="h-10 w-9 object-contain"
                    />
                </div>
            </div>

            {/* Divisor */}
            <div
                className="mt-6 border-t border-white/20 pt-6"
                role="separator"
                aria-hidden
            />

            {/* Receitas e Despesas em linha */}
            <div className="flex flex-row flex-wrap items-stretch justify-stretch gap-4">
                {/* Receitas */}
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            src={iconReceitas}
                            alt="icone de receitas"
                            width={14}
                            height={20}
                            className="h-3.5 w-3.5 shrink-0 object-contain"
                        />
                        <span className="text-xs font-normal leading-[1.33] text-[#F3E8FF]">
                            Receitas
                        </span>
                    </div>
                    <p className="text-xl font-semibold leading-[1.4] text-white">
                        {formatBRL(receitas)}
                    </p>
                </div>

                {/* Despesas */}
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            src={iconDespesas}
                            alt="icone de despesas"
                            width={14}
                            height={20}
                            className="h-3.5 w-3.5 shrink-0 object-contain"
                        />
                        <span className="text-xs font-normal leading-[1.33] text-[#F3E8FF]">
                            Despesas
                        </span>
                    </div>
                    <p className="text-xl font-semibold leading-[1.4] text-white">
                        {formatBRL(despesas)}
                    </p>
                </div>
            </div>
        </section>
    );
}
