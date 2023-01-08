import React, { Dispatch, SetStateAction } from "react";

export type InputFormProps = {
    type: string,
    name:string,
    placeholder: string,
    value: string,
    error: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    errorChange: Dispatch<SetStateAction<string>>,
    validate: (email: string) => string
}

