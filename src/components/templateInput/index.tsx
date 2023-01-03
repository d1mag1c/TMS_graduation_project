import React, {useState} from 'react';
import {ErrorMessage} from "./style";
import {Input, InputFormBlock} from "./style";

type InputFormProps = {
    type: string,
    name:string,
    placeholder: string,
    value: string,
    error?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const TemplateInput = (props: InputFormProps) => {

    const [error, setError] = useState(false)
    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.length < 6 ? setError(true) : setError(false)
    }

    return (
        <InputFormBlock>
            <Input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                onBlur={validateValue}
                error={error && props.error}>
            </Input>
            {error && <ErrorMessage>{`Некорректные данные`}</ErrorMessage>}
        </InputFormBlock>
    );
};

export default TemplateInput;