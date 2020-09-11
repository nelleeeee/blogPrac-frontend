import React from "react";
import styled from "styled-components";
import FatText from "../FatText";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 10px;
`;

const Categories = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;
const Category = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`;
// const Files = styled.div`
//   position: relative;
//   padding-bottom: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   flex-shrink: 0;
// `;

// const File = styled.div`
//   max-width: 100%;
//   width: 100%;
//   height: 600px;
//   position: absolute;
//   top: 0;
//   background-image: url(${(props) => props.src}});
//   background-position: center;
// `;

const Meta = styled.div`
  padding: 15px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.5;
  display: block;
  font-size: 12px;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.dateGrey} 1px solid;
`;

export default ({
  id,
  createdAt,
  title,
  published,
  categories,
  comments,
  files,
  text,
}) => (
  <Post>
    <Header>
      <UserColumn>
        <FatText text={title} />
      </UserColumn>
    </Header>
    <UserColumn>
      <Categories>
        {categories &&
          categories.map((category) => (
            <Category key={category.id}>{category.name}</Category>
          ))}
      </Categories>
    </UserColumn>
    {/* <UserColumn>
      <FatText text={comments} />
    </UserColumn> */}
    {/* <Files>
      {files && files.map((file) => <File key={file.id} src={file.url} />)}
    </Files> */}
    <Meta>
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
  </Post>
);
