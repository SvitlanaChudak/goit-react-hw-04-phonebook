import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
border: 1px solid blue;
padding: 5px;
border-radius: 5px;
background-color: white;
outline: none;

:hover {
    box-shadow: 0 0 10px #c6cccced;
}
`;