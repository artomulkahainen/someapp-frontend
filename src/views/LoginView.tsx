interface ILoginViewProps {
    setLoggedIn: () => void;
}

const LoginView = ({ setLoggedIn }: ILoginViewProps) => {
    return (
        <div>
            <p>GimmeVibe</p>
            <button onClick={setLoggedIn}>Press me</button>
        </div>
    );
};

export default LoginView;
