import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <Wrapper>
      <Title>😸 고양이 사진 갤러리 😻</Title>
      <SearchWrapper>
        <SearchInputBox>
          <SearchInput />
          <SearchButton>Search</SearchButton>
        </SearchInputBox>
      </SearchWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  margin: 21px 0px;
  text-align: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 299px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const SearchInputBox = styled.div`
  display: flex;
  height: 32px;
`;

const SearchInput = styled.input`
  width: 220px;
  padding: 2px 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  width: 74px;
  padding: 0px 16px;
  margin-left: 5px;
  color: white;
  background-color: #1e90ff;
  border-width: 2px;
  border-radius: 4px;
`;

export default Main;
