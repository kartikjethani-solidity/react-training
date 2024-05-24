import { FC, PropsWithChildren } from "react";
import { H1 } from "../h1";

type ModalProps = {
  title: string;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ title, children }) => {
  return (
    <>
      <div className="mx-auto w-96 bg-green-500 text-center h-96">
        <H1 heading={title} />
        <div className="w-80 bg-slate-50">{children}</div>
        {/* <footer>modal footer</footer> */}
      </div>
    </>
  );
};
