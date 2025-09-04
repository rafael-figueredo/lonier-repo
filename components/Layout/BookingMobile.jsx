import Image from "next/image";
import Backdrop from "../Backdrop";
import React from "react";
import Button from "../Button";
export default function BookingMobile(props) {
  return (
    <div
      className={`${
        props.position ? "fixed" : "absolute"
      } flex justify-center py-2 text-primary-500 bg-secondary-50 inset-x-0 z-10 border-t-2 lg:hidden`}
      style={{ bottom: props.position ? 0 : "9.625rem" }}
    >
      <Button onClick={() => props.onClick(true)}>Agendar Horário</Button>
    </div>
  );
}
