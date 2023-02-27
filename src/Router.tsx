import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutePaths } from './utils/enums';
import FeedView from './views/FeedView';
import LoginView from './views/LoginView';
import ProfileView from './views/ProfileView';
import SettingsView from './views/SettingsView';

const Router = ({
    loggedIn,
    toggleLoggedIn,
}: {
    loggedIn: boolean;
    toggleLoggedIn: () => void;
}) => {
    return (
        <Routes>
            <Route
                path={RoutePaths.LOGIN}
                element={
                    !loggedIn ? (
                        <LoginView toggleLoggedIn={toggleLoggedIn} />
                    ) : (
                        <Navigate to={RoutePaths.FEED} />
                    )
                }
            />
            <Route
                path={RoutePaths.FEED}
                element={
                    loggedIn ? (
                        <FeedView toggleLoggedIn={toggleLoggedIn} />
                    ) : (
                        <Navigate to={RoutePaths.LOGIN} />
                    )
                }
            />
            <Route
                path={RoutePaths.PROFILE}
                element={
                    loggedIn ? (
                        <ProfileView />
                    ) : (
                        <Navigate to={RoutePaths.LOGIN} />
                    )
                }
            />
            <Route
                path={RoutePaths.SETTINGS}
                element={
                    loggedIn ? (
                        <SettingsView />
                    ) : (
                        <Navigate to={RoutePaths.LOGIN} />
                    )
                }
            />
            <Route path="/*" element={<Navigate to={RoutePaths.LOGIN} />} />
        </Routes>
    );
};

export default Router;
