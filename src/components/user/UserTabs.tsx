import React from "react";
import { User, UserRole } from "../../services/userDataService";
import { Box, Tab, Tabs } from "@mui/material";
import { TabKind, a11yProps, getTabId } from "./utils";
import TabPanel from "./TabPanel";
import UserTable from "./table/UserTable";

interface IUserTabs {
    users: User[]
}


const UserTabs = ({ users }: IUserTabs) => {
    const [currentUserList, setCurrentUserList] = React.useState(users);
    const [openedTabId, setOpenedTabId] = React.useState(getTabId(TabKind.ADMIN))
    return (
        <Box sx={{ width: "100%" }}>
            <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
            >
                <Tabs
                    value={openedTabId}
                    onChange={(e, value) => setOpenedTabId(value)}
                >
                    <Tab
                        label="Admins"
                        {...a11yProps(TabKind.ADMIN)}
                    />
                    <Tab
                        label="Managers"
                        {...a11yProps(TabKind.MANAGER)}
                    />
                </Tabs>
            </Box>
            <TabPanel tabKindId={TabKind.ADMIN} value={openedTabId}>
                <UserTable
                    onDelete={(user) => setCurrentUserList(prevUsers => prevUsers.filter(prevUser => prevUser.id !== user.id))}
                    users={currentUserList.filter(user => user.role === UserRole.ADMIN)}
                />
            </TabPanel>
            <TabPanel tabKindId={TabKind.MANAGER} value={openedTabId}>
                <UserTable
                    onDelete={(user) => setCurrentUserList(prevUsers => prevUsers.filter(prevUser => prevUser.id !== user.id))}
                    users={currentUserList.filter(user => user.role === UserRole.MANAGER)}
                />
            </TabPanel>
        </Box>
    );
}

export default UserTabs;