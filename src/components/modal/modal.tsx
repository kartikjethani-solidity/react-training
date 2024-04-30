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
      <div className="w-96 bg-slate-50">{children}</div>
    </>
  );
};
export {};
