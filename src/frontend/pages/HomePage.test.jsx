import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the title and status', () => {
    render(<HomePage />);
    expect(screen.getByText(/AI Avatar Webapp/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/The avatar is waiting for your question/i)).toBeInTheDocument();
  });
});
