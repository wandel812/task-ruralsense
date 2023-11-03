import { Box } from "@mui/material";
import React from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    tabKindId: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, tabKindId, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== tabKindId}
            {...other}
        >
            {value === tabKindId && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel;