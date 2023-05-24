import styled from 'styled-components'

export const CartHeader = styled.div`
  background-color: ${({ theme }) => theme.palette.main.primary};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;
  padding: 16px 20px;

  h4 {
    color: ${({ theme }) => theme.palette.grayScale.five};
  }

  button {
  }
`

export const CartBody = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

export const CartFooter = styled.li`
  border-top: 2px solid ${({ theme }) => theme.palette.grayScale.three};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }

  span {
    font-size: ${({ theme }) => theme.typography.sizes.five};
    font-weight: bold;
  }

  .total{
    color: ${({ theme }) => theme.palette.grayScale.two};
  }
`
