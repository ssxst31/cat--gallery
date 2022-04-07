import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoCard from '../components/PhotoCard';
import { CatPhoto } from '../type';
import { getCatPhotoList } from '../api/catPhoto/data';
import Loading from '../components/Loading';

function Main() {
  const [catPhotoList, setCatPhotoList] = useState<CatPhoto[]>();
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<CatPhoto[]>();

  useEffect(() => {
    getCatPhotoList().then((res: CatPhoto[]) => {
      setCatPhotoList(res);
    });
  }, []);

  useEffect(() => {
    getCatPhotoList().then((res: CatPhoto[]) => {
      setCatPhotoList(res);
    });
  }, [search]);

  if (!catPhotoList) {
    return <Loading />;
  }

  const updateField = (field: string, value: any, update = true) => {
    if (update) onSearch(value as string);

    if (field === 'keyword') {
      setSearch(value as string);
    }
    if (field === 'results') {
      setResults(value as CatPhoto[]);
    }
  };

  const matchName = (name: string, keyword: string) => {
    const keyLen = keyword.length;

    const lowerCaseName = name.toLowerCase().substring(0, keyLen);
    if (keyword === '') return false;
    return lowerCaseName === keyword.toString().toLowerCase();
  };

  const onSearch = (text: string) => {
    const newCatPhotoList = catPhotoList.filter((item) => item.name.includes(text) || matchName(item.name, text));
    setResults(newCatPhotoList);
  };

  return (
    <Wrapper>
      <Title>😸 고양이 사진 갤러리 😻</Title>
      <SearchWrapper>
        <SearchInputBox>
          <SearchInput value={search} onChange={(e) => updateField('keyword', e.target.value)} />
          <SearchButton>Search</SearchButton>
        </SearchInputBox>
        <SearchResult>
          {results?.map((item) => (
            <SearchResultCard>{item.name}</SearchResultCard>
          ))}
        </SearchResult>
      </SearchWrapper>
      <PhotoList>
        {catPhotoList.map((item) => (
          <PhotoCard image={item.image} name={item.name} />
        ))}
      </PhotoList>
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

const PhotoList = styled.div`
  display: grid;
  max-width: 1024px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const SearchResult = styled.div`
  z-index: 10;
  position: absolute;
  margin: 0 auto;
  width: 218px;
`;

const SearchResultCard = styled.div`
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
    border-radius: 0.4rem 0.4rem 0 0;
  }

  &:last-child {
    border-radius: 0 0 0.4rem 0.4rem;
  }

  &:hover {
    background: white;
    color: dodgerblue;
  }
`;
export default Main;
