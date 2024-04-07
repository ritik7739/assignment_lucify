import { FunctionComponent } from "react";

const GDC: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[12px] text-left text-base text-text-text-dark font-button-button-text-secondary">
      <div className="self-stretch h-12 flex flex-row items-center justify-start py-3 pr-[22px] pl-1.5 box-border">
        <div className="flex flex-row items-center justify-start gap-[2px]">
          <img
            className="w-very-big relative h-very-big overflow-hidden shrink-0"
            alt=""
            src="/guc1531.svg"
          />
          <div className="w-[162px] flex flex-row items-center justify-start gap-[12px]">
            <img
              className="w-normal relative h-normal overflow-hidden shrink-0"
              alt=""
              src="/guc1532.svg"
            />
            <div className="relative font-semibold">Console</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="w-56 flex flex-row items-center justify-start py-regular pr-0 pl-10 box-border gap-[12px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/guc1533.svg"
          />
          <div className="relative font-semibold">Attendance</div>
        </div>
        <div className="w-56 flex flex-row items-center justify-start py-regular pr-0 pl-10 box-border gap-[12px]">
          <img
            className="w-very-big relative h-very-big"
            alt=""
            src="/guc1534.svg"
          />
          <div className="relative font-semibold">Overview</div>
        </div>
        <div className="w-56 hidden flex-row items-center justify-start py-regular pr-0 pl-10 box-border gap-[12px]">
          <img className="w-6 relative h-6" alt="" src="/guc1535.svg" />
          <div className="relative font-semibold">Scheduled Task</div>
        </div>
        <div className="w-56 flex flex-row items-center justify-start py-regular pr-0 pl-10 box-border gap-[12px]">
          <img
            className="w-normal relative h-normal overflow-hidden shrink-0"
            alt=""
            src="/guc1536.svg"
          />
          <div className="relative font-semibold">Staff</div>
        </div>
      </div>
    </div>
  );
};

export default GDC;
