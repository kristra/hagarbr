import React, { useMemo } from 'react';
import styled from 'styled-components';

import Layout from '../common/Layout';
import ResumeItem from './ResumeItem';

import WelcomeImage from '../../assets/welcome.svg';
import Bread from '../../assets/bread-dribbble.png';
import ImageProcessing from '../../assets/image-processing.png';

const Resume = () => {
  const items = [
    {
      title: 'Redesign eDOT eCommerce',
      subtitle: 'Enhancing better shopping activity experience in eDOT app.',
      img: Bread,
      url: ''
    },
    {
      title: 'Redesign eDOT eCommerce',
      subtitle: 'Enhancing better shopping activity experience in eDOT app.',
      img: ImageProcessing,
      url: ''
    }
  ];

  const ResumeItems = useMemo(() => {
    return items.map((item, index) => <ResumeItem key={`resume-item-${index}`} item={item}></ResumeItem>);
  }, [items]);

  return (
    <Root>
      <Layout>
        <Section>
          <h1>Welcome and Happy Reading!</h1>
          <p>
            Thank you for landing in my website, enjoy your time here and please contact me for any support, discuss or
            feedback.
          </p>
        </Section>
        <Section>
          <img src={WelcomeImage} alt="girl-waving-welcome" />
        </Section>
      </Layout>
      <Grey>
        <Layout>
          <Section>{ResumeItems}</Section>
        </Layout>
      </Grey>
    </Root>
  );
};

export default Resume;

const Root = styled.div``;

const Grey = styled.div`
  background: #fafbff;
  margin-top: -36px;

  @media (min-width: 576px) {
    margin-top: -104px;
  }
`;

const Section = styled.div`
  > h1 {
    font-size: 36px;
    line-height: 43px;
    text-align: center;
  }

  > p {
    text-align: center;
    margin: auto;
    font-size: 18px;
    line-height: 22px;

    @media (min-width: 576px) {
      width: 57%;
    }
  }

  > img {
    width: 100%;

    @media (min-width: 576px) {
      max-width: 532px;
      display: block;
      margin: auto;
    }
  }
`;
