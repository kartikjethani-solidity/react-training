import { FC } from "react";

type Props = {
  heading: string;
};

export const H1: FC<Props> = ({ heading }) => {
  return (
    <h1 className="font-bold text-center	" style={{ fontSize: "26px" }}>
      {heading}
    </h1>
  );
};
