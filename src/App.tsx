import { useState } from 'react';
import AppView from './views/AppView';
import LoginView from './views/LoginView';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const toggleLogin = () => setLoggedIn(!loggedIn);

    return loggedIn ? <AppView /> : <LoginView setLoggedIn={toggleLogin} />;
};

export default App;
