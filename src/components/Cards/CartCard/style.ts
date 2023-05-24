import styled, { css } from 'styled-components'

export const CartCard = styled.li`
  min-height: 80px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    background-color: ${({ theme }) => theme.palette.grayScale.three};
    border-radius: 8px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    height: 80px;
    padding: 10px;
    gap: 10px;
  }

  .productContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.sizes.four};
  }

  span {
    font-size: ${({ theme }) => theme.typography.sizes.six};
    color: ${({ theme }) => theme.palette.grayScale.two};
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.five};
    color: ${({ theme }) => theme.palette.main.primary};
  }

  button {
    width: fit-content;
    justify-self: flex-end;
  }
`

export const CartButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.palette.grayScale.three};

  span {
    border: 2px solid ${({ theme }) => theme.palette.grayScale.three};
    background: ${({ theme }) => theme.palette.grayScale.five};
    padding: 7px 16px;
  }
`
