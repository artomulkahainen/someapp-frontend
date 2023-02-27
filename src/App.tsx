import useBooleanState from './hooks/common/useBooleanState';
import Router from './Router';

const App = () => {
    const [loggedIn, toggleLoggedIn] = useBooleanState();

    return <Router loggedIn={loggedIn} toggleLoggedIn={toggleLoggedIn} />;
};

export default App;
