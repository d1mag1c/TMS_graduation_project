import styled from "styled-components";

export const SearchBlock = styled.section`
  display: flex;
  width: 40%;
  position: relative;
  margin: 0 150px 0 auto;
  @media (max-width: 1050px) {
    order: 5;
    width: 100%;
    margin: 20px 20px 10px 20px;
  }
`
export const InputSearch = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid #bbbbbb;
  border-radius: 10px;
  background: rgb(79, 13, 100);
  padding: 0 120px 0 10px;
  font-size: 20px;
  color: white;

  &:hover {
    cursor: pointer;
    border-color: white;
  }
  
`


