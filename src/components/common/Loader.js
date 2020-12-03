import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & .MuiCircularProgress-colorPrimary{
    color: yellow;
  }
`

export default function Loader() {
  return (
    <Background>
      <CircularProgress thickness={5} size={50} />
    </Background>
  );
}