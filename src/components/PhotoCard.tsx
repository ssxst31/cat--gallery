import React from 'react';
import styled from 'styled-components';

interface PhotoCardProps {
  image: string;
  name: string;
}

function PhotoCard({ image, name }: PhotoCardProps) {
  return (
    <PhotoCardWrapper>
      <PhotoTitle>{name}</PhotoTitle>
      <PhotoImage image={image} />
    </PhotoCardWrapper>
  );
}

const PhotoTitle = styled.span`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(90, 0, 10, 0.4);
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

const PhotoImage = styled.img.attrs<{ image: string }>((props) => ({ src: props.image }))<{ image: string }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: blur(0px);
  transition: filter 0.2s ease-in;
  transform: scale(1.1);
`;

const PhotoCardWrapper = styled.div`
  position: relative;
  line-height: 0;
  overflow: hidden;

  &:hover ${PhotoTitle} {
    opacity: 1;
  }

  &:hover ${PhotoImage} {
    filter: blur(2px);
  }
`;

export default PhotoCard;
