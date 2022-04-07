import React from 'react';
import styled from 'styled-components';

function PhotoCard() {
  return (
    <PhotoCardWrapper>
      <PhotoTitle />
      <PhotoImage />
    </PhotoCardWrapper>
  );
}

const PhotoCardWrapper = styled.div`
  position: relative;
  line-height: 0;
  overflow: hidden;
`;

const PhotoTitle = styled.span`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(90, 0, 10, 0.4);

  color: #fff;
  font-size: 1.5em;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.3s;
`;

const PhotoImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: blur(0px);
  transition: filter 0.2s ease-in;
  transform: scale(1.1);
`;

PhotoImage.defaultProps = {
  src: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
};

export default PhotoCard;
