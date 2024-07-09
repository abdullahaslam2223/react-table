export interface FieldError {
  required: string;
}

export interface ChildField {
  id: number;
  label: string;
  fieldId: string;
  htmlField: string;
  options: any | null;
  rows: number | null;
  type: string;
  placeholder: string;
  errors: FieldError;
  width: string;
}

export interface Field {
  id?: number;
  multipleOnRow: boolean;
  childFields: ChildField[] | null;
  label: string | null;
  fieldId: string | null;
  htmlField: string | null;
  options: any | null;
  rows: number | null;
  type: string | null;
  placeholder: string | null;
  errors: FieldError | null;
  width: string | null;
}

export interface FormProps {
  fields: Field[] | [];
}
