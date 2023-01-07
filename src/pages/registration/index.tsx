import React, {useState} from 'react';
import FormSignUp from './signUp';
import {
    ButtonsChangeFormBlock,
    ButtonSignIn,
    ButtonSignUp,
    FormTitle,
    LinkBlock,
    RegistrationBlock,
    WrapperForm
} from "./style";
import FormSignIn from "./signIn";
import {useThemeSelector} from "../../store";
import {Link} from "react-router-dom";

const Registration = () => {

    const [formState, setFormState] = useState(false)
    const theme = useThemeSelector(state => state.themeReducer)
    return (
        <RegistrationBlock>
            <LinkBlock>
                <Link to='/'>На главную!</Link>|<Link to='/activation'>Подтвердить почту!</Link>
            </LinkBlock>

            <WrapperForm>
                <FormTitle>{formState ? 'Вход' : 'Регистрация'}</FormTitle>
                {formState ? <FormSignIn/> : <FormSignUp/>}
                <ButtonsChangeFormBlock>
                    <ButtonSignUp onClick={() => setFormState(false)} theme={theme}
                                  formState={formState}>Регистрация</ButtonSignUp>
                    <ButtonSignIn onClick={() => setFormState(true)} theme={theme}
                                  formState={formState}>Войти</ButtonSignIn>
                </ButtonsChangeFormBlock>
            </WrapperForm>
        </RegistrationBlock>
    );
};

export default Registration;