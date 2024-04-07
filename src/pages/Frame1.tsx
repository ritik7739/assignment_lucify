import { FunctionComponent } from "react";
import GDC from "../components/GDC";

const Frame1: FunctionComponent = () => {
  return (
    <div className="relative bg-background-background-primary w-full h-[920px] flex flex-col items-start justify-start pt-[5px] px-0 pb-[84px] box-border gap-[10px] text-left text-base text-text-text-dark font-button-button-text-secondary">
      <div className="w-56 bg-background-background-secondary box-border flex flex-row items-center justify-start py-3 pr-0 pl-8 gap-[12px] border-b-[5px] border-solid border-default-color-primary">
        <img
          className="w-normal relative h-normal overflow-hidden shrink-0"
          alt=""
          src="/guc153.svg"
        />
        <div className="relative font-semibold">Home</div>
      </div>
      <GDC />
    </div>
  );
};

export default Frame1;
