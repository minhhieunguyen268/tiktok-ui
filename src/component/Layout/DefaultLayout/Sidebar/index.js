import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return <h2 className={cx('sidebar')}>Sidebar</h2>;
}

export default Sidebar;
