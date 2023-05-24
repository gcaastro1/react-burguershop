import styled from 'styled-components'

export const Navbar = styled.nav`
  padding: 10px 10px;
  width: 100vw;
  min-width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  border: none;
  background-color: ${({ theme }) => theme.palette.grayScale.four};
  color: ${({ theme }) => theme.palette.grayScale.one};
  z-index: 1;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 160px;
  }

  .cartIcon {
    position: relative;
  }

  .cartCount {
    position: absolute;
    top: 5px;
    right: 0;
    background-color: ${({ theme }) => theme.palette.main.primary};
    color: ${({ theme }) => theme.palette.grayScale.five};
    font-size: ${({ theme }) => theme.typography.sizes.six};
    font-weight: 600;
    padding: 4px 6px;
    border-radius: 8px;
  }

  form {
    width: 360px;
    max-width: 100%;
  }

  .exitLink {
    padding: 16px 10px;
    background: transparent;
    color: ${({ theme }) => theme.palette.grayScale.two};
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.sizes.two};
    &:hover {
      color: ${({ theme }) => theme.palette.grayScale.one};
      text-decoration: underline;
    }
  }
`

export const SearchContainer = styled.div`
  fieldset {
    display: none;
  }

  @media (min-width: 800px) {
    fieldset {
      display: flex;
    }

    .buttonSearch {
      display: none;
    }
  }
`

export const SearchModal = styled.div`
  background-color: ${({ theme }) => theme.palette.grayScale.four};
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 20px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;

  @media (min-width: 800px) {
    display: none;
  }
`
