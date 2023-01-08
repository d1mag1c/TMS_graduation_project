import React, {useState} from 'react';
import {FormBlock, RegButton} from "../style";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import TemplateInput from '../../../components/templateInput';
import { signInRequest } from '../../../store/sagaRegUser/type';
import {validateEmail, validatePassword} from "../../../utils/validate";

type Values = {
    email : string,
    password : string,
}

const FormSignIn = () => {
    const [value, setValue] = useState<Values>({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }

    const  dispatch = useDispatch();
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const DataForm = () => {

        if(errorEmail === 'true' && errorPassword === 'true') {
            console.log(value)
            dispatch(signInRequest(value))
            navigate('/')
        }
    }

    return (
        <FormBlock>
            <TemplateInput
                type={'email'}
                name={'email'}
                placeholder={'Ваш e-mail'}
                value={value.email}
                error={errorEmail}
                errorChange={setErrorEmail}
                validate={validateEmail}
                onChange={handleChange}/>
            <TemplateInput
                type={'password'}
                name={'password'}
                placeholder={'Введите пароль'}
                value={value.password}
                error={errorPassword}
                errorChange={setErrorPassword}
                validate={validatePassword}
                onChange={handleChange}/>
            <RegButton onClick={DataForm}>Войти</RegButton>
            </FormBlock>
    );
};

export default FormSignIn;