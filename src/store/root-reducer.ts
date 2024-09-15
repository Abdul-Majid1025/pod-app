import { type Action, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '../slice/auth-slice';

const appReducer = combineReducers({
    auth: authReducer,
});

const rootReducer = (
    state: any,
    action: Action,
): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;