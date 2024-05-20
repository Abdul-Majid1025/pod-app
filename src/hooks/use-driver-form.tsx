import { Box, BoxProps, MenuItem, Select, SelectProps } from "@mui/material";
import { FormField } from "../types/form-dialog";
import { formFieldStyle } from "../util/util-styles";

export const useDriverForm = (): FormField[] => {

  const vehicles = [
    {
      id: '1234',
      name: 'Toyota'
    },
    {
      id: '124',
      name: 'Honda'
    }]

  const fields: FormField[] = [
    {
      name: 'firstName',
      label: 'First Name*',
      render: (props: BoxProps) => <Box {...props} sx={formFieldStyle} component="input" placeholder="Enter First Name" />,
      defaultValue: ''
    },
    {
      name: 'lastName',
      label: 'Last Name*',
      render: (props: BoxProps) => <Box {...props} sx={formFieldStyle} component="input" placeholder="Enter Last Name" />,
      defaultValue: ''
    },
    {
      name: 'email',
      label: 'Email*',
      render: (props: BoxProps) => <Box {...props} sx={formFieldStyle} component="input" placeholder="Enter your email" />,
      defaultValue: ''
    },
    {
      name: 'vehicle',
      label: "Vehicle",
      render: (props: SelectProps) => (
        <Select {...props} sx={formFieldStyle}>
          {vehicles.map(vehicle => (
            <MenuItem key={vehicle.id} value={vehicle.id}>{vehicle.name}</MenuItem>
          ))}
        </Select>
      ),
      defaultValue: vehicles[0]?.id,
    },
  ];
  return fields;
}