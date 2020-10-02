import React, { useContext, useEffect, useState } from 'react';
import bemCssModules from 'bem-css-modules';

import { default as LoginFormStyles } from './LoginForm.module.scss';
import Modal from '../Modal/Modal';
import { StoreContext } from '../../store/StoreProvider';
import request from '../../helpers/request';



const style = bemCssModules(LoginFormStyles);


const LoginForm = ({ handleOnClose, isModalOpen }) => {

    const [Login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');

    const { setUser } = useContext(StoreContext);

    const handleOnChangeLogin = event => setLogin(event.target.value);
    const handleOnChangePassword = event => setPassword(event.target.value);
    const handleOnCloseModal = event => {
        event.preventDeafult();
        handleOnClose();
    };

    const resetStateOfInput = () => {
        setLogin('');
        setPassword('');
        setValidateMessage('');

    };

    const handleOnSubmit = async event => {
        event.preventDeafult();
        const {data, status} = await request.post('/users', {
            Login, password 
        });
        if(status === 200) {
            setUser(data.user);
            resetStateOfInput();
            handleOnClose();
        }else {
            setValidateMessage(data.message);
        }
    }

    useEffect(() => {
        if(isModalOpen) {
            resetStateOfInput();
        }
    }, [isModalOpen]);


    const validateMessageComponent = validateMessage.length ? <p className={style(validate - message)}>{validateMessage}</p> : null;

    return (
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} sholudBeCloseOnOutsideClick={true}>
            {validateMessageComponent}
            <form className={style()} method="post" onSubmit={handleOnSubmit}>
                <div className={style('row')}>
                    <label> Login:
                        <input onChange={handleOnChangeLogin} type="text" value={Login}></input>
                    </label>
                </div>
                <div className={style('row')}>
                    <label>Hasło:
                        <input onChange={handleOnChangePassword} type="password" value={password}></input>
                    </label>
                </div>
                <div className={style('row')}>
                    <button type="submit">Zaloguj</button>
                    <button onClick={handleOnCloseModal} type="button">Anuluj</button>
                </div>
            </form>
        </Modal>
    );

};

export default LoginForm;