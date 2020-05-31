import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideProfileMenuComponent from '../../components/SideProfileMenu';
import NoEditSideProfileMenuComponent from '../../components/NoEditSideProfileMenu';
import { updateUser } from '@/redux/thunk/user.thunk';
import { getStorage, setStorage } from '@/utils/localStorage';

export default () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});

    const getUserData = () => {
        let userData = getStorage('user-session-benice');
        userData = JSON.parse(userData);
        setUser(userData);
    }

    const setUserData = data => {
        user.userName = data.userName;
        user.password = data.password;
        user.nombre = data.nombre;
        user.correo = data.correo;
        setStorage('user-session-benice', JSON.stringify(user));
        getUserData();
    }

    useEffect(() => {
        getUserData();
    }, []);

    const dispatch = useDispatch();
    const updateUserData = (dataUser) => {
        const newUserData = {
            usuario_id: user.usuario_id,
            userName: dataUser.username,
            password: dataUser.password,
            nombre: dataUser.name,
            correo:dataUser.mail
        }
        
        const promise = dispatch(updateUser(newUserData));
        promise
            .then(() => {
                setUserData(newUserData);
            })
            .catch((error) => {
                console.log('error', error)
            });
    };

    return (
        <>
            {
                open ?
                    <SideProfileMenuComponent
                        onClick={() => setOpen(!open)}
                        updateUserData={(data) => updateUserData(data)}
                        name={user.nombre}
                        mail={user.correo}
                        username={user.userName}
                        password={user.password}
                    /> :
                    <NoEditSideProfileMenuComponent
                        onClick={() => setOpen(!open)}
                        name={user.nombre}
                        mail={user.correo}
                        username={user.userName}
                        password={user.password}
                    />
            }
        </>
    );
}