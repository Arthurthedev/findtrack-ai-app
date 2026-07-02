import BalanceCard from "./_components/balance-card";
import FinancialMetricCard from "./_components/financial-metric-card";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";
import { ChartCard } from "./_components/chart-card";

export default function Home() {
    return (
        <div className="flex min-h-screen bg-[#0F111A]">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header userName="Arthur Moraes Thurler" />
                <main className="p-8 space-y-8">
                    <section className="grid lg:grid-cols-3 grid-cols-1 gap-6">
                        <div className="lg:col-span-2 col-span-1">
                        <BalanceCard
                            balance={1000}
                            revenues={500}
                            expenses={500}
                        />
                        </div>
                        <FinancialMetricCard
                            economy="+12%"
                            economyValue={120.0}
                        />
                    </section>
                    <section className="grid lg:grid-cols-2 grid-cols-1 gap-6">

                        <ChartCard
                            depositsTotal={1000}
                            expensesTotal={500}
                            investmentsTotal={500}
                            balance={1000}
                        />
                    </section>
                </main>
            </div>
        </div>
    );
}
