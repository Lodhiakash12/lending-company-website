"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    BadgeCheck,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";

import { Slider } from "@/components/ui/slider";

import { useState, useMemo } from "react";

export default function Hero() {
    const [loanAmount, setLoanAmount] = useState(25000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [loanTerm, setLoanTerm] = useState(60);

    const monthlyPayment = useMemo(() => {
        const monthlyRate = interestRate / 100 / 12;

        const payment =
            (loanAmount *
                monthlyRate *
                Math.pow(1 + monthlyRate, loanTerm)) /
            (Math.pow(1 + monthlyRate, loanTerm) - 1);

        return payment.toFixed(0);
    }, [loanAmount, interestRate, loanTerm]);

    return (
        <section className="relative overflow-hidden bg-white">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-blue-100 opacity-70" />

            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium">
                        <BadgeCheck size={16} className="text-green-500" />
                        Trusted by 50,000+ customers
                    </span>

                    <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-black">
                        Fast & Secure Loans For Modern Borrowers
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                        Access flexible financing solutions with quick approvals,
                        transparent rates, and a seamless digital experience.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/apply"
                            className="bg-black text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition shadow-lg"
                        >
                            Apply Now
                        </Link>

                        <button className="border border-gray-300 bg-white px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>

                    {/* STATS */}
                    <div className="mt-14 flex flex-wrap gap-10">
                        <div>
                            <h3 className="text-3xl font-bold">
                                $<CountUp end={2} duration={3} />B+
                            </h3>
                            <p className="text-gray-500 mt-1">Loans Funded</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">
                                <CountUp end={98} duration={3} />%
                            </h3>
                            <p className="text-gray-500 mt-1">Approval Satisfaction</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold">
                                <CountUp end={24} duration={3} />
                                hrs
                            </h3>
                            <p className="text-gray-500 mt-1">Average Approval</p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >

                    {/* MAIN CARD */}
                    <div className="rounded-[32px] bg-gradient-to-br from-black to-slate-800 p-10 text-white shadow-2xl relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

                        <div className="relative z-10">

                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm opacity-70">
                                        Loan Amount
                                    </p>

                                    <h2 className="text-5xl font-bold mt-3">
                                        ${loanAmount.toLocaleString()}
                                    </h2>
                                </div>

                                <div className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                                    {interestRate}% APR
                                </div>
                            </div>

                            {/* SLIDER */}
                            <div className="mt-10">
                                <Slider
                                    defaultValue={[25000]}
                                    min={5000}
                                    max={100000}
                                    step={1000}
                                    onValueChange={(value) =>
                                        setLoanAmount(value[0])
                                    }
                                />
                            </div>

                            {/* OPTIONS */}
                            <div className="mt-10 grid grid-cols-2 gap-5">

                                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/10">
                                    <p className="text-sm opacity-70">
                                        Interest Rate
                                    </p>

                                    <select
                                        value={interestRate}
                                        onChange={(e) =>
                                            setInterestRate(Number(e.target.value))
                                        }
                                        className="mt-3 w-full bg-transparent text-2xl font-semibold outline-none text-white appearance-none"
                                    >
                                        <option className="text-black" value={6.5}>
                                            6.5%
                                        </option>

                                        <option className="text-black" value={8.5}>
                                            8.5%
                                        </option>

                                        <option className="text-black" value={10.5}>
                                            10.5%
                                        </option>

                                        <option className="text-black" value={12.5}>
                                            12.5%
                                        </option>
                                    </select>
                                </div>

                                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md border border-white/10">
                                    <p className="text-sm opacity-70">
                                        Loan Term
                                    </p>

                                    <select
                                        value={loanTerm}
                                        onChange={(e) =>
                                            setLoanTerm(Number(e.target.value))
                                        }
                                        className="mt-3 w-full bg-transparent text-2xl font-semibold outline-none text-white appearance-none"
                                    >
                                        <option className="text-black" value={24}>
                                            24 months
                                        </option>

                                        <option className="text-black" value={36}>
                                            36 months
                                        </option>

                                        <option className="text-black" value={48}>
                                            48 months
                                        </option>

                                        <option className="text-black" value={60}>
                                            60 months
                                        </option>
                                    </select>
                                </div>

                            </div>

                            {/* MONTHLY PAYMENT */}
                            <div className="mt-8 bg-white text-black rounded-2xl p-6">
                                <p className="text-sm text-gray-500">
                                    Estimated Monthly Payment
                                </p>

                                <h3 className="text-5xl font-bold mt-3">
                                    ${monthlyPayment}/mo
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* FLOATING CARD */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                        className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-56"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                <ShieldCheck className="text-green-600" />
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Secure Approval
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Verified & encrypted
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* FLOATING CARD */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="absolute -bottom-10 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-60"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                <TrendingUp className="text-blue-600" />
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    Fast Processing
                                </h4>

                                <p className="text-sm text-gray-500">
                                    Funds within 24 hours
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}