import styled from "styled-components";

export const BodyStyles = styled.div`
  background: transparent;
  width: 100%;
  /* height: 150vh; */
  .bodyContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, minmax(200px, auto));
    grid-gap: 1rem;
    padding: 2rem;

    .section1, .section2, .section3, .section4 {
      border-radius: 0.6rem;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
      text
    }

    .section1 {
      /* background: blue; */
      grid-column: 1/2;
      grid-row: 1/2;
    }
    .section2 {
      /* background: yellow; */
      grid-column: 2/4;
      grid-row: 1/2;
    }
    .section3 {
      /* background: pink; */
      grid-column: 1/3;
      grid-row: 2/3;
    }
    .section4 {
      /* background: teal; */
      grid-column: 3/4;
      grid-row: 2/3;
    }
  }
`;
