"use client";

import { useState } from "react";
import { WalletSearchForm } from "@/components/wallet/wallet-search-form";
import { useWalletTransactions } from "@/features/wallet-analyzer/hooks/use-wallet-transactions";
import { TransactionTable } from "@/components/wallet/transaction-table";
import { useWalletAnalysis } from "@/features/wallet-analyzer/hooks/use-wallet-analysis";
import { AnalyticsCards } from "@/components/wallet/analytics-cards";
import { useWalletInsights } from "@/features/wallet-analyzer/hooks/use-wallet-insights";
import { LargestTransactions } from "@/components/wallet/largest-transactions";
import { TopCounterparties } from "@/components/wallet/top-counterparties";
import { BehaviorTags } from "@/components/wallet/behavior-tags";
import { SectionCard } from "@/components/common/section-card";
import { useMounted } from "@/features/wallet-analyzer/hooks/use-mounted";
import { ActivityChart } from "@/components/wallet/activity-chart";
import { FlowChart } from "@/components/wallet/flow-chart";
import { useWalletChartData } from "@/features/wallet-analyzer/hooks/use-wallet-chart-data";
import { TimeFilter } from "@/components/wallet/time-filter";
import { ChainSelector } from "@/components/wallet/chain-selector";
import { getChain } from "@/features/utils/get-chain";
import { Loader, Loader2, Loader2Icon } from "lucide-react";

export default function AnalyzerPage() {
    const [address, setAddress] = useState<string>();
    const [chain, setChain] = useState("0x2105"); // Base default
    const { data, isLoading } = useWalletTransactions(address, chain);
    const [range, setRange] = useState<"7d" | "30d" | "90d">("7d");
    const analysis = useWalletAnalysis(data?.items);
    const insights = useWalletInsights(data?.items);
    const chartData = useWalletChartData(data?.items, range);
    const currentChain = getChain(chain);
    const Icon = currentChain?.icon;

    const mounted = useMounted();

    if (!mounted) return null;

    return (
        <div className="relative min-h-screen text-white overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-950 via-indigo-800 to-indigo-950" />

                <div className="absolute top-0 left-1/2 w-225 h-full bg-blue-700/20 blur-[120px] -translate-x-1/2" />
                <div className="absolute bottom-0 right-1/2 w-225 h-full bg-purple-700/30 blur-[120px] translate-x-1/2" />
            </div>
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Wallet Transaction Analyzer
                    </h1>
                    <p className="flex items-center gap-2 text-zinc-400 mt-1">

                        Analyzing {currentChain?.name}
                    </p>
                </div>
                <div className="mb-4">
                    <ChainSelector value={chain} onChange={setChain} />
                </div>
                {/* Search */}
                <div className="mb-6">
                    <WalletSearchForm onSearch={setAddress} />
                </div>

                {/* Loading */}
                {isLoading && (
                    <div className="flex w-full justify-center"><Loader2Icon className="animate-spin" size={39}/></div>
                )}

                {/* Dashboard */}
                {data && (
                    <>
                        {/* Analytics */}
                        {analysis && (
                            <div className="mb-8">
                                <AnalyticsCards
                                    inflow={analysis.flow.inflow}
                                    outflow={analysis.flow.outflow}
                                    net={analysis.flow.net}
                                    gas={analysis.gas.total}
                                />
                            </div>
                        )}
                        {chartData.length > 0 && (
                            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                                <SectionCard title="Transaction Activity">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-sm text-zinc-400">
                                            Transactions over time
                                        </p>
                                        <TimeFilter value={range} onChange={setRange} />
                                    </div>

                                    <ActivityChart data={chartData} />
                                </SectionCard>

                                <SectionCard title="Inflow vs Outflow">
                                    <div className="flex justify-between items-center mb-4">
                                        <p className="text-sm text-zinc-400">
                                            Value movement over time
                                        </p>
                                        <TimeFilter value={range} onChange={setRange} />
                                    </div>

                                    <FlowChart data={chartData} />
                                </SectionCard>
                            </div>
                        )}
                        {/* Insights */}
                        {insights && (
                            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                                <div className="col-span-2">
                                    <SectionCard title="Largest Transactions">
                                        <LargestTransactions data={insights.largest} />
                                    </SectionCard>
                                </div>

                                <div className="space-y-6">
                                    <SectionCard title="Behavior">
                                        <BehaviorTags tags={insights.behavior} />
                                    </SectionCard>

                                    <SectionCard title="Top Counterparties">
                                        <TopCounterparties data={insights.counterparties} />
                                    </SectionCard>
                                </div>
                            </div>
                        )}

                        {/* Transactions */}
                        <SectionCard title="Transaction History">
                            <TransactionTable data={data.items} />
                        </SectionCard>
                    </>
                )}
            </div>
        </div>
    );
}