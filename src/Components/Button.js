import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.titleBlack};
  font-weight: 600;
  text-align: center;
  padding: 5px; 0px;
  font-size: 14px;
  margin-left: 3px
  
`;

const Button = ({ text }) => <Container>{text}</Container>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
