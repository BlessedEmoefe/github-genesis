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

  .headerTitle {
    font-size: 1rem;
    font-weight: 500;
    width: max-content;
    height: max-content;
    padding: 0.4rem;
    font-family: "Kaushan Script", cursive;
  }
  .about {
    font-size: 1rem;
    font-weight: 700;
    font-family: inherit;
  }
  .timer {
    font-size: 1rem;
    font-weight: 700;
  }

  @media (max-width: 1070px) {
    font-size:0.8rem;
  }
`;
