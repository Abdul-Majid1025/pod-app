import { Box, BoxProps, MenuItem, Select, SelectProps } from "@mui/material";
import { FormField } from "../types/form-dialog";
import { formFieldStyle } from "../util/util-styles";

export const useNotificationsForm = (): FormField[] => {

  const selectOptions = [
    'Select',
    'new Select'
  ]

  const fields: FormField[] = [
    {
      name: 'subject',
      label: 'Subject',
      render: (props: BoxProps) => <Box {...props} sx={{ ...formFieldStyle, width: '100%' }} component="input" placeholder="Enter subject" />,
      defaultValue: ''
    },
    {
      name: 'description',
      label: 'Description',
      render: (props: BoxProps) => <Box component="textarea" {...props} sx={{ ...formFieldStyle, fontFamily: 'Inter', fontSize: '14px', width: '100%', height: 'auto', resize: 'none' }} rows={16} placeholder="Enter description" />,
      defaultValue: ''
    },
    {
      name: 'select',
      label: 'Select',
      render: (props: SelectProps) => (
        <Select {...props} sx={{ ...formFieldStyle, width: '100%' }}>
          {selectOptions.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      ),
      defaultValue: selectOptions[0],
    },
  ];
  return fields;
}