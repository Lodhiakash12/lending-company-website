"use client";
import Link from "next/link";

import { useState } from "react";

import { useFormContext } from "react-hook-form";

import { LoanFormData } from "@/lib/loanFormSchema";

import { Button } from "@/components/ui/button";

interface Props {
  prevStep: () => void;
}

export default function ReviewStep({
  prevStep,
}: Props) {

  const { getValues, reset } =
    useFormContext<LoanFormData>();

  const values = getValues();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = async () => {

    try {

      setLoading(true);

      const response = await fetch(
        "/api/submit-loan",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(values),
        }
      );

      const data =
        await response.json();

      if (data.success) {

        setSuccess(true);

        reset();

      } else {

        alert(
          "Something went wrong."
        );
      }

    } catch (error) {

      console.error(error);

      alert("Submission failed.");

    } finally {

      setLoading(false);
    }
  };

  /* SUCCESS SCREEN */
  if (success) {
    return (
      <div className="text-center py-20">

        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-4xl">
          ✅
        </div>

        <h2 className="mt-8 text-4xl font-bold">
          Application Submitted
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Thank you for your application.
          Our team will review your request
          and contact you shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          {/* HOME BUTTON */}
          <Link
            href="/"
            className="h-14 px-8 rounded-full bg-black text-white flex items-center justify-center font-medium hover:scale-105 transition-all"
          >
            Back To Home
          </Link>

          {/* APPLY AGAIN */}
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="h-14 px-8 rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
          >
            Submit Another Application
          </button>

        </div>

      </div>
    );
  }

  return (
    <div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* PERSONAL */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold text-lg">
            Personal Information
          </h3>

          <div className="mt-4 space-y-3 text-gray-600">
            <p>{values.fullName}</p>
            <p>{values.email}</p>
            <p>{values.phone}</p>
            <p>{values.dob}</p>
          </div>
        </div>

        {/* FINANCIAL */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold text-lg">
            Financial Information
          </h3>

          <div className="mt-4 space-y-3 text-gray-600">
            <p>{values.employmentType}</p>
            <p>{values.income}</p>
            <p>{values.creditScore}</p>
            <p>{values.existingLoans}</p>
          </div>
        </div>

        {/* LOAN */}
        <div className="md:col-span-2 border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold text-lg">
            Loan Details
          </h3>

          <div className="mt-4 space-y-3 text-gray-600">
            <p>{values.loanType}</p>
            <p>{values.loanAmount}</p>
            <p>{values.repaymentDuration}</p>
            <p>{values.purpose}</p>
            <p>{values.notes}</p>
          </div>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex items-center justify-between mt-10">

        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          className="h-14 px-10 rounded-full"
        >
          Back
        </Button>

        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="h-14 px-10 rounded-full"
        >
          {loading
            ? "Submitting..."
            : "Submit Application"}
        </Button>

      </div>

    </div>
  );
}