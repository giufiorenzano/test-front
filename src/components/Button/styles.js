import styled from 'styled-components'

export const ContainerButton = styled.button`
  color: var(--light);
  font-size: 1.25rem;
  font-weight: bold;

  border: none;
  border-radius: 3px;
  background-color: var(--orange-500);
  box-shadow: 0 1px #d45a00;

  height: 3.75rem;
  width: 21rem;

  :hover {
    background-color: var(--orange-600);
  }
`
