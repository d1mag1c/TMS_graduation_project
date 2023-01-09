import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import TemplateInput from '../../../components/templateInput';
import {signUpRequest} from '../../../store/authReducer/action';
import {FormBlock, MassageError, RegButton} from '../style';
import {useNavigate} from "react-router-dom";
import {validateEmail, validatePassword, validateUserName} from "../../../utils/validate";
import {timeoutMassage} from "../../../utils/timeoutMassage";


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
    const navigate = useNavigate()

    const [errorEmail, setErrorEmail] = useState('')
    const [errorUserName, setErrorUserName] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('')

    const DataForm = () => {

        if (value.password === value.passwordConfirm
            && errorEmail === 'true'
            && errorUserName === 'true'
            && errorPassword === 'true'
            && errorPasswordConfirm === 'true') {
            dispatch(signUpRequest(value))
            navigate('/activation')
        }

    }
    const [compare, setCompare] = useState(false)

    const comparePassword = () => {
     if(value.password !== value.passwordConfirm) {
         setCompare(true)
         timeoutMassage(setCompare)
     }
    }

    return (
        <FormBlock>
            <TemplateInput
                type={'text'}
                name={'username'}
                placeholder={'Имя пользователя'}
                value={value.username}
                error={errorUserName}
                errorChange={setErrorUserName}
                validate={validateUserName}
                onChange={handleChange}
            />
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
            <TemplateInput
                type={'password'}
                name={'passwordConfirm'}
                placeholder={'Повторите пароль'}
                value={value.passwordConfirm}
                error={errorPasswordConfirm}
                errorChange={setErrorPasswordConfirm}
                validate={validatePassword}
                onChange={handleChange}/>
            {compare && <MassageError>Пароли не совпадают!</MassageError>}
            <RegButton onClick={() => {
                DataForm()
                comparePassword()
            }}>Зарегистрироваться</RegButton>
        </FormBlock>
    );
};

export default FormSignUp;