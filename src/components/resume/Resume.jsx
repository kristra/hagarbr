import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import Layout from '../common/Layout';
import ResumeItem from './ResumeItem';

import WelcomeImage from '../../assets/welcome.svg';

const Resume = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const json = await response.json();

      setPosts(
        json.map(post => ({
          id: post.id,
          title: post.title.rendered,
          subtitle: post.excerpt.rendered,
          img: post.jetpack_featured_media_url,
          slug: post.slug
        }))
      );
    };

    fetchPosts();
  }, []);

  const ResumeItems = useMemo(() => {
    return posts.map((item, index) => <ResumeItem key={`resume-item-${index}`} item={item}></ResumeItem>);
  }, [posts]);

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
