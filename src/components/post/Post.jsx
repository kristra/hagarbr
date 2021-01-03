import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import DOMPurify from 'dompurify';

import Layout from '../common/Layout';

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(REACT_APP_API_URL + params.id);
      const json = await response.json();

      setPost({
        title: json.title.rendered,
        subtitle: json.excerpt.rendered,
        content: json.content.rendered
      });
    };

    fetchPost();
  }, []);

  return (
    <Root>
      <Layout>
        <h1 className="center">{post?.title}</h1>
        <div className="center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post?.subtitle) }}></div>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post?.content) }}></div>
      </Layout>
    </Root>
  );
};

const Root = styled.div`
  .wp-block-columns {
    display: flex !important;
  }

  .wp-block-column {
    flex-basis: 50% !important;
  }

  .center {
    text-align: center;
  }

  h1 {
    font-size: 40px;
    margin-block-end: 0px;
  }

  p {
    color: #1a1a1a;
    font-size: 18px;
  }
`;

export default Post;
