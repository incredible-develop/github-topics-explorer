import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Topic } from './index';

describe('Topic', () => {
  it('should render topic and star count', () => {
    // Arrange
    const mockName = 'lorem';
    const mockStargazerCount = 12345;

    // Act
    render(<Topic name={mockName} stargazerCount={mockStargazerCount} />);

    // Assert
    expect(screen.getByText(mockName)).toBeInTheDocument();
    expect(screen.getByText(mockStargazerCount)).toBeInTheDocument();
  });

  it('should set the topic when clicking it', () => {
    // Arrange
    const mockName = 'lorem';
    const mockSetTopic = jest.fn();

    // Act
    render(<Topic name={mockName} setTopic={mockSetTopic} />);
    userEvent.click(screen.getByTestId('topic-element'));

    // Assert
    expect(mockSetTopic).toHaveBeenCalledWith(mockName);
  });

  it('should set the topic when pressing enter', () => {
    // Arrange
    const mockName = 'lorem';
    const mockSetTopic = jest.fn();

    // Act
    render(<Topic name={mockName} setTopic={mockSetTopic} />);
    fireEvent.keyDown(screen.getByTestId('topic-element'), { key: 'Enter', charCode: 13 });

    // Assert
    expect(mockSetTopic).toHaveBeenCalledWith(mockName);
  });

  it('should set the topic when pressing spacebar', () => {
    // Arrange
    const mockName = 'lorem';
    const mockSetTopic = jest.fn();

    // Act
    render(<Topic name={mockName} setTopic={mockSetTopic} />);
    fireEvent.keyDown(screen.getByTestId('topic-element'), { key: ' ', charCode: 13 });

    // Assert
    expect(mockSetTopic).toHaveBeenCalledWith(mockName);
  });
});
