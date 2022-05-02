import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./Components/Search";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = Styled(Link)`
text-decoration : none;
font-size : 1.5rem;
font-weight : 400;
font-family : "Lobster Two",cursive;
`;

const Nav = Styled.div`
padding: 0.5rem 0;
display :flex;
justify-content : flex-start;
align-items : center;
svg{
  font-size :2rem;
}
`;

export default App;
