import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideProfileMenuComponent from '../../components/SideProfileMenu';
import NoEditSideProfileMenuComponent from '../../components/NoEditSideProfileMenu';
import { updateUser } from '@/redux/thunk/user.thunk';
import { getStorage } from '@/utils/localStorage';

export default () => {
    const [open, setOpen] = useState(false);

    let userData = getStorage('user-session-benice');
    userData = JSON.parse(userData);

    const dispatch = useDispatch();
    const updateUserData = (dataUser) => {                
        const promise = dispatch(updateUser(dataUser));
        promise
            .then((response) => {
                console.log('response', response)
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
                        updateUserData={updateUserData}
                        name={userData.nombre}
                        mail={userData.correo}
                        username={userData.userName}
                        password={userData.password}
                    /> :
                    <NoEditSideProfileMenuComponent 
                        onClick={() => setOpen(!open)} 
                        name={userData.nombre}
                        mail={userData.correo}
                        username={userData.userName}
                        password={userData.password}
                    />
            }
        </>
    );
}