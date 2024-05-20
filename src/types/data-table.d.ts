export interface ColumnConfig<T> {
  label: string;
  render: (row: T) => React.ReactNode;
  width?: string;
}