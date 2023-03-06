import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
export const InputForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputLabel = styled.label`
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const Input = styled(Field)`
  width: 300px;
  height: 30px;
  border: 2px solid #36a9ae;
  border-radius: 5px;
  padding-left: 12px;
`;
export const LabelBox = styled.div`
  margin-bottom: 20px;
`;
export const FormButton = styled.button`
font-size: 20px;
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
export const InputBox = styled.div`
  position: relative;
`;
export const Error = styled(ErrorMessage)`
  color: red;
  position: absolute;
  font-size: 12px;
  top: 24px;
  text-decoration: underline;
`;
