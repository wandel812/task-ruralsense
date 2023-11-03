import React from "react";
import { User } from "../../../services/userDataService";
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
import { Order } from "./utils";

interface IHeadCell {
    disablePadding: boolean,
    id: keyof User | "Delete",
    label: string,
    numeric: boolean,
}

const headCells: readonly IHeadCell[] = [
    {
        id: "firstName",
        numeric: false,
        disablePadding: true,
        label: "First name"
    },
    {
        id: "lastName",
        numeric: false,
        disablePadding: true,
        label: "Last name",
    },
    {
        id: "isActivated",
        numeric: false,
        disablePadding: true,
        label: "Is activated",
    },
    {
        id: "Delete",
        numeric: false,
        disablePadding: true,
        label: "sss",
    }
];

interface IUserTableProps {
    order: Order;
    orderBy: string;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof User) => void;
}
const UserTableHead = (props: IUserTableProps) => {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler =
        (property: keyof User) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            hideSortIcon={headCell.id === "Delete"}
                            active={headCell.id === "Delete" ? false : orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={headCell.id === "Delete" ? undefined : createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default UserTableHead;