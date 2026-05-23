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

  // FIX 1: Use watch() instead of getValues() at render time so the
  // review screen always reflects the latest field values, even if the
  // user navigated back and edited something.
  const { watch, trigger, reset } =
    useFormContext<LoanFormData>();

  const values = watch();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = async () => {

    // FIX 2: Run full validation before submitting so no incomplete
    // data can be sent even if the user somehow reaches this step early.
    const valid = await trigger();
    if (!valid) {
      alert("Please go back and fill in all required fields.");
      return;
    }

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

          // FIX 3: Use the live watched values (already captured above),
          // not a stale snapshot from render time.
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
          "Something went wrong. Please try again."
        );
      }

    } catch (error) {

      console.error(error);

      alert("Submission failed. Please check your connection and try again.");

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
            type="button"
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
            <p><span className="text-gray-400 text-sm">Name:</span> {values.fullName}</p>
            <p><span className="text-gray-400 text-sm">Email:</span> {values.email}</p>
            <p><span className="text-gray-400 text-sm">Phone:</span> {values.phone}</p>
            <p><span className="text-gray-400 text-sm">Date of Birth:</span> {values.dob}</p>
          </div>
        </div>

        {/* FINANCIAL */}
        <div className="border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold text-lg">
            Financial Information
          </h3>

          <div className="mt-4 space-y-3 text-gray-600">
            <p><span className="text-gray-400 text-sm">Employment:</span> {values.employmentType}</p>
            <p><span className="text-gray-400 text-sm">Income:</span> {values.income}</p>
            <p><span className="text-gray-400 text-sm">Credit Score:</span> {values.creditScore}</p>
            {values.existingLoans && (
              <p><span className="text-gray-400 text-sm">Existing Loans:</span> {values.existingLoans}</p>
            )}
          </div>
        </div>

        {/* LOAN */}
        <div className="md:col-span-2 border border-gray-200 rounded-2xl p-6">
          <h3 className="font-semibold text-lg">
            Loan Details
          </h3>

          <div className="mt-4 space-y-3 text-gray-600">
            <p><span className="text-gray-400 text-sm">Type:</span> {values.loanType}</p>
            <p><span className="text-gray-400 text-sm">Amount:</span> {values.loanAmount}</p>
            <p><span className="text-gray-400 text-sm">Duration:</span> {values.repaymentDuration} months</p>
            <p><span className="text-gray-400 text-sm">Purpose:</span> {values.purpose}</p>
            {values.notes && (
              <p><span className="text-gray-400 text-sm">Notes:</span> {values.notes}</p>
            )}
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
          type="button"
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
