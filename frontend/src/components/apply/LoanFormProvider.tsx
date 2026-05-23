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

    mode: "onChange",

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