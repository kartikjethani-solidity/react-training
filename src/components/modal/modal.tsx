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
      <div className="w-100 font-serif bg-yellow-100 text-center h-90hidden flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-80">
        <H1 heading={title} />
        <div className="w-80 bg-blue-50">{children}</div>
      </div>
    </>
  );
};
