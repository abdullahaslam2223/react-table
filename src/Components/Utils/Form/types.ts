import { FieldErrors, FieldValues } from "react-hook-form";

export interface FieldError {
  required: string;
}

// export interface ChildField {
//   id: number;
//   label: string;
//   fieldId: string;
//   htmlField: string;
//   options: any | null;
//   rows: number | null;
//   type: string;
//   placeholder: string;
//   errors: FieldError;
//   width: string;
// }

export interface Option {
  text: string;
  value: string;
}

export interface Field<T> {
  id: number;
  multipleOnRow: boolean;
  childFields: Field<T>[] | null;
  label: string | null;
  fieldId: string;
  htmlField: string | null;
  options: Option[] | undefined;
  rows: number | null;
  type: string | null;
  placeholder: string | null;
  errors: FieldError | null;
  width: string | null;
}

export interface FormProps<T> {
  fields: Field<T>[] | [];
}

export interface FormFieldProps<T> {
  field: Field<T>;
  register: Function;
  errors: FieldErrors<FieldValues>;
  half: boolean;
}
