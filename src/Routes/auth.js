import React, { useState } from "react";
import styled from "styled-components";

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
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  padding: 4px;
`;

export default () => {
  const [action, setAction] = useState("login");

  return (
    <Wrapper>
      {action === "login" ? <Box>Log In</Box> : <Box>Sign Up</Box>}
    </Wrapper>
  );
};
