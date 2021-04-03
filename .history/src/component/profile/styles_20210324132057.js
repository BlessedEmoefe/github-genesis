import styled from "styled-components";

export const ProfileStyles = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10%;

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
  .profileContent{
    width:20%;
    height:4rem;
    background:red;
    position:absolute;
    right:0;
    top:4.5rem;

  }
`;
