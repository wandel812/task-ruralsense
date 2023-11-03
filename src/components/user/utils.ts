enum TabKind {
    ADMIN = 0,
    MANAGER = 1,
}

function a11yProps(tabKind: TabKind) {
    return {
        id: `user-tab-${tabKind}`,
        'aria-controls': `user-tabpanel-${tabKind}`,
    };
}

function getTabId(tabKind: TabKind): number {
    return tabKind;
}

export {TabKind, a11yProps, getTabId}
