import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { GET_TOPICS } from '../../graphql/queries/GET_TOPICS';
import { TopicsContainer } from './index';

describe('TopicsContainer', () => {
  it('should render topics', async () => {
    // Arrange
    const topicMock = {
      request: {
        query: GET_TOPICS,
        variables: { topic: 'react' }
      },
      result: {
        data: {
          topic: {
            name: 'react',
            stargazerCount: 76868,
            relatedTopics: [
              {
                name: 'angular',
                stargazerCount: 45225
              },
              {
                name: 'nextjs',
                stargazerCount: 722
              }
            ]
          }
        }
      }
    };

    // Act
    render(
      <MockedProvider mocks={[topicMock]} addTypename={false}>
        <TopicsContainer />
      </MockedProvider>
    );

    // Assert
    expect(await screen.findByText(/Loading.../)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/react/)).toBeInTheDocument();
    });
    expect(screen.getByText('angular')).toBeInTheDocument();
    expect(screen.getByText('45225')).toBeInTheDocument();
    expect(screen.getByText('nextjs')).toBeInTheDocument();
    expect(screen.getByText('722')).toBeInTheDocument();
  });

  it('should show no results when there is no related topics', async () => {
    // Arrange
    const topicMock = {
      request: {
        query: GET_TOPICS,
        variables: { topic: 'react' }
      },
      result: {
        data: {
          topic: {
            name: 'react',
            stargazerCount: 76868,
            relatedTopics: []
          }
        }
      }
    };

    // Act
    render(
      <MockedProvider mocks={[topicMock]} addTypename={false}>
        <TopicsContainer />
      </MockedProvider>
    );

    // Assert
    await waitFor(() => {
      expect(screen.getByText(/Sorry, no results found for/)).toBeInTheDocument();
    });
  });

  it('should show error when failed', async () => {
    // Arrange
    const topicMock = {
      request: {
        query: GET_TOPICS,
        variables: { topic: 'react' }
      },
      error: new Error('An error occurred')
    };

    // Act
    render(
      <MockedProvider mocks={[topicMock]} addTypename={false}>
        <TopicsContainer />
      </MockedProvider>
    );

    // Assert
    await waitFor(() => {
      expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
    });
  });
});
