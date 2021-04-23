import {Column, useTable} from 'react-table';
import {format} from 'date-fns';
import styled from 'styled-components';
import { Event } from "../../entities/event";


const Columns: Column<Event>[] = [
    {
        Header: 'Data',
        accessor: 'timestamp',
        Cell: ({value}: { value: string }) => {
            return format(new Date(value), 'dd/MM/yyyy')
        }
    },
    {
        Header: 'care giver',
        accessor: 'caregiverId'
    },
    {
        Header: 'note',
        accessor: 'note'
    },
    {
        Header: 'event type',
        accessor: 'eventType',
        Cell: ({value}: {value: string}) => {
            if(!value) {
                return ''
            }
            return value.replaceAll('_', ' ')
        }
    },
    {
        Header: 'Reason',
        accessor: 'medicationFailureReason'
    },
];

const TableContainer = styled.div`
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td, table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even){background-color: #f2f2f2;}

  table tr:hover {background-color: #ddd;}

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #54C6C1;
    color: white;
  }
    
`;

interface EventTableProps {
    events: Event[]
}

const EventTable = ({events}: EventTableProps) => {

        const tableInstance = useTable({
            columns: Columns,
            data: events,
        });

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow
        } = tableInstance;

        return (
           <TableContainer>
               <table {...getTableProps()}>
                   <thead>
                   {
                       headerGroups.map((headerGroup) => (
                           <tr {...headerGroup.getHeaderGroupProps()}>
                               {
                                   headerGroup.headers.map((col) => (
                                       <th {...col.getHeaderProps()}>{col.render('Header')}</th>
                                   ))
                               }
                           </tr>
                       ))
                   }
                   </thead>
                   <tbody {...getTableBodyProps()}>
                   {
                       rows.map((row) => {
                           prepareRow(row);
                           return (
                               <tr {...row.getRowProps()} key={row.id}>
                                   {
                                       row.cells.map((cell, index) => {
                                           return (
                                               <td {...cell.getCellProps()} key={index}>
                                                   {cell.render('Cell')}
                                               </td>
                                           );
                                       })
                                   }
                               </tr>
                           );
                       })
                   }
                   </tbody>
               </table>
           </TableContainer>
        );
}

export default EventTable