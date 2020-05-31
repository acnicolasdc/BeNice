import React, { useState } from 'react';
import SideProfileMenuComponent from '../../components/SideProfileMenu'
import NoEditSideProfileMenuComponent from '../../components/NoEditSideProfileMenu'

export default () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {
                open ?                  
                <SideProfileMenuComponent onClick={() => setOpen(!open)} /> :
                <NoEditSideProfileMenuComponent onClick={() => setOpen(!open)} />
            }
        </>
    );
}