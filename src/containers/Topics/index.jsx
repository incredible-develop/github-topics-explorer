import React, { useState } from 'react';
import { useGetTopics } from '../../graphql/hooks/useGetTopics';
import { Search } from '../../components/Search';
import { CurrentTopic } from '../../components/CurrentTopic';
import { Topic } from '../../components/Topic';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Styles
import { TopicElementsContainer, ErrorStyle } from './styles';
import Button from '@mui/material/Button'; //material UI

export const TopicsContainer = () => {
  const [topic, setTopic] = useState('react');
  const { data, loading, error, refetch } = useGetTopics(topic);

  // Display loading status.
  if (loading)
    return (
      <div className="topics-container" data-testid="topics-container">
        <CurrentTopic
          // Displays current topic as a heading
          topic="Loading..."
        />

        <Search
          // Searchbar with preset topic placeholder
          topic={topic}
          setTopic
        />

        <label>
          <h2>Related Topics</h2>
        </label>
      </div>
    );

  // Display error modal.
  if (error)
    return (
      <Modal open={true} className="modal">
        <Box sx={ErrorStyle}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            style={{ marginBottom: '14px' }}>
            Something went wrong!
          </Typography>
          <Typography>{error.message}</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Can&apos;t fetch data from Server. Try again.
          </Typography>
          <Button
            variant="contained"
            onClick={refetch}
            style={{ width: '100%', marginTop: '14px' }}>
            Please Try Again
          </Button>
        </Box>
      </Modal>
    );
  // Display main page.
  return (
    <div className="topics-container">
      {/* Displays current topic as a heading */}
      <CurrentTopic topic={topic} />

      {/* Searchbar with preset topic placeholder */}
      <Search topic={topic} setTopic={setTopic} />

      <label>
        <h2>Related Topics</h2>
      </label>

      <TopicElementsContainer className="topicsContainer">
        {
          // Fallback for no results
          !data.topic || data.topic.relatedTopics.length === 0 ? (
            <div className="no-results">
              <p>Sorry, no results found for &quot;{topic}&quot;.</p>
            </div>
          ) : (
            // Otherwise show results
            data.topic.relatedTopics.map((topic) => (
              <Topic
                key={topic.name}
                name={topic.name}
                stargazerCount={topic.stargazerCount}
                setTopic={setTopic}
              />
            ))
          )
        }
      </TopicElementsContainer>
    </div>
  );
};
