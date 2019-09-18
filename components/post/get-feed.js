import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_FEED } from '../../utils/query';

export default function GetFeed() {
  const { loading, error, data } = useQuery(
    GET_FEED,
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <p>
      {data.feed[0].id}
      {data.feed[0].createdAt}
    </p>
  );
}