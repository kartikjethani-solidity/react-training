import { FC, PropsWithChildren } from "react";
import { H1 } from "../h1";

type ModalProps = {
  title: string;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ title, children }) => {
  return (
    <>
      <div className="mx-auto w-96  text-center h-96 text-lg">
        <H1 heading={title} />
        <div className="w-80 bg-slate-50">{children}</div>
      </div>
    </>
  );
};
