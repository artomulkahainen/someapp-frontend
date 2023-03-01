import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';

test('renders frontpage', () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    );
    const linkElement = screen.getByText(/GimmeVibe/i);
    expect(linkElement).toBeInTheDocument();
});
