"use client";

import { useFormContext } from "react-hook-form";

import { LoanFormData } from "@/lib/loanFormSchema";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

interface Props {
  nextStep: () => void;
}

export default function PersonalInfoStep({
  nextStep,
}: Props) {

  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<LoanFormData>();

  const handleNext = async () => {

    const valid = await trigger([
      "fullName",
      "email",
      "phone",
      "dob",
    ]);

    if (valid) {
      nextStep();
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">

      {/* FULL NAME */}
      <div>
        <label className="text-sm font-medium">
          Full Name
        </label>

        <Input
          {...register("fullName")}
          placeholder="John Doe"
          className={`mt-2 h-14 rounded-2xl ${
            errors.fullName
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.fullName && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.fullName.message)}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm font-medium">
          Email Address
        </label>

        <Input
          {...register("email")}
          placeholder="john@example.com"
          className={`mt-2 h-14 rounded-2xl ${
            errors.email
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.email.message)}
          </p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="text-sm font-medium">
          Phone Number
        </label>

        <Input
          {...register("phone")}
          placeholder="+1 234 567 890"
          className={`mt-2 h-14 rounded-2xl ${
            errors.phone
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.phone && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.phone.message)}
          </p>
        )}
      </div>

      {/* DOB */}
      <div>
        <label className="text-sm font-medium">
          Date of Birth
        </label>

        <Input
          type="date"
          {...register("dob")}
          className={`mt-2 h-14 rounded-2xl ${
            errors.dob
              ? "border-red-500"
              : ""
          }`}
        />

        {errors.dob && (
          <p className="text-red-500 text-sm mt-2">
            {String(errors.dob.message)}
          </p>
        )}
      </div>

      {/* BUTTON */}
      <div className="md:col-span-2 flex justify-end mt-6">

        <Button
          type="button"
          onClick={handleNext}
          className="h-14 px-10 rounded-full text-base"
        >
          Continue
        </Button>

      </div>

    </div>
  );
}