import React from "react";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  createdAt,
  title,
  published,
  categories,
  comments,
  files,
  text,
}) => {
  return (
    <PostPresenter
      id={id}
      createdAt={createdAt}
      title={title}
      published={published}
      categories={categories}
      comments={comments}
      files={files}
      text={text}
    />
  );
};

PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  title: PropTypes.string.isRequired,
  published: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
    })
  ),
  files: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      createdAt: PropTypes.string,
    })
  ),
};

export default PostContainer;
