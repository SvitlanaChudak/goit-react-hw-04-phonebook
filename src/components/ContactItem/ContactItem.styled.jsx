import styled from 'styled-components';

export const Item = styled.li`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
margin-left: 10px;
width: 60px;
cursor: pointer;
border: none;
padding: 3px;
border-radius: 5px;
background-color: #00e5ff;

:hover {
    color: white;
    background-color: blue;
    box-shadow: 0 0 10px #c6cccced;
}
`;