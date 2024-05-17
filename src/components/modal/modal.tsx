import { FC, PropsWithChildren } from "react";

type ModalProps = {
  title: string;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ title, children }) => {
  return (
    <>
      <div className="mx-auto w-96 bg-green-500 text-center h-96">
        <div className="w-80 bg-slate-50">{children}</div>
        <footer>modal footer</footer>
      </div>
    </>
  );
};
