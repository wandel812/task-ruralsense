import React from "react"
import { User, fetchUserData } from "../../services/userDataService";
import { Box, CircularProgress } from "@mui/material";
import UserTabs from "./UserTabs";

enum UserFetchDataActionKind {
    REQUEST_RESOLVED = "REQUEST_RESOLVED",
    REQUEST_ERROR = "REQUEST_ERROR",
};

interface UserFetchDataAction {
    type: UserFetchDataActionKind,
    payload: any,
};

interface UserFetchDataState {
    isLoading: boolean;
    isError: boolean;
    data: User[] | null;
};

function userFetchDataReducer(state: UserFetchDataState, action: UserFetchDataAction) {
    const { type, payload } = action;
    switch (type) {
        case UserFetchDataActionKind.REQUEST_RESOLVED:
            return {
                isLoading: false,
                isError: false,
                data: payload.data
            };
        case UserFetchDataActionKind.REQUEST_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state;
    }
}

const userFetchDataDefaultState: UserFetchDataState = {
    isLoading: true,
    isError: false,
    data: null,
}

const UserPanel = () => {

    const [state, dispatch] = React.useReducer(userFetchDataReducer, userFetchDataDefaultState);
    React.useEffect(() => {
        fetchUserData()
            .then((value) => {
                dispatch({
                    type: UserFetchDataActionKind.REQUEST_RESOLVED,
                    payload: { data: value as User[], }
                });
            })
            .catch(() => dispatch({
                type: UserFetchDataActionKind.REQUEST_ERROR,
                payload: {}
            }));
    }, []);

    if (state.isLoading) {
        return <CircularProgress />
    }
    if (state.data !== null) {
        return (
            <UserTabs
                users={state.data}
            />
        );
    }
    return (
        <Box>
            Error
        </Box>
    );

}

export default UserPanel;