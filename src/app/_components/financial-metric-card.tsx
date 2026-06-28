import Image from "next/image"
import PigIcon  from "../../assets/finalncial-metric-card/pig-icon.png";

interface financialMetricProps {
    economy: string,
    economyValue: number
}

export  default function FinancialMetricCard({economy, economyValue}: financialMetricProps) {
    const economyNotice = `Você economizou R$${economyValue} a mais que no mês passado.`
    return(
        <div className="flex flex-col items-center justify-center text-white bg-[#161B26] rounded-2xl py-6 px-4">
            <div className="mb-4 py-5 px-4 bg-[#10B981]/20 rounded-full">
                <Image src={PigIcon} alt="Icone de porquinho"/>
            </div>
            <h4 className="text-lg font-bold mb-2">Economia do mês</h4>
            <p className="text-3xl font-bold mb-2 text-[#10B981]">{economy}</p>
            <p className="text-center text-xs text-[#64748B]">{economyNotice}</p>
        </div>
    )
}