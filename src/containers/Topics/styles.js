import styled from '@emotion/styled';

const TopicElementsContainer = styled.div`
  display: grid;
  margin-top: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const ErrorStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

export { TopicElementsContainer, ErrorStyle };
