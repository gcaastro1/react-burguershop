import styled from 'styled-components'

export const InputContainer = styled.fieldset`
  width: 100%;
  max-width: 100%;
  border: none;
  position: relative;

  label {
    color: ${(props) => props.theme.palette.grayScale.two};
    position: absolute;
    top: 12px;
    left: 10px;
    padding: 3px 6px;
    transition: all 0.5s;
    background-color: transparent;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: -10px;
    font-size: ${(props) => props.theme.typography.sizes.six};
    background-color: ${(props) => props.theme.palette.grayScale.five};
  }

  button {
    position: absolute;
    top: -1px;
    right: 10px;
  }

  .iconSearch {
    position: absolute;
    right: 10px;
    top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.palette.main.primary};
    color: ${({ theme }) => theme.palette.grayScale.three};
    padding: 10px;
    font-weight: 500;
  }
`

export const InputText = styled.input`
  padding: 14px 10px;
  width: 100%;
  margin: 0;
  font-size: ${(props) => props.theme.typography.sizes.four};
  border: none;
  background-color: ${(props) => props.theme.palette.grayScale.three};
  color: ${(props) => props.theme.palette.grayScale.one};
  border: 2px solid ${(props) => props.theme.palette.grayScale.three};
  border-radius: 8px;
  transition: 0.2s ease;

  &:focus,
  &:not(:placeholder-shown) {
    outline: none;
    border: 2px solid ${(props) => props.theme.palette.grayScale.one};
    background-color: ${(props) => props.theme.palette.grayScale.five};
  }
`

export const InputSearchText = styled.input`
  padding: 14px 10px;
  width: 100%;
  margin: 0;
  border: none;
  background-color: white;
  color: ${(props) => props.theme.palette.grayScale.one};
  border: 2px solid ${(props) => props.theme.palette.grayScale.three};
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.palette.grayScale.one};
  }
`
