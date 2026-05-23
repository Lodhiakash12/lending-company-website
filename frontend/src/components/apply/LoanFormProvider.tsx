"use client";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  loanFormSchema,
  LoanFormData,
} from "@/lib/loanFormSchema";

export function LoanFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const methods = useForm<LoanFormData>({
    resolver: zodResolver(loanFormSchema),

    // FIX 1: Changed from "onChange" to "all" so that after trigger()
    // is called on Continue, errors show immediately even on untouched
    // fields. "onChange" only shows errors on fields the user has
    // already interacted with.
    mode: "all",

    // FIX 2: Prevent AnimatePresence from unregistering fields (and
    // wiping their errors) when a step unmounts during navigation.
    shouldUnregister: false,

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",

      employmentType: "",
      income: "",
      creditScore: "",
      existingLoans: "",

      loanType: "",
      loanAmount: "",
      repaymentDuration: "",
      purpose: "",
      notes: "",
    },
  });

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
}
