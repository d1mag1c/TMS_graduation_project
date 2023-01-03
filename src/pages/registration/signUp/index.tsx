import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import TemplateInput from '../../../components/templateInput';
import {signUpRequest} from '../../../store/authReducer/action';
import {FormBlock, RegButton} from '../style';


type Values = {
    username: string,
    email: string,
    password: string,
    passwordConfirm: string,
}

const FormSignUp = () => {
    const [value, setValue] = useState<Values>({
        username: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }

    const dispatch = useDispatch();
    const DataForm = () => {

        if (value.password === value.passwordConfirm && value.password) {
            dispatch(signUpRequest(value))
        }

    }
    return (
        <FormBlock>
            <TemplateInput
                type={'text'}
                name={'username'}
                placeholder={'Имя пользователя'}
                value={value.username}
                error
                onChange={handleChange}/>
            <TemplateInput
                type={'email'}
                name={'email'}
                placeholder={'Ваш e-mail'}
                value={value.email}
                error
                onChange={handleChange}/>
            <TemplateInput
                type={'password'}
                name={'password'}
                placeholder={'Введите пароль'}
                value={value.password}
                error
                onChange={handleChange}/>
            <TemplateInput
                type={'password'}
                name={'passwordConfirm'}
                placeholder={'Повторите пароль'}
                value={value.passwordConfirm}
                error
                onChange={handleChange}/>
            <RegButton onClick={DataForm}>Зарегистрироваться</RegButton>
        </FormBlock>
    );
};

export default FormSignUp;