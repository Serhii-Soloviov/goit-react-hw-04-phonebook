import styled from 'styled-components';
export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 40px;
  margin-bottom: 20px;
`;
export const FilterLabel = styled.label`
  font-size: 16px;
  display: block;

  font-weight: bold;
`;
export const FilterInput = styled.input`
  width: 300px;
  height: 30px;
  border: 2px solid #36a9ae;
  border-radius: 5px;
`;
