import { FunctionComponent } from "react";

const GUC: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-background-primary box-border flex flex-row items-start justify-between py-7 pr-8 pl-10 tracking-[normal] gap-[20px] text-left text-[32px] text-text-text-dark font-button-button-text-secondary border-b-[1px] border-solid border-default-grey mq450:flex-wrap">
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <div className="h-10 relative font-semibold inline-block whitespace-nowrap mq450:text-[19px] mq750:text-[26px]">
          ABCHotel
        </div>
      </div>
      <div className="w-[136px] flex flex-row items-start justify-start gap-[40px]">
        <img
          className="h-bigger w-bigger relative overflow-hidden shrink-0 min-h-[48px]"
          loading="lazy"
          alt=""
          src="/notification.svg"
        />
        <img
          className="h-bigger w-bigger relative rounded-[50%] object-cover min-h-[48px]"
          loading="lazy"
          alt=""
          src="/ellipse-185@2x.png"
        />
      </div>
    </div>
  );
};

export default GUC;
