import { render, screen } from '@testing-library/react';

import App from '../App';

describe('<App/>', () => {
    it('should match the snapshot', () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it('should render the text "Hello world!"', () => {
        render(<App />);
        expect(screen.getByText('Hello world!')).toBeInTheDocument();
    });
});
