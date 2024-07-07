import { ReactNode } from "react";

export interface ContactDetailsFormType {
  phone1: string;
  phone2: string;
  email: string;
  state: string;
  city: string;
  address: string;
}

export interface EmployeeType {
  id: number | undefined;
  name: string | undefined;
  department: string | undefined;
  jobTitle: string | undefined;
  jobCategory: string | undefined;
}

export interface EmployeeProps {
  employee: EmployeeType;
}

export interface LayoutProps {
  children: ReactNode;
}
