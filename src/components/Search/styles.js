import styled from '@emotion/styled';

const SearchElement = styled.div`
  margin-bottom: 3rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  h5 {
    margin-bottom: 0.5rem;
    line-height: 1;
  }
  .search-field {
    display: grid;
    height: 2.5rem;
    gap: 0.5rem;
    grid-template-columns: 1fr 100px;
    width: 100%;
    grid-column: 1 / span 2;
    min-width: clamp(300px, 400px, 100%);
    max-width: 100%;
    input {
      appearance: none;
      outline: none;
      border-radius: 10px;
      border: 1px solid #1565c0;
      box-shadow: none;
      padding: 0.25rem 1rem;
      background: white;
      transition: 0.25s ease;
      font-size: 20px;
    }
  }
`;

export { SearchElement };
