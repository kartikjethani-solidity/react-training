import { FC } from "react";

type Props = {
  heading: string;
};

export const H1: FC<Props> = ({ heading }) => {
  return (
    <h1 className="font-bold" style={{ fontSize: "19px" }}>
      {heading}
    </h1>
  );
};
