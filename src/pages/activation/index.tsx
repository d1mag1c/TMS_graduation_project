import React, {useState} from 'react';
import {ActivationBlock, LinkBlock} from "./style";
import {PostActivation} from "../../data/postActivation";
import {Link, useNavigate} from "react-router-dom";

const Activation = () => {
    const [value, setValue] = useState('')
    const [uid, setUid] = useState('')
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        if (value.length) {
            setUid(value.trim().split('/')[5])
            setToken(value.trim().split('/')[6])
        }
    }

    const stateActivation = PostActivation(uid, token).stateActivation

    return (
        <ActivationBlock>
            <LinkBlock>
                <Link to='/'>На главную!</Link>
            </LinkBlock>

            {stateActivation ?
                <>
                    <h1>Почта подтверждена! Вы зарегистрированы!</h1>
                    <button onClick={()=> navigate('/registration')}>Войти в аккаунт!</button>
                </>
                : <>
                    <h1>Для завершения регистрации, вставьте ссылку, которая пришла вам на почту, сюда:</h1>
                    <input onChange={handleChange}/>
                    <button onClick={handleSubmit}>Подтвердить!</button>
                </>}


        </ActivationBlock>
    );
};

export default Activation;