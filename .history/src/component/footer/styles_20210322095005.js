import styled from "styled-components";
import { color } from '../../config/colors';

export const FooterStyles = styled.div`
  background: ${color.primary};
  width: 100%;
  height: max-content;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:1rem 1rem;
  margin: 0;

  .copyright{
background:red;

  }
  .socialMedia{

  }
`;
