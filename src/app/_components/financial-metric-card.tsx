import Image from "next/image";
import PigGreenIcon from "../../assets/finalncial-metric-card/pig-green-icon.png";
import PigRedIcon from "../../assets/finalncial-metric-card/pig-red-icon.png";

interface financialMetricProps {
    economy: number;
    economyValue: number;
}

function getFinancialMetricData(economy: number, economyValue: number) {
    const isNegative = economy < 0;

    return {
        percentage: economy,
        notice: isNegative
            ? `Você economizou R$${Math.abs(economyValue)} a menos que no mês passado.`
            : `Você economizou R$${economyValue} a mais que no mês passado.`,
        colors: {
            text: isNegative ? "text-red-500" : "text-green-500",
            bg: isNegative ? "bg-red-500/20" : "bg-green-500/20",
        },
        icon: isNegative ? PigRedIcon : PigGreenIcon,
    };
}

export default function FinancialMetricCard(props: financialMetricProps) {
    const data = getFinancialMetricData(props.economy, props.economyValue);

    return (
        <div className="flex flex-col items-center justify-center text-white bg-[#161B26] rounded-2xl py-6 px-4">
            <div className={`mb-4 py-5 px-4 ${data.colors.bg} rounded-full`}>
                <Image className="w-[30px] h-[29px]" src={data.icon} alt="Icone de porquinho" />
            </div>

            <h4 className="text-lg font-bold mb-2">Economia do mês</h4>

            <p className={`text-3xl font-bold mb-2 ${data.colors.text}`}>
                {data.percentage}%
            </p>

            <p className="text-center text-xs text-[#64748B]">
                {data.notice}
            </p>
        </div>
    );
}