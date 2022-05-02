import Styled from "styled-components";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHnadler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHnadler}>
      <div>
        <input
          placeholder="S E A R C H   H E R E . . ."
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = Styled.form`

position:relative;
width : 100%;
margin:1rem 15rem;



input{
    border : none;
    background : linear-gradient(35deg,#494949,#313131);
    font-size:1rem;
    color : white;
    padding: 0.5rem 1rem ;
    border :  none;
    border-radius:1rem;
    outline: none;
    width :50%;
}
`;

export default Search;
