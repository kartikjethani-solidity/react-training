import { useSelector } from "react-redux";
import React from "react";
import type { RootState } from "../../redux-toolkit-store";
import { postFormData } from "./postToJson";

export const validationFunction = (param: string) => {
  if (!param || /\d/.test(param)) {
    console.log("Username: ( !empty and only alphabets ) ");
    postFormData(param);
  } else {
    console.log("username: valid ");
  }
};
