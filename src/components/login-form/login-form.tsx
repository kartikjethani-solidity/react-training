import { FC, PropsWithChildren } from "react";

type Props = {};

export const LoginForm: FC<Props> = () => {
  return (
    <>
      <div className="">
        <label htmlFor="username">Username </label>
        <input
          name="username"
          id="username"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <br />
        <label htmlFor="password">password </label>
        <input
          type="password"
          name="password"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
};

export {};
