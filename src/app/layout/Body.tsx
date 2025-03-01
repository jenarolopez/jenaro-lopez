import { FC, ReactNode } from "react";

const Body:FC<{children: ReactNode}> = (props) => {

  return (
    <div className="bg-slate-900 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4 text-slate-100">
        {props.children}
      </div>
    </div>
  );
};
export default Body;
