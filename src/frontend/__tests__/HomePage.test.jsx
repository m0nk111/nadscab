import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { name: /AI Avatar Webapp/i });
    expect(heading).toBeInTheDocument();
  });
});
