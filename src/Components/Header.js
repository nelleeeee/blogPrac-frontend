import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";

const Header = styled.header``;

const HeaderWrapper = styled.div``;

const HeaderColumn = styled.div``;

const SearchInput = styled(Input)``;

const HeaderLink = styled(Link)``;

export default () => {
  const search = useInput("");
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">/로</Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/">카테고리별</Link>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/">제목별</Link>
        </HeaderColumn>
        <HeaderColumn>
          <form>
            <SearchInput {...search} placeholder="검색" />
          </form>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
