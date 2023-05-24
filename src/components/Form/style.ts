import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-size: ${props => props.theme.typography.sizes.six};
    color: ${props => props.theme.palette.feedback.alert}
  }
`
