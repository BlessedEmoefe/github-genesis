import styled from "styled-components";
import { color } from "../../config/colors";

export const ProfileStyles = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  /* margin-left: 10%; */
  z-index:

  .imageContainer {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    cursor: pointer;
  }
  .profileTextAndIcon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    margin-left: 0.5rem;
    cursor: pointer;
    b {
      font-size: 1rem;
      margin-right: 0.2rem;
    }
  }
  .profileContentContainer {
    width: max-content;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    right: ${({ isOpen }) => (isOpen ? "-17%" : "0")};
    transition: 0.4s ease-in;
    background: ${color.primary};
    position: absolute;
    top: 4.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    .profileContent {
      width: 100%;
      padding: 0.8rem 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & > span {
        margin-left: 0.5rem;
        font-size: 0.85rem;
      }
    }
  }
`;
