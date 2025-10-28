import React from 'react';

export interface TableData {
  [key: string]: string | number | React.ReactNode;
}

export interface ResponsiveTableProps {
  data: TableData[];
  headers: { key: string; label: string; sortable?: boolean }[];
  caption?: string;
  responsive?: boolean;
  hover?: boolean;
  striped?: boolean;
  className?: string;
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  data,
  headers,
  caption,
  responsive = true,
  hover = false,
  striped = false,
  className = '',
}) => {
  const tableClasses = [
    'table',
    hover && 'table-hover',
    striped && 'table-striped',
    className,
  ].filter(Boolean).join(' ');

  const renderTable = () => (
    <table className={tableClasses} role="table" aria-label={caption || 'Data table'}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key} scope="col">
              {header.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header.key} data-label={header.label}>
                {row[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  // Using custom implementation with utility classes
  // Can be extended to optionally integrate with @digdir/designsystemet components
  return responsive ? (
    <div className="table-responsive">
      {renderTable()}
    </div>
  ) : (
    renderTable()
  );
};

export default ResponsiveTable;
