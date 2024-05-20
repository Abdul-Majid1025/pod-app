import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Checkbox, TablePagination } from '@mui/material';
import { ColumnConfig } from '../../types/data-table';

interface DataTableProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  sx?: SxProps;
  selection?: boolean;
  pagination?: boolean;
}

export function DataTable<T>({ data, columns, sx, selection, pagination }: DataTableProps<T>): React.JSX.Element {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
  };

  return (
    <Card sx={sx}>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              {selection ? <TableCell>
                <Checkbox
                  checked={false}
                />
              </TableCell> : null}
              {columns?.map((column, index) => (
                <TableCell key={index} width={column?.width}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, rowIndex) => (
              <TableRow hover key={rowIndex}>
                {selection ? <TableCell>
                  <Checkbox
                    checked={false}
                  />
                </TableCell> : null}
                {columns?.map((column, colIndex) => (
                  <TableCell key={colIndex}>{column.render(row)}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      {pagination ? <>
        <Divider />
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.length}
          rowsPerPage={10}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /></> : null}
    </Card>
  );
}
