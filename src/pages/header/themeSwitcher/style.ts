import styled from "styled-components";

export const SwitcherBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  min-width: 60px;
  height: 50px;
  margin: 0 20px;
  border: 2px solid #bbbbbb;
  border-radius: 9px;
  position: relative;

`

export const OptionDay = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background: #120818;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: #bbbbbb;

  &:hover {
    cursor: pointer;
  }
`
export const OptionNight = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-bottom: 2px solid #bbbbbb;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background: #bbbbbb;
  color: #120818;

`

export const Switcher = styled.span<{ state?: boolean }>`
  position: absolute;
  width: 100%;
  height: 50%;
  background: #ffe311;
  border-top-right-radius: ${({state}) => state ? '5px' : '0'};
  border-top-left-radius: ${({state}) => state ? '5px' : '0'};
  border-bottom-right-radius: ${({state}) => state ?  '0' : '5px'};
  border-bottom-left-radius: ${({state}) => state ?  '0':  '5px'};
  bottom: 0;
  left: 0;
  transition: 1s;
  transform: translateY(${({state}) => state ? '-23px' : '0'});

  &:hover {
    cursor: pointer;
    background: #d74141;
  }

  &::before {
    content: '';
    position: absolute;
    border-bottom: 1px solid #120818;;
    width: 80%;
    top: 8px;
    left: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    border-bottom: 1px solid #120818;;
    width: 80%;
    bottom: 8px;
    left: 5px;
  }
`