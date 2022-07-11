import { UserActionType, UsersAction, UsersState } from "../Types/users";

const initialState: UsersState = {
    users: []
}

export const usersReducer = (state: UsersState = initialState, action: UsersAction):UsersState => {
    switch (action.type) {
        case UserActionType.GET_USERS:
            return {users: action.payload}
        default:
            return state
    }
}