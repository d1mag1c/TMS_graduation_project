import React, {useState} from 'react';
import FormSignUp from './signUp';
import {ButtonsChangeFormBlock, ButtonSignIn, ButtonSignUp, FormTitle, RegistrationBlock, WrapperForm} from "./style";
import FormSignIn from "./signIn";
import {useThemeSelector} from "../../store";

const Registration = () => {

    const [formState, setFormState] = useState(false)
    const theme = useThemeSelector(state => state.themeReducer)
    return (
        <RegistrationBlock>
            <WrapperForm>
                <FormTitle>{formState ? 'Вход' : 'Регистрация'}</FormTitle>
                {formState ? <FormSignIn/> : <FormSignUp/>}
                <ButtonsChangeFormBlock>
                    <ButtonSignUp onClick={() => setFormState(false)} theme={theme} formState={formState}>Регистрация</ButtonSignUp>
                    <ButtonSignIn onClick={() => setFormState(true)} theme={theme} formState={formState}>Войти</ButtonSignIn>
                </ButtonsChangeFormBlock>
            </WrapperForm>
        </RegistrationBlock>
    );
};

export default Registration;