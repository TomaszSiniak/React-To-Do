import React from 'react';

const Header =(props) => {
    const title='React ToDo App';
    return(
        <div className="header">
            <h1 className="header__title">{title}</h1>
        </div>
        )
}

export default Header;