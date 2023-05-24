import styled from 'styled-components'

export const MainCard = styled.li`
  padding: 0;
  height: 340px;
  width: 300px;
  min-width: 300px;
  border: 2px solid ${({ theme }) => theme.palette.grayScale.three};
  background-color: #fff;
  border-radius: 8px;
  transition: scale 0.3s ease;
  display: flex;
  flex-direction: column;

  .imgContainer {
    height: 150px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.grayScale.three};
    border-radius: 6px 6px 0 0;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .infoContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 190px;
    padding: 20px;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.three};
  }

  span {
    font-size: ${({ theme }) => theme.typography.sizes.six};
    color: ${({ theme }) => theme.palette.grayScale.two};
  }

  p {
    font-size: ${({ theme }) => theme.typography.sizes.five};
    color: ${({ theme }) => theme.palette.main.primary};
    font-weight: 600;
  }

  button {
    width: fit-content;
  }

  @media (min-width: 800px) {
    &:hover {
      scale: 1.1;
      transition: scale 0.3s ease;
      border: 2px solid ${({ theme }) => theme.palette.main.primary};
    }
  }
`
