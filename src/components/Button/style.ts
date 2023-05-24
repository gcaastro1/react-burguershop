import styled, { css } from 'styled-components'
import { iProps } from './types'

export const Button = styled.button<iProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.grayScale.two};
  font-weight: 600;
  padding: 16px 10px;
  font-size: ${({ theme }) => theme.typography.sizes.five};

  ${(props) => {
    switch (props.variant) {
      case 'primaryDefault':
        return css`
          background: ${({ theme }) => theme.palette.main.primary};
          color: white;
          &:hover {
            background: ${({ theme }) => theme.palette.main.primaryLight};
          }
        `
      case 'grayDefault':
        return css`
          background: ${({ theme }) => theme.palette.grayScale.three};
          color: ${({ theme }) => theme.palette.grayScale.two};
          &:hover {
            background: ${({ theme }) => theme.palette.grayScale.two};
            color: ${({ theme }) => theme.palette.grayScale.three};
          }
        `
      case 'primaryMedium':
        return css`
          background: ${({ theme }) => theme.palette.main.primary};
          color: white;
          &:hover {
            background: ${({ theme }) => theme.palette.main.primaryLight};
          }
        `
      case 'grayMedium':
        return css`
          background: ${({ theme }) => theme.palette.grayScale.three};
          color: ${({ theme }) => theme.palette.grayScale.two};
          &:hover {
            background: ${({ theme }) => theme.palette.grayScale.two};
            color: ${({ theme }) => theme.palette.grayScale.three};
          }
        `
      case 'icon':
        return css`
          background: transparent;
          color: ${({ theme }) => theme.palette.grayScale.two}
          font-weight: 500;
          font-size: ${({ theme }) => theme.typography.sizes.two};
          &:hover {
            color: ${({ theme }) => theme.palette.grayScale.one};
            //text-decoration: underline;
          }
        `
      case 'close':
        return css`
          background: transparent;
          padding: 0;
          font-size: ${({ theme }) => theme.typography.sizes.three};
          color: ${({ theme }) => theme.palette.grayScale.five};
          &:hover {
            color: ${({ theme }) => theme.palette.grayScale.one};
            //text-decoration: underline;
          }
        `
      case 'cartIcon':
        return css`
          background: ${({ theme }) => theme.palette.grayScale.three};
          color: ${({ theme }) => theme.palette.main.secondary};
          border: 2px solid ${({ theme }) => theme.palette.grayScale.three};
          border-radius: 0;
          padding: 6px 10px;
          &:hover {
            color: ${({ theme }) => theme.palette.grayScale.one};
            //text-decoration: underline;
          }
        `
    }
  }}

  transition: .3s;
`
