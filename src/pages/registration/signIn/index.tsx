import React, {useState} from 'react';
import {FormBlock, RegButton} from "../style";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import TemplateInput from '../../../components/templateInput';
import { signInRequest } from '../../../store/sagaRegUser/type';

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
    const DataForm = () => {
        console.log(value)
        const isValid = true;
        if(isValid) {
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
                onChange={handleChange}
                error
            />
            <TemplateInput
                type={'password'}
                name={'password'}
                placeholder={'Введите пароль'}
                value={value.password}
                onChange={handleChange}
                error
            />
            {/*<Link to={'/recover-password'}>Forgot password?</Link>*/}
            <RegButton onClick={DataForm}>Войти</RegButton>
            </FormBlock>
    );
};

export default FormSignIn;