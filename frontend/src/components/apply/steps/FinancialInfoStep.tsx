"use client";

import { useFormContext } from "react-hook-form";

import { LoanFormData } from "@/lib/loanFormSchema";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

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

export default function FinancialInfoStep({
  nextStep,
  prevStep,
}: Props) {

  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext<LoanFormData>();

  // FIX: Watch current values so Select shows correct value when
  // the user navigates back to this step.
  const employmentType = watch("employmentType");
  const creditScore = watch("creditScore");

  const handleNext = async () => {

    const valid = await trigger([
      "employmentType",
      "income",
      "creditScore",
    ]);

    if (valid) {
      nextStep();
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* EMPLOYMENT TYPE */}
      <div>
        <label className="text-sm font-medium">
          Employment Type
        </label>

        <Select
          value={employmentType}
          onValueChange={(value) =>
            setValue(
              "employmentType",
              value,
              {
                shouldValidate: true,
              }
            )
          }
        >
          <SelectTrigger
            className={`mt-2 h-14 rounded-2xl ${
              errors.employmentType
                ? "border-red-500"
                : ""
            }`}
          >
            <SelectValue placeholder="Select employment type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="fulltime">
              Full Time
            </SelectItem>

            <SelectItem value="parttime">
              Part Time
            </SelectItem>

            <SelectItem value="selfemployed">
              Self Employed
            </SelectItem>

            <SelectItem value="business">
              Business Owner
            </SelectItem>
          </SelectContent>
        </Select>

        {errors.employmentType && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.employmentType.message)}
          </p>
        )}
      </div>

      {/* INCOME */}
      <div>
        <label className="text-sm font-medium">
          Monthly Income
        </label>

        <Input
          {...register("income")}
          placeholder="$5,000"
          className={`mt-2 h-14 rounded-2xl ${
            errors.income
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.income && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.income.message)}
          </p>
        )}
      </div>

      {/* CREDIT SCORE */}
      <div>
        <label className="text-sm font-medium">
          Credit Score
        </label>

        <Select
          value={creditScore}
          onValueChange={(value) =>
            setValue(
              "creditScore",
              value,
              {
                shouldValidate: true,
              }
            )
          }
        >
          <SelectTrigger
            className={`mt-2 h-14 rounded-2xl ${
              errors.creditScore
                ? "border-red-500"
                : ""
            }`}
          >
            <SelectValue placeholder="Select credit score" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="excellent">
              Excellent (750+)
            </SelectItem>

            <SelectItem value="good">
              Good (700-749)
            </SelectItem>

            <SelectItem value="fair">
              Fair (650-699)
            </SelectItem>

            <SelectItem value="poor">
              Below 650
            </SelectItem>
          </SelectContent>
        </Select>

        {errors.creditScore && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.creditScore.message)}
          </p>
        )}
      </div>

      {/* EXISTING LOANS */}
      <div>
        <label className="text-sm font-medium">
          Existing Loans
        </label>

        <Input
          {...register("existingLoans")}
          placeholder="2"
          className="mt-2 h-14 rounded-2xl"
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
