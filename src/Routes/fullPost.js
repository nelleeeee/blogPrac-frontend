import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import Loader from "../Components/Loader";
import Post from "../Components/Post";

const FULLPOST_QUERY = gql`
  {
    allPost {
      id
      createdAt
      title
      published
      categories {
        id
        name
      }
      comments {
        text
        createdAt
      }
      files {
        id
        url
        createdAt
      }
      text
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
  const { data, loading } = useQuery(FULLPOST_QUERY);
  console.log(data);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.allPost &&
        data.allPost.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            createdAt={post.createdAt}
            title={post.title}
            published={post.published}
            categories={post.categories}
            comments={post.comments}
            files={post.files}
            text={post.text}
          />
        ))}
    </Wrapper>
  );
};
