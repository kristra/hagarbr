import React from 'react';
import styled from 'styled-components';

const Layout = props => {
  return (
    <Root>
      <Container>{props.children}</Container>
    </Root>
  );
};

export default Layout;

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 320px;
  margin: auto;

  @media (min-width: 576px) {
    width: 550px;
    margin: 48px auto;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 720px;
    margin: 48px auto;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 900px;
    margin: 48px auto;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    width: 1056px;
    margin: 48px auto;
  }
`;
