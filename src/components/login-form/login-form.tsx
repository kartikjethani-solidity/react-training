import { FC, PropsWithChildren } from "react";

export const LoginForm: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mx-auto h-52 bg-orange-500">
      <input
        className="border border-red-300"
        name="username"
        placeholder="enter username"
      />
      <input
        placeholder="Enter Password"
        className="border border-red-300"
        type="password"
        name="password"
      />
      <button>Login</button>

      {children}
    </div>
  );
};
