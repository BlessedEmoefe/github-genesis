import styled from "styled-components";

export const HomeStyles = styled.div`
  background: blue;
  width: 100%;
  height: 100vh;
  margin: 0;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: max-content;
    background: pink;
    padding: 1.1rem 0.5rem;

    .headerTitle {
      font-size: 1.1rem;
      font-weight: 500;
      width: max-content;
      height: max-content;
      padding: 0.4rem;
      background: red;
      border-radius: 4px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
      display: flex;
      position: absolute;
      left: -14.5%;
      transition: 0.6s ease-out;
      :hover {
        left: 0%;
        transition: 0.6s ease-in;
      }
    }
    .about {
      font-size: 1rem;
      color: darkgray;
      font-weight: 700;
      font-
    }
    .timer {
      font-size: 1rem;
      color: grey;
      font-weight: 700;
    }
  }
`;
