import styled from 'styled-components';
export const Item = styled.li`
  width: 400px;
  display: flex;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid rgba(0, 59, 147, 0.1);
  border-radius: 5px;
  align-items: center;
`;
export const Marker = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #36a9ae;
  margin: auto 15px;
`;
export const Text = styled.span`
  margin-right: auto;
`;
export const ButtonDelete = styled.button`
  background-color: #36a9ae;
  background-image: linear-gradient(#37adb2, #329ca0);
  border: 1px solid #2a8387;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 1px 1px;
  color: #ffffff;
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  text-align: center;
  max-width: 200px;
  &:hover {
    box-shadow: rgba(255, 255, 255, 0.3) 0 0 2px inset,
      rgba(0, 0, 0, 0.4) 0 1px 2px;
  }
`;
