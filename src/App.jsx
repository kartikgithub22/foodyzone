import styled from "styled-components";
import "./App.css";
import React,{ useState,useEffect } from "react";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const[error , setError]  = useState(null)

  if(error)return <div>{error}</div>
  if(loading)return <div>loading.....</div>
  
  useEffect(()=>{
    
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setLoading(false);
        setData(json);
      } catch (error) {
  
         setError("Unable to fetch data")
      }
  
    };
    fetchFoodData();
  },[])
  

  return (
    <Container className="Logo">
      <TopContainer>
        <div className="logo">
          <img src="/Foody Zone.png" />
        </div>
        <div className="search">
          <input placeholder="search food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>BreakFast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <FoodCardContainer>
        <FoodCards></FoodCards>
      </FoodCardContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
min-height : 140px;
display : flex
justify-content : space-between
padding : 16px
align-item : center

.search{
   input {
     background-color : transparent;
     border : 1px solid red;
     color : white;
     border-radius : 5px;
     height : 40px;
     font-size : 16px;

   }
}

`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
const Button = styled.button`
  bakground: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: black;
`;

const FoodCardContainer = styled.section`
  background-image: url("/bg.png");
  height: calc(100vh - 170px);
  backgroun-size: cover;
`;
const FoodCards = styled.div``;
