import { Dispatch, SetStateAction } from "react";

export interface IAuth {
    isAuth: boolean;
    setAuth: Dispatch<SetStateAction<boolean>>
}