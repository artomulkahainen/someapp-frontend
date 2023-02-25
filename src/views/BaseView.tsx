import Navigator from '../components/common/Navigator';

interface IBaseViewProps {
    children: JSX.Element;
}

const BaseView = ({ children }: IBaseViewProps) => {
    return (
        <div>
            {children}
            <Navigator />
        </div>
    );
};

export default BaseView;
