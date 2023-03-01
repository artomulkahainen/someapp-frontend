import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import { Colors } from '../../utils/styles/colors';

const StyledSpinner = styled(CircularProgress)`
    &.css-18lrjg1-MuiCircularProgress-root {
        color: ${Colors.mainRed};
    }
`;

const SpinnerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const FullPageSpinner = () => {
    return (
        <SpinnerDiv>
            <StyledSpinner />
        </SpinnerDiv>
    );
};

export default FullPageSpinner;
