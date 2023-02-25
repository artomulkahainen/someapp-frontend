import useBooleanState from './hooks/useBooleanState';
import Router from './Router';

const App = () => {
    const [loggedIn, toggleLoggedIn] = useBooleanState();

    return <Router loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn} />;
};

export default App;
