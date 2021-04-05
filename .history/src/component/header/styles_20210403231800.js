import styled from "styled-components";
import {color} from "../../config/colors"

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: max-content;
  background: ${color.primary};
  padding: 0.4rem 1.5rem;
  color: white;

  font-size: 1rem;

  .headerTitle {
    font-weight: 500;
    width: max-content;
    height: max-content;
    padding: 0.4rem;
    font-family: "Kaushan Script", cursive;
  }
  .about {
    font-weight: 700;
    font-family: inherit;
  }
  .timer {
    font-weight: 700;
  }

  @media (max-width: 1070px) {
    .headerTitle {
      font-size: 0.6rem;
    }
  }
`;
