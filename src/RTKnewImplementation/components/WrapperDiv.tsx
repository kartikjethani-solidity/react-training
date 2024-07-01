import React, { Children } from "react";
import { FC, PropsWithChildren } from "react";

export const WrapperDiv: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full flex w-full justify-center items-center dark:bg-gray-800 p-2 ">
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4 md:p-2 xl:p-5">
        {children}
      </div>
    </div>
  );
};
