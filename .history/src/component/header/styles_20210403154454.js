import styled from "styled-components";
import {color} from "../../config/colors"

export const HeaderStyles = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: max-content;
    background: ${color.primary};
    padding: 0.4rem 1.5rem;
    color:white;

    .headerTitle {
      font-size: 1rem;
      font-weight: 500;
      width: max-content;
      height: max-content;
      padding: 0.4rem;
      /* background: ${color.secondary}; */
      /* border-radius: 4px; */
      /* box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2); */
      /* display: flex; */
      /* position: absolute; */
      /* left: -12.5%; */
      /* transition: 0.6s ease-out; */
      :hover {
        left: 0%;
        transition: 0.6s ease-in;
      }
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
  
`;
