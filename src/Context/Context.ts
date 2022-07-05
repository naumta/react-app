import { createContext, Dispatch, SetStateAction } from "react";
import { ImportDeclaration } from "typescript";
import { IAuth } from "./IAuth";

type Registration = IAuth & IModal;

interface IModal {
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext({} as Registration);