import { GET_TOPICS } from '../queries/GET_TOPICS';
import { useQuery } from '@apollo/client';

export const useGetTopics = (topic) => {
  const { data, loading, error, refetch } = useQuery(GET_TOPICS, {
    variables: {
      topic
    }
  });
  return {
    data,
    loading,
    error,
    refetch: () =>
      refetch({
        topic
      })
  };
};
