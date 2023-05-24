import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (min-width: 800px) {
    flex-direction: row-reverse;
    gap: 60px;
  }
`

export const FormContainer = styled.div`
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.palette.grayScale.four};
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);

  h3 {
    font-size: ${(props) => props.theme.typography.sizes.three};
  }

  p {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.typography.sizes.five};
    color: ${(props) => props.theme.palette.grayScale.two};
    width: 320px;
    max-width: 90%;
  }

  a {
    background-color: ${(props) => props.theme.palette.grayScale.four};
    color: ${(props) => props.theme.palette.grayScale.two};
    font-weight: 600;
    text-decoration: none;
    text-align: center;
    padding: 16px 10px;
    border-radius: 8px;

    :hover {
      background-color: ${(props) => props.theme.palette.grayScale.two};
      color: ${(props) => props.theme.palette.grayScale.four};
    }
  }
`

export const LogoContainer = styled.div`
  width: 380px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  img {
    width: 200px;
  }

  div {
    border: 2px solid ${(props) => props.theme.palette.grayScale.four};
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    padding: 20px 16px;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .bagIcon {
    background-color: ${(props) => props.theme.palette.main.primaryLight};
    padding: 16px;
    border-radius: 8px;

    & > svg {
      color: ${(props) => props.theme.palette.main.primary};
      font-size: ${(props) => props.theme.typography.sizes.two};
    }
  }

  p {
    color: ${(props) => props.theme.palette.grayScale.two};
    font-size: ${(props) => props.theme.typography.sizes.five};

    & > span {
      color: ${(props) => props.theme.palette.grayScale.one};
    }
  }

  .ballsIcon {
    max-width: 100%;
    display: none;
  }

  @media (min-width: 800px) {
    .ballsIcon {
      display: flex;
    }
  }
`
