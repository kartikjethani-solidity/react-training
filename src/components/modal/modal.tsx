import { FC, PropsWithChildren } from "react";
import { H1 } from "../h1";

type ModalProps = {
  title: string;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <div>
        <div>{children}</div>
      </div>
    </>
  );
};
