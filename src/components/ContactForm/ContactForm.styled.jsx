import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  margin-bottom: 50px;
  padding: 25px;
  background-color: #00e5ff;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 5px;
`;

export const Button = styled.button`
width: 100px;
margin-left: auto;
margin-right: auto;
cursor: pointer;
border: none;
padding: 5px;
border-radius: 5px;
background-color: white;

:hover {
    color: white;
    background-color: blue;
    box-shadow: 0 0 10px #c6cccced;
}
`;

export const Input = styled(Field)`
border: none;
padding: 5px;
border-radius: 5px;
background-color: white;
outline: none;

:hover {
    box-shadow: 0 0 10px #c6cccced;
}

:focus {
    box-shadow: 0 0 10px #c6cccced;
    border: 1px solid blue;
}
`;
