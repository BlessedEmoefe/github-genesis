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
    width:20%;

    .socialcontainer {
      border-radius: 50%;
      box-shadow: 1px 1px 3px rgba(100, 100, 100, 100.3), 0 1px 3px rgba(0, 0, 0, 0.2);
      width: max-content;
      height: max-content;
      padding: 0.5rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
