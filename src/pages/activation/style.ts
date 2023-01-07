import styled from "styled-components";

export const ActivationBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  width: 100%;
  padding: 50px;

  & h1 {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input {
    margin-top: 30px;
    width: 70%;
    max-width: 800px;
    height: 50px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    color: black;
    border: 2px solid rgb(79, 13, 100);
    font-size: 20px;
  }

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: rgb(79, 13, 100);
    color: white;

    &:hover {
      background: #390050;
    }
  }
`
export const LinkBlock = styled.div`

  display: flex;
  width: 100%;

  & a {
    margin: 0 0 50px 100px;
  }

  & a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1050px) {

    margin: 0 0 20px 20px;
  }
  & a {
    margin: 0 0 50px 0;
  }
`