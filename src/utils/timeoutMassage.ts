import {Dispatch, SetStateAction} from "react";

export const timeoutMassage = (changeState:Dispatch<SetStateAction<boolean>>) => {

  setTimeout( () => changeState(false), 1000);


  return
}