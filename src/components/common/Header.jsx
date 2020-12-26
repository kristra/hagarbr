import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './Layout';

import Logo from '../../assets/logo-hgrbr-145.svg';
import Email from '../../assets/logo-email.svg';
import Linkedin from '../../assets/logo-linkedin.svg';
// import Instagram from '../../assets/logo-instagram.svg';
import BurgerMenu from '../../assets/burger-menu.svg';
import Close from '../../assets/close.svg';

const Header = () => {
  const [isMenuVisible, setMenuIsVisible] = useState(false);

  const Navigation = (
    <Navbar>
      <NavLink to="/">RESUME</NavLink>
      <a href="mailto:hajarmarwati@gmail.com" target="_blank" rel="noreferrer">
        <img src={Email} alt="email-logo" />
      </a>
      <a href="https://www.linkedin.com/in/hajar-m-a20b80aa/" target="_blank" rel="noreferrer">
        <img src={Linkedin} alt="linkedin-logo" />
      </a>
      {/* <a href="https://instagram.com/hgrbrr" target="_blank" rel="noreferrer">
        <img src={Instagram} alt="instagram-logo" />
      </a> */}
    </Navbar>
  );

  return (
    <Root>
      <Layout>
        <Container>
          <Section>
            <img src={Logo} alt="hgrbr-logo" />
          </Section>
          <Section>
            <Desktop>{Navigation}</Desktop>
            <Mobile>
              {isMenuVisible ? (
                <img src={Close} alt="close" onClick={() => setMenuIsVisible(false)} />
              ) : (
                <img src={BurgerMenu} alt="burger-menu" onClick={() => setMenuIsVisible(true)} />
              )}
            </Mobile>
          </Section>
        </Container>
      </Layout>
      {/** Mobile Navigation */}
      <NavigationMenu isVisible={isMenuVisible}>{Navigation}</NavigationMenu>
    </Root>
  );
};

export default Header;

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  margin: auto 0;

  > img {
    width: 110px;
    @media (min-width: 576px) {
      width: 145px;
    }
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;

  @media (min-width: 576px) {
    display: none;
  }
`;

const Navbar = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-top: 24px;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  > a {
    align-self: flex-end;
    margin-bottom: 24px;
    font-size: 18px;
    text-decoration: none;
    font-weight: 600;
    text-align: right;

    :first-child {
      width: 90%;
    }

    :first-child:after {
      content: '';
      border-bottom: 0.5px solid #0e2f54;
      margin-top: 15px;
      margin-bottom: 15px;
      display: block;
      width: 100%;

      @media (min-width: 576px) {
        display: none;
      }
    }
  }

  @media (min-width: 576px) {
    > a {
      :first-child {
        margin-right: 45px;
      }
      font-size: 18px;
      text-decoration: none;
      margin-right: 24px;
    }
  }
`;

const NavigationMenu = styled.div`
  position: fixed;
  transform: translate(${props => (props.isVisible ? '0%' : '100%')}, 0);
  background: white;
  z-index: 1;
  width: 100%;
  height: 100%;

  transition: 200ms all ease-in;
`;
