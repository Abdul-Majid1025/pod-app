import { Box, BoxProps } from "@mui/material";
import { FormField } from "../types/form-dialog";
import { formFieldStyle } from "../util/util-styles";

export const useIntegrationsForm = (): FormField[] => {

  const fields: FormField[] = [
    {
      name: 'name',
      label: 'Name*',
      render: (props: BoxProps) => <Box {...props} sx={{ ...formFieldStyle, width: '100%' }} component="input" placeholder="Enter name" />,
      defaultValue: ''
    },
    {
      name: 'key',
      label: 'API Key*',
      render: (props: BoxProps) => <Box {...props} sx={{ ...formFieldStyle, width: '100%' }} component="input" placeholder="Enter API key" />,
      defaultValue: ''
    },
  ];
  return fields;
}