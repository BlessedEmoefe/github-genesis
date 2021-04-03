import styled from "styled-components";
import { color } from '../../config/colors';

export const FooterStyles = styled.div`
  background: ${color.primary};
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  margin: 0;
  color: white;

  .copyright {
    /* background: red; */
    small {
      font-weight: bolder;
      cursor: pointer;
    }
  }
  .socialMedia {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;

    .socialcontainer {
      border-radius: 50%;
      -webkit-box-shadow: 0px 0px 3px 0px rgba(255, 255, 255, 1);
      -moz-box-shadow: 0px 0px 3px 0px rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 3px 0px rgba(255, 255, 255, 1);
      width: max-content;
      height: max-content;
      padding: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
