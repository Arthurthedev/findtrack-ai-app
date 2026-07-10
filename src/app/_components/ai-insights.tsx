import Image from "next/image";
import starIcon from "@/src/assets/ai-insights/star-icon.png";
import bulbIcon from "@/src/assets/ai-insights/bulb-icon.png";
import insightsIcon from "@/src/assets/ai-insights/insights-icon.png";
import refreshIcon from "@/src/assets/ai-insights/refresh-icon.png";

export default function AiInsights() {
    return (
        <div className="text-white space-y-6">
            <div className="flex items-center gap-2">
                <Image src={starIcon} alt="star icon" />
                <h3 className="text-xl font-bold">Insights com IA</h3>
            </div>

            <div className="bg-[#161B26] p-6 rounded-2xl flex items-center gap-4">
                <div className="bg-[#A855F7]/20 p-4 rounded-xl">
                    <Image src={insightsIcon} alt="insights icon" />
                </div>

                <div>
                    <p>Categoria com maior gasto</p>
                    <p className="text-sm text-[#94A3B8] ">Alimentação: <span className="text-[#9333EA] ml-1 font-semibold">R$ 42,00</span></p>
                </div>
            </div>

            <div className="bg-[#10B9810D] p-6 rounded-2xl flex items-center gap-4">
                <div className="bg-[#10B98133] p-4 rounded-xl">
                    <Image src={bulbIcon} alt="bulb icon" />
                </div>

                <div>
                    <p>Sugestão de economia</p>
                    <p className="text-sm text-[#CBD5E1]">
                        Para economizar em alimentação, cozinhe mais em casa. Planeje as refeições e leve marmita.
                    </p>
                </div>
            </div>

            <button className="flex items-center justify-center w-full gap-3 border-2 border-dashed border-[#1E293B] py-4 rounded-2xl hover:border-[#9333EA] cursor-pointer">
                <Image src={refreshIcon} alt="refresh icon" />
                <span>Atualizar análise</span>
            </button>
        </div>
    );
}
