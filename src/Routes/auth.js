import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";
import useInput from "../Hooks/useInput";

// 기본 구조
// export default () => {
//   const [action, setAction] = useState("login");

//   return action === "login" ? "Log in" : "Sign up";
// };

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

const Link = styled.span`
  color: ${(props) => props.theme.dateGrey};
  cursor: pointer;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

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

export default () => {
  const [action, setAction] = useState("login");
  const username = useInput("");
  const email = useInput("");

  console.log(username, email);
  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"username"} {...username} />
            <Button text={"Log in"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"username"} {...username} />
            <Input placeholder={"email"} {...email} type="email" />
            <Button text={"Sign Up"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't have an account?{"  "}
            <Link onClick={() => setAction("signUp")}>Sign Up</Link>
          </>
        ) : (
          <>
            have an account?{"  "}
            <Link onClick={() => setAction("logIn")}>Log In</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
