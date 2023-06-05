import { PropsWithChildren } from "react";

export default function GradientCard({ children }: PropsWithChildren) {
  return (
    <div className="gradient rounded-2xl text-white p-5 flex items-end relative overflow-hidden">
      <div className="absolute bg-glass bg-cover inset-0 mix-blend-difference" />
      <div className="gradient rounded-2xl p-3 w-full relative overflow-hidden">
        <div className="absolute bg-glass bg-cover inset-0 mix-blend-color-dodge" />
        {children}
      </div>
    </div>
  );
}