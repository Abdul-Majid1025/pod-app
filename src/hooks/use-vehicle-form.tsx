import { Box, BoxProps } from "@mui/material";
import { FormField } from "../types/form-dialog";
import { formFieldStyle } from "../util/util-styles";

export const useVehicleForm = (): FormField[] => {

  const fields: FormField[] = [
    {
      name: 'registration',
      label: 'Registration*',
      render: (props: BoxProps) => <Box {...props} sx={formFieldStyle} component="input" placeholder="Enter registration" />,
      defaultValue: ''
    },
    {
      name: 'make',
      label: 'Make*',
      render: (props: BoxProps) => <Box {...props} sx={formFieldStyle} component="input" placeholder="Enter make" />,
      defaultValue: ''
    },
    {
      name: 'model',
      label: 'Model*',
      render: (props: BoxProps) => <Box {...props} sx={formFieldStyle} component="input" placeholder="Enter model" />,
      defaultValue: ''
    }
  ];
  return fields;
}