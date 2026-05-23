import ApplyForm from "@/components/apply/ApplyForm";
import { LoanFormProvider } from "@/components/apply/LoanFormProvider";

export default function ApplyPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc] py-20 px-6 relative overflow-hidden">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-20" />

            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium shadow-sm">
                        Secure Loan Application
                    </span>

                    <h1 className="mt-8 text-5xl lg:text-6xl font-bold tracking-tight text-black">
                        Apply For Your Loan In Minutes
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Complete the secure application process to receive personalized loan offers with fast approval.
                    </p>
                </div>

                {/* FORM */}
                <div className="mt-16">
                    <LoanFormProvider>
                        <ApplyForm />
                    </LoanFormProvider>
                </div>

            </div>
        </main>
    );
}