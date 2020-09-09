import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  padding: 4px;
  border-radius: 0px;
  width: 100%;
  max-width: 300px;
`;

// const StateChanger = styled(Box)`
//   text-align: center;
//   padding: 20px 0px;
// `;

// const Link = styled.span`
//   color: ${(props) => props.theme.dateGrey};
//   cursor: pointer;
// `;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({ email, secret, onSubmit }) => (
  <Wrapper>
    <Form>
      <form onSubmit={onSubmit}>
        <Input placeholder={"Email"} {...email} type="email" />
        <Input placeholder={"secret"} {...secret} type="password" />
        <Button text={"Log in"} />
      </form>
    </Form>
  </Wrapper>
);
