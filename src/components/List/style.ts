import styled from "styled-components"

export const ListContainer = styled.ul`
  max-width: 100%;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  margin: 120px 0;

  @media (min-width: 800px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(2, 300px);
    overflow: unset;
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(3, 300px);
  }
`

export const NoProducts = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.two};
  color: ${({ theme }) => theme.palette.grayScale.one};
  text-align: center;
`