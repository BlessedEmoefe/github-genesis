import styled from "styled-components";
import { color } from "../../config/colors";

export const ProfileStyles = styled.div`
  height: 100%;
  width: max-content;
  z-index: 1;
  cursor: pointer;
  .aboutContainer {
    z-index: -1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .imageContainer {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 50%;
    }
    .profileTextAndIcon {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: nowrap;
      margin-left: 0.5rem;
      b {
        font-size: 1rem;
        margin-right: 0.2rem;
      }
    }
  }
  .profileContentContainer {
    z-index: 0;
    width: max-content;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);
    right: 5px;
    transition: 0.4s ease-in-out;
    background: ${color.primary};
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "4.1rem" : "-18rem")};
    animation: ${({ isOpen }) => (isOpen ? "slideIn" : "slideOut")}
      ${({ isOpen }) => (isOpen ? "1.2s" : "0.5s")} 1;
    @keyframes slideIn {
      100% {
        top: 4.1rem;
      }
      40% {
        top: 10rem;
      }
      20% {
        top: -30rem;
      }
      0% {
        top: -20rem;
        display: flex;
      }
    }
    @keyframes slideOut {
      0% {
        top: 4.1rem;
      }
      20% {
        top: 10rem;
      }
      60% {
        top: 4.1rem;
        display: none;
      }
      /* 100% {
        top: -20rem;
      } */
    }
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
