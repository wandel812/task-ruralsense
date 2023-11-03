import React from "react";
import { User } from "../../../services/userDataService";
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import UserTableHead from "./UserTableHead";
import { Order, getComparator, stableSort } from "./utils";


interface IUserTableProps {
    users: User[];
    onDelete: (user: User) => void;
}

const UserTable = (props: IUserTableProps) => {
    const {users, onDelete} = props;

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof User>('firstName');

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof User,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const visibleRows = React.useMemo(
        () =>
            stableSort<User>(users, getComparator(order, orderBy)),
        [users, order, orderBy],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <UserTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const labelId = `table-item-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.firstName}
                                        </TableCell>
                                        <TableCell align="left">{row.lastName}</TableCell>
                                        <TableCell align="left">{row.isActivated ? "TRUE" : "FALSE"}</TableCell>
                                        <TableCell align="left"> <Button onClick={() => onDelete(row)}>Delete</Button></TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default UserTable;

