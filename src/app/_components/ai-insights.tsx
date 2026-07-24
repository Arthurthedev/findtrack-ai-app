"use client";
import Image from "next/image";
import starIcon from "@/src/assets/ai-insights/star-icon.png";
import bulbIcon from "@/src/assets/ai-insights/bulb-icon.png";
import insightsIcon from "@/src/assets/ai-insights/insights-icon.png";
import refreshIcon from "@/src/assets/ai-insights/refresh-icon.png";
import { TransactionCategory } from "@prisma/client";
import { useEffect, useState, useRef, useCallback } from "react";
import { Loader2 } from "lucide-react";

interface CategorySumary {
    category: TransactionCategory;
    totalAmount: number;
    percentageOfTotal: number;
}

interface AiInsightsProps {
    month: string;
    year: number;
    depositsTotal: number;
    expensesTotal: number;
    investmentsTotal: number;
    balance: number;
    totalExpensePerCategory: CategorySumary[];
}

interface AiResponse {
    suggestion: string;
    topCategory: string | null;
    topCategoryAmount: string | null;
}

export default function AiInsights(props: AiInsightsProps) {
    const {
        month,
        year,
        depositsTotal,
        expensesTotal,
        investmentsTotal,
        balance,
        totalExpensePerCategory,
    } = props;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [suggestion, setSuggestion] = useState<string | null>(null);
    const [topCategory, setTopCategory] = useState<string | null>(null);
    const [topCategoryAmount, setTopCategoryAmount] = useState<string | null>(null);

    const hasFetched = useRef(false);

    const fetchInsights = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/ai-insights", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    month,
                    year,
                    depositsTotal,
                    expensesTotal,
                    investmentsTotal,
                    balance,
                    totalExpensePerCategory,
                }),
            });

            if (response.status === 429) {
                setError("Limite de análises da IA atingido. Aguarde cerca de 1 minuto.");
                return;
            }

            const data: AiResponse = await response.json();

            if (!response.ok) {
                setError(data?.suggestion ?? "Erro ao carregar análise");
                return;
            }

            setSuggestion(data.suggestion ?? null);
            setTopCategory(data.topCategory ?? null);
            setTopCategoryAmount(data.topCategoryAmount ?? null);
        } catch (err) {
            console.error(err);
            setError("Erro ao conectar. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }, [
        month,
        year,
        depositsTotal,
        expensesTotal,
        investmentsTotal,
        balance,
        totalExpensePerCategory,
    ]);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        fetchInsights();
    }, [fetchInsights]);

    return (
        <div className="text-white space-y-6">
            <div className="flex items-center gap-2">
                <Image src={starIcon} alt="star icon" />
                <h3 className="text-xl font-bold">Insights com IA</h3>
            </div>

            {loading ? (
                <div className="bg-[#161b26] p-8 rounded-2xl border border-[#1d293d] flex flex-col items-center justify-center gap-4 min-h-[200px]">
                    <Loader2 className="h-10 w-10 animate-spin text-violet-500" />
                    <p className="text-sm text-slate-400">
                        Analisando seus dados do mês...
                    </p>
                </div>
            ) : error ? (
                <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
                    <p className="text-sm text-red-400">{error}</p>
                    <button
                        type="button"
                        onClick={fetchInsights}
                        className="mt-3 text-sm font-medium text-violet-400 hover:text-violet-300"
                    >
                        Tentar novamente
                    </button>
                </div>
            ) : (
                <>
                    {topCategory && topCategoryAmount && (
                        <div className="bg-[#161b26] p-6 rounded-2xl border border-[#1d293d] flex gap-4">
                            <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-xl">
                                <Image src={insightsIcon} alt="Insights Icon" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm">
                                    Categoria com maior gasto
                                </p>
                                <p className="font-semibold">
                                    {topCategory}: {topCategoryAmount}
                                </p>
                            </div>
                        </div>
                    )}

                    {suggestion && (
                        <div className="bg-emerald-500/5 border-emerald-500/20 p-6 rounded-2xl border flex gap-4">
                            <div className="bg-emerald-100 dark:bg-emerald-500/20 p-3 rounded-xl h-fit shrink-0">
                                <Image src={bulbIcon} alt="Bulb Icon" />
                            </div>
                            <div>
                                <p className="font-medium text-emerald-400 mb-2">
                                    Sugestão de economia
                                </p>
                                <div className="text-sm text-slate-300 whitespace-pre-line">
                                    {suggestion}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}

            {!suggestion && !topCategory && !loading && !error && (
                <div className="bg-[#161b26] p-6 rounded-2xl border border-[#1d293d] text-center text-slate-400 text-sm">
                    Adicione transações no mês para receber sugestões da IA.
                </div>
            )}

            <button
                onClick={fetchInsights}
                className="flex items-center justify-center w-full gap-3 border-2 border-dashed border-[#1E293B] py-4 rounded-2xl hover:border-[#9333EA]"
            >
                <Image src={refreshIcon} alt="refresh icon" />
                <span>Atualizar análise</span>
            </button>
        </div>
    );
}