import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
`;

const List = styled.ul`
  display: flex;
  margin-right: 30px;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Link = styled.a`
  color: ${(props) => props.theme.dateGrey};
`;

const Copyright = styled.span`
  color: ${(props) => props.theme.footerBlack};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#">support</Link>
      </ListItem>
      <ListItem>
        <Link href="#/login">로긴</Link>
      </ListItem>
    </List>
    <Copyright>KKH {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
