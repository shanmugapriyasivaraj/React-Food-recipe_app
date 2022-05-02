import React from "react";
import { useEffect, useState } from "react";
import Styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query = ${name}`
    );

    const recipes = await data.json();
    setSearchRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = Styled.div`
display:grid;
grid-template-column : auto auto auto ;
grid-grap :3rem;
padding : 10px;

`;

const Card = Styled.div`
img{
  height : 200px
    width :100%;
    border-radius : 2rem;
}
a{
    text-decoration : none;
}
h4{
    text-align :center;
    padding : 1rem;
    margin-right :350px
}
`;

export default Searched;
