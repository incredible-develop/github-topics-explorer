import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CurrentTopic } from './index';

describe('CurrentTopic', () => {
  it('should render topic', () => {
    const mockTopic = 'lorem';
    render(<CurrentTopic topic={mockTopic} />);

    expect(screen.getByText(/lorem/)).toBeInTheDocument();
  });
});
