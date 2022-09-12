import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Search } from './index';

describe('Search', () => {
  it('should show topic as a part of placeholder', () => {
    // Arrange
    const mockTopic = 'lorem';

    // Act
    render(<Search topic={mockTopic} />);

    // Assert
    expect(screen.getByPlaceholderText(`Search: ${mockTopic}`)).toBeInTheDocument();
  });

  it('should submit search query when clicking submit', () => {
    // Arrange
    const mockTopic = 'lorem';
    const mockSetTopic = jest.fn();

    // Act
    render(<Search topic={mockTopic} setTopic={mockSetTopic} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'search' } });
    userEvent.click(screen.getByRole('button'));

    // Assert
    expect(mockSetTopic).toHaveBeenCalledWith('search');
  });

  it('should submit search query when press enter', () => {
    // Arrange
    const mockTopic = 'lorem';
    const mockSetTopic = jest.fn();

    // Act
    render(<Search topic={mockTopic} setTopic={mockSetTopic} />);
    const inputNode = screen.getByRole('textbox');
    fireEvent.change(inputNode, { target: { value: 'search' } });
    fireEvent.keyDown(inputNode, { key: 'Enter', charCode: 13 });

    // Assert
    expect(mockSetTopic).toHaveBeenCalledWith('search');
  });
});
