import FullPageSpinner from '../components/common/FullPageSpinner';
import Navigator from '../components/common/Navigator';

interface IBaseViewProps {
    children: JSX.Element | JSX.Element[];
    loading?: boolean;
}

const BaseView = ({ children, loading }: IBaseViewProps) => {
    return (
        <div>
            {loading ? <FullPageSpinner /> : children}
            <Navigator />
        </div>
    );
};

export default BaseView;
