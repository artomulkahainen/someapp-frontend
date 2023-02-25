import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../utils/enums';
import { Colors } from '../../utils/styles/colors';
import styles from './styles/Navigator.module.scss';

const Navigator = () => {
    const navigate = useNavigate();

    return (
        <BottomNavigation
            showLabels
            className={styles.navigationDiv}
            value={window.location.pathname}
            onChange={(_, newValue: RoutePaths) => {
                navigate(newValue);
            }}
            sx={{
                '& .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected':
                    {
                        color: Colors.mainRed,
                    },
            }}>
            <BottomNavigationAction
                label="Feed"
                value={RoutePaths.FEED}
                icon={<MessageIcon />}
            />
            <BottomNavigationAction
                label="Profile"
                value={RoutePaths.PROFILE}
                icon={<AccountCircleIcon />}
            />
            <BottomNavigationAction
                label="Settings"
                value={RoutePaths.SETTINGS}
                icon={<SettingsIcon />}
            />
        </BottomNavigation>
    );
};

export default Navigator;
