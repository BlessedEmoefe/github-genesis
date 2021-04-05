import styled from "styled-components";

export const BodyStyles = styled.div`
  background: transparent;
  width: 100%;
  height: 150vh;
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-template-rows:repeat(2, minmax(150px,auto));
  grid-gap:1rem;

  .section1{
    background:red;
    grid-column:;
    
  }
`;