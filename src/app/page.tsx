import BalanceCard from "./_components/balance-card";
import Header from "./_components/header";
import Sidebar from "./_components/sidebar";

export default function Home() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Header userName="Arthur Moraes Thurler" />
                <main className="flex-1 p-8 bg-[#0F111A]">
                    <BalanceCard
                    balance={1000}
                    receitas={500}
                    despesas={500}
                    />
                </main>
            </div>
        </div>
    );
}
