import React, { Dispatch, useState } from "react";
import { TryItOutButton } from "./style"

type TryItOutButtonProps = {
  idRef: string;
  setActive: Dispatch<React.SetStateAction<boolean>>;
}

export default function TryItOutButtonComponent ({idRef, setActive}: TryItOutButtonProps){

  return (
    <TryItOutButton href={`#${idRef}`} onClick={() => setActive(true)}>Try it out!</TryItOutButton>
  )
}