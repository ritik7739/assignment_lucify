import { FunctionComponent } from "react";

export type Property1InternalTaskDeviType = {
  quantity?: boolean;
  showCheckBox?: boolean;
  showRectangleDiv?: boolean;
  instruction2?: boolean;
  showSpan?: boolean;
};

const Property1InternalTaskDevi: FunctionComponent<
  Property1InternalTaskDeviType
> = ({ quantity, showCheckBox, showRectangleDiv, instruction2, showSpan }) => {
  return (
    <div className="w-[360px] max-w-full flex flex-col items-start justify-start text-left text-xs text-text-text-dark font-button-button-text-secondary">
      <div className="self-stretch rounded-regular2 bg-background-background-primary flex flex-col items-start justify-start p-2 gap-[12px] border-[0.5px] border-solid border-default-grey">
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="rounded bg-background-grey-light flex flex-row items-center justify-start py-0.5 px-1 gap-[5px]">
              <img
                className="w-smaller2 relative rounded-sm h-smaller2 overflow-hidden shrink-0"
                alt=""
                src="/guc1539.svg"
              />
              <div className="relative font-semibold">Rajesh</div>
              <div className="w-2 relative rounded-[50%] bg-accent-danger-accent h-2" />
            </div>
            <div className="rounded bg-background-grey-light h-5 hidden flex-row items-center justify-center py-0.5 px-1 box-border">
              <div className="relative font-medium">Scheduled</div>
            </div>
            <div className="rounded-xl bg-accent-danger-accent flex flex-row items-center justify-center p-1 text-background-background-primary font-text-description-text">
              <div className="relative font-medium">Delayed</div>
            </div>
            <div className="rounded-xl bg-accent-danger-accent flex flex-row items-center justify-center p-1 text-background-background-primary font-text-description-text">
              <div className="relative font-medium">Complaint</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start text-background-background-primary">
            <div className="w-10 rounded-xl bg-accent-danger-accent h-5 flex flex-row items-center justify-center py-smaller3 px-regular1 box-border gap-[4px]">
              <div className="relative font-semibold">1</div>
              <img
                className="w-3 relative rounded-12xs-5 h-3"
                alt=""
                src="/star-9.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
          <div className="flex-1 relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            Routine Cleaning
          </div>
          <div className="rounded-xl bg-background-grey-light flex flex-row items-center justify-center py-small px-regular1 text-royalblue font-text-description-text">
            <div className="relative font-medium">Internal Task</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-3xs text-text-text-dark-secondary font-text-description-text">
          <div className="w-[151.5px] flex flex-row items-center justify-start gap-[5px]">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/guc15311.svg"
            />
            <div className="relative font-medium"> 21 Jul 2024 | 03:00 am</div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium"># 68988</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-text-text-dark-secondary">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-semibold">From:Pantry</div>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-semibold">To:Reception</div>
          </div>
        </div>
        <div className="w-[319px] bg-background-grey-light hidden flex-col items-start justify-start p-3 box-border gap-[12px] font-text-description-text">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-center gap-[13px]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">
                  <b>Step 1:</b>
                  <span> Change the sheets and replace towels</span>
                </div>
                <div className="w-3.5 relative text-secondary-gray hidden">
                  x2
                </div>
              </div>
              <div className="w-4 relative h-4 hidden">
                <div className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
              </div>
            </div>
            <div className="w-[229px] relative font-medium hidden text-default-color-primary">
              <span>Instructions:</span>
              <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
              <span className="text-text-text-dark">
                Please get conditioners.
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-center gap-[13px]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">
                  <b>Step2:</b>
                  <span> Change the sheets and replace towels</span>
                </div>
                <div className="w-3.5 relative text-secondary-gray hidden">
                  x2
                </div>
              </div>
              <div className="w-4 relative h-4 hidden">
                <div className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
              </div>
            </div>
            <div className="relative font-medium text-default-color-primary">
              <span>Instructions:</span>
              <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
              <span className="text-text-text-dark">
                Please get conditioners.
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-center gap-[13px]">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <div className="relative">
                  <b>Step 3:</b>
                  <span> Change the sheets and replace towels</span>
                </div>
                <div className="w-3.5 relative text-secondary-gray hidden">
                  x2
                </div>
              </div>
              <div className="w-4 relative h-4 hidden">
                <div className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
              </div>
            </div>
            <div className="w-[229px] relative font-medium hidden text-default-color-primary">
              <span>Instructions:</span>
              <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
              <span className="text-text-text-dark">
                Please get conditioners.
              </span>
            </div>
          </div>
          <div className="w-[295px] rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium1 box-border gap-[8px] text-default-color-primary-light font-button-button-text-secondary">
            <img
              className="w-small3 relative h-small3"
              alt=""
              src="/guc1538.svg"
            />
            <div className="relative font-medium">Accept Task</div>
          </div>
        </div>
        <div className="w-[319px] rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium1 box-border gap-[8px] text-default-color-primary-light">
          <img
            className="w-small3 relative h-small3"
            alt=""
            src="/guc1538.svg"
          />
          <div className="relative font-medium">Notify Staff</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-royalblue">
          <div className="flex-1 rounded-small3 flex flex-row items-center justify-center py-regular1 px-mediium1 border-[1px] border-solid border-royalblue">
            <div className="relative font-medium">View Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1InternalTaskDevi;
