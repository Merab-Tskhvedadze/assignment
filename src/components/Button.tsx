import { PropsWithChildren } from "react";

type Props = {
  type: "submit" | "button";
  className?: string;
  onClick?: () => void;
};

export function Button({
  type,
  className,
  onClick,
  children,
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        className
          ? className
          : "flex items-center justify-center gap-2 w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      }`}
    >
      {children}
    </button>
  );
}
