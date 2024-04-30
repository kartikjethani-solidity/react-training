import { FC } from "react";

type Props = {
  heading: string;
};

export const H1: FC<Props> = ({ heading }) => {
  return <h1 style={{ fontSize: "20px", fontWeight: "bold"}}>{heading}</h1>;
};
