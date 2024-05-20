export interface FormField {
  name: string;
  label: string;
  render: (props: any)=> JSX.Element
  defaultValue: string | number;
}

export interface DialogData {
  isOpen: boolean,
  title: string,
  submitBtnText: string,
  fields: Array<any>,
  schema: any,
  handleConfirm: (a: any) => void,
}

export interface TextDialogData {
  isOpen: boolean;
  title: string;
  text: string;
  submitBtnText: string;
  handleConfirm: () => void;
}