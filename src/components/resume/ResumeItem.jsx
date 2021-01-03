import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

import Arrow from '../../assets/arrow-right.svg';

const ResumeItem = props => {
  const { item } = props;
  return (
    <Column>
      <Row>
        <h1>{item.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.subtitle) }} />

        <Link to={`post/${item.slug}/${item.id}`}>
          Read Case study <img src={Arrow} />
        </Link>
      </Row>
      <Row>
        <img src={item.img} alt="case-study" />
      </Row>
    </Column>
  );
};

export default ResumeItem;

const Column = styled.div`
  margin-top: 56px;
  margin-bottom: 48px;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 100px;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;

const Row = styled.div`
  > img {
    width: 100%;
  }

  > h1 {
    margin-bottom: 10px;

    font-size: 24px;
    line-height: 27px;

    @media (min-width: 768px) {
      margin-bottom: 16px;

      font-size: 40px;
      line-height: 48px;
      max-width: 361px;
    }
  }

  > p {
    font-size: 14px;
    line-height: 17px;

    @media (min-width: 768px) {
      max-width: 320px;
      margin-bottom: 80px;

      font-size: 20px;
      line-height: 24px;
    }
  }

  > a {
    display: none;

    @media (min-width: 768px) {
      display: block;
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      color: #f3653d;
    }

    > img {
      margin-left: 14px;
    }
  }
`;
