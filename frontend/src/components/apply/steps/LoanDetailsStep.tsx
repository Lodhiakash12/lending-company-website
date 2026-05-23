"use client";

import { useFormContext } from "react-hook-form";

import { LoanFormData } from "@/lib/loanFormSchema";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
}

export default function LoanDetailsStep({
  nextStep,
  prevStep,
}: Props) {

  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<LoanFormData>();

  const handleNext = async () => {

    const valid = await trigger([
      "loanType",
      "loanAmount",
      "repaymentDuration",
      "purpose",
    ]);

    if (valid) {
      nextStep();
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* LOAN TYPE */}
      <div>
        <label className="text-sm font-medium">
          Loan Type
        </label>

        <Select
          onValueChange={(value) =>
            setValue(
              "loanType",
              value,
              {
                shouldValidate: true,
              }
            )
          }
        >
          <SelectTrigger
            className={`mt-2 h-14 rounded-2xl ${
              errors.loanType
                ? "border-red-500"
                : ""
            }`}
          >
            <SelectValue placeholder="Select loan type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="personal">
              Personal Loan
            </SelectItem>

            <SelectItem value="business">
              Business Loan
            </SelectItem>

            <SelectItem value="home">
              Home Loan
            </SelectItem>

            <SelectItem value="auto">
              Auto Loan
            </SelectItem>
          </SelectContent>
        </Select>

        {errors.loanType && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.loanType.message)}
          </p>
        )}
      </div>

      {/* LOAN AMOUNT */}
      <div>
        <label className="text-sm font-medium">
          Loan Amount
        </label>

        <Input
          {...register("loanAmount")}
          placeholder="$25,000"
          className={`mt-2 h-14 rounded-2xl ${
            errors.loanAmount
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.loanAmount && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.loanAmount.message)}
          </p>
        )}
      </div>

      {/* REPAYMENT */}
      <div>
        <label className="text-sm font-medium">
          Repayment Duration
        </label>

        <Select
          onValueChange={(value) =>
            setValue(
              "repaymentDuration",
              value,
              {
                shouldValidate: true,
              }
            )
          }
        >
          <SelectTrigger
            className={`mt-2 h-14 rounded-2xl ${
              errors.repaymentDuration
                ? "border-red-500"
                : ""
            }`}
          >
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="12">
              12 Months
            </SelectItem>

            <SelectItem value="24">
              24 Months
            </SelectItem>

            <SelectItem value="36">
              36 Months
            </SelectItem>

            <SelectItem value="60">
              60 Months
            </SelectItem>
          </SelectContent>
        </Select>

        {errors.repaymentDuration && (
          <p className="text-red-500 text-sm mt-2">
            {String(
              errors.repaymentDuration.message
            )}
          </p>
        )}
      </div>

      {/* PURPOSE */}
      <div>
        <label className="text-sm font-medium">
          Loan Purpose
        </label>

        <Input
          {...register("purpose")}
          placeholder="Business expansion"
          className={`mt-2 h-14 rounded-2xl ${
            errors.purpose
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.purpose && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.purpose.message)}
          </p>
        )}
      </div>

      {/* NOTES */}
      <div className="md:col-span-2">
        <label className="text-sm font-medium">
          Additional Notes
        </label>

        <Textarea
          {...register("notes")}
          placeholder="Tell us more about your loan requirements..."
          className="mt-2 rounded-2xl min-h-[140px]"
        />
      </div>

      {/* BUTTONS */}
      <div className="md:col-span-2 flex items-center justify-between mt-6">

        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="h-14 px-10 rounded-full"
        >
          Back
        </Button>

        <Button
          type="button"
          onClick={handleNext}
          className="h-14 px-10 rounded-full"
        >
          Continue
        </Button>

      </div>

    </div>
  );
}