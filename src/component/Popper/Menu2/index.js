import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';


function Menu2({children}) {

    return (
        <Tippy
            content="Tooltisp text"
            interactive
            delay={[0, 100]} 
            placement="bottom-end"
        >
            {children}
        </Tippy>
    );
}

export default Menu2;
