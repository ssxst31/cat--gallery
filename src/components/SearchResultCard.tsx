import React from 'react';

import styled from 'styled-components';

interface SearchResultCardProps {
  name: string;
}

function SearchResultCard({ name }: SearchResultCardProps) {
  return <SearchResultWrapper>{name}</SearchResultWrapper>;
}

const SearchResultWrapper = styled.div`
  width: 218px;
  height: 31px;
  line-height: 31px;
  padding: 0 12px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 0;
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }

  &:hover {
    background: white;
    color: dodgerblue;
  }
`;

export default SearchResultCard;
