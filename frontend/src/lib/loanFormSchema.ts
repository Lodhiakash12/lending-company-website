import { z } from "zod";

export const loanFormSchema = z.object({
  // PERSONAL
  fullName: z
    .string()
    .min(2, "Full name is required"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  dob: z
    .string()
    .min(1, "Date of birth is required"),

  // FINANCIAL
  employmentType: z
    .string()
    .min(1, "Employment type is required"),

  income: z
    .string()
    .min(1, "Monthly income is required"),

  creditScore: z
    .string()
    .min(1, "Credit score is required"),

  existingLoans: z
    .string(),

  // LOAN
  loanType: z
    .string()
    .min(1, "Loan type is required"),

  loanAmount: z
    .string()
    .min(1, "Loan amount is required"),

  repaymentDuration: z
    .string()
    .min(1, "Repayment duration is required"),

  purpose: z
    .string()
    .min(1, "Loan purpose is required"),

  notes: z.string().optional(),
});

export type LoanFormData = z.infer<
  typeof loanFormSchema
>;