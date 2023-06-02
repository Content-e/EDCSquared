import { ButtonHTMLAttributes } from "react";
import Spinner from "./spinner";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  isLoading,
  variant = "primary",
  ...rest
}: Props) {
  return (
    <button
      type="submit"
      className={`
        px-12 py-3 sm:w-fit w-full rounded-full
        flex items-center relative
        whitespace-nowrap font-bold text-md
        disabled:cursor-not-allowed
        disabled:bg-gray-400
        ${isLoading && "cursor-progress"}
        ${variant === "primary" && "bg-brand-primary"}
        ${variant === "secondary" && "bg-brand-secondary"}
      `}
      {...rest}
    >
      {children}
      {isLoading && (
        <Spinner className="h-full w-6 aspect-square right-2 absolute top-0 bottom-0" />
      )}
    </button>
  );
}