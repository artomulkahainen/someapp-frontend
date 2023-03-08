import FullPageSpinner from '../components/common/FullPageSpinner';
import Navigator from '../components/common/Navigator';
import styles from '../components/common/styles/BaseView.module.scss';

interface IBaseViewProps {
    children: React.ReactNode;
    loading?: boolean;
}

const BaseView = ({ children, loading }: IBaseViewProps) => {
    return (
        <div className={styles.baseDiv}>
            {loading ? <FullPageSpinner /> : children}
            <Navigator />
        </div>
    );
};

export default BaseView;
