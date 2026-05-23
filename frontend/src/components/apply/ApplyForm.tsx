"use client";

import { useState } from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import PersonalInfoStep from "./steps/PersonalInfoStep";
import FinancialInfoStep from "./steps/FinancialInfoStep";
import LoanDetailsStep from "./steps/LoanDetailsStep";
import ReviewStep from "./steps/ReviewStep";

const steps = [
  "Personal Info",
  "Financial Info",
  "Loan Details",
  "Review",
];

export default function ApplyForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const progress =
    ((currentStep + 1) / steps.length) * 100;

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <Card className="border-0 shadow-2xl rounded-[32px] overflow-hidden bg-white/80 backdrop-blur-xl">

      <CardContent className="p-8 lg:p-12">

        {/* HEADER */}
        <div className="flex flex-col gap-8">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div>
              <h2 className="text-3xl font-bold">
                {steps[currentStep]}
              </h2>

              <p className="text-gray-500 mt-2">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>

            <div className="w-full lg:w-72">
              <Progress
                value={progress}
                className="h-3 rounded-full"
              />
            </div>
          </div>

          {/* STEP PILLS */}
          <div className="flex flex-wrap gap-3">

            {steps.map((step, index) => (
              <div
                key={step}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index <= currentStep
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {step}
              </div>
            ))}

          </div>
        </div>

        {/* FORM CONTENT */}
        <div className="mt-14">

          <AnimatePresence mode="wait">

            <motion.div
              key={currentStep}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              {/* STEP 1 */}
              {currentStep === 0 && (
                <PersonalInfoStep
                  nextStep={nextStep}
                />
              )}

              {/* STEP 2 */}
              {currentStep === 1 && (
                <FinancialInfoStep
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {/* STEP 3 */}
              {currentStep === 2 && (
                <LoanDetailsStep
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}

              {/* STEP 4 */}
              {currentStep === 3 && (
                <ReviewStep
                  prevStep={prevStep}
                />
              )}

            </motion.div>

          </AnimatePresence>

        </div>

      </CardContent>
    </Card>
  );
}