import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:boder-box;    
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        color:${(props) => props.theme.textBlack};
        font-size:14px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a {
        color:${(props) => props.theme.textBlack};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
`;
