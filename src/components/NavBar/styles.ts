import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: ${colors.primary[0]};
  padding-left: 1rem;
  display: flex;
  justify-content: space-between;
  
  img {
    height: 100%;
    clip-path: circle(50%);
  }
  `;

export const NavBar = styled.nav`
  width: fit-content;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ul {
    display: flex;
    list-style-type: none;
    height: 5rem;
    gap: 1rem;
    align-items: center;

    li {
      font-weight: 600;
      cursor: pointer;
      color: ${colors.primary[1]};
    }
  }

  svg {
    font-size: 2rem;
    stroke: ${colors.primary[1]};
    cursor: pointer;
  }
`;
