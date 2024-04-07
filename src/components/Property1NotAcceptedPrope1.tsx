import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Property1NotAcceptedPrope1Type = {
  quantity?: boolean;
  showCheckBox?: boolean;
  showRectangleDiv?: boolean;
  instruction2?: boolean;
  showSpan?: boolean;

  /** Style props */
  instructionsColor?: CSSProperties["color"];
  pleaseGetConditionersColor?: CSSProperties["color"];
  instructionsColor1?: CSSProperties["color"];
  pleaseGetConditionersColor1?: CSSProperties["color"];
};

const Property1NotAcceptedPrope1: FunctionComponent<
  Property1NotAcceptedPrope1Type
> = ({
  instructionsColor,
  pleaseGetConditionersColor,
  instructionsColor1,
  pleaseGetConditionersColor1,
  quantity,
  showCheckBox,
  showRectangleDiv,
  instruction2,
  showSpan,
}) => {
  const instructions1Style: CSSProperties = useMemo(() => {
    return {
      color: instructionsColor,
    };
  }, [instructionsColor]);

  const pleaseGetConditioners1Style: CSSProperties = useMemo(() => {
    return {
      color: pleaseGetConditionersColor,
    };
  }, [pleaseGetConditionersColor]);

  const instructions2Style: CSSProperties = useMemo(() => {
    return {
      color: instructionsColor1,
    };
  }, [instructionsColor1]);

  const pleaseGetConditioners2Style: CSSProperties = useMemo(() => {
    return {
      color: pleaseGetConditionersColor1,
    };
  }, [pleaseGetConditionersColor1]);

  return (
    <div className="w-[360px] max-w-full flex flex-col items-start justify-start text-left text-xs text-text-text-dark font-button-button-text-secondary">
      <div className="self-stretch rounded-regular2 bg-background-background-primary flex flex-col items-start justify-start p-2 gap-[12px] border-[0.5px] border-solid border-default-grey">
        <div className="self-stretch flex flex-row items-center justify-start font-text-description-text">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="rounded bg-background-grey-light flex flex-row items-center justify-start py-0.5 px-1 gap-[5px] font-button-button-text-secondary">
              <img
                className="w-smaller2 relative rounded-sm h-smaller2 overflow-hidden shrink-0"
                alt=""
                src="/guc1539.svg"
              />
              <div className="relative font-semibold">Rajesh</div>
              <div className="w-2 relative rounded-[50%] bg-accent-danger-accent h-2" />
            </div>
            <div className="rounded-xl bg-background-grey-light flex flex-row items-center justify-center py-small px-regular1">
              <div className="relative font-medium">Scheduled</div>
            </div>
            <div className="w-16 rounded bg-accent-danger-accent h-5 hidden flex-row items-center justify-center p-1 box-border text-3xs text-background-background-primary">
              <div className="relative font-medium">Delayed</div>
            </div>
            <div className="w-16 rounded bg-accent-danger-accent h-5 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-1 box-border text-3xs text-background-background-primary">
              <div className="relative font-medium">Complaint</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start text-sm text-accent-accent-success">
            <div className="rounded-xl bg-honeydew flex flex-row items-center justify-start py-smaller px-small2 gap-[4px]">
              <img
                className="w-smaller1 relative h-smaller1 overflow-hidden shrink-0"
                alt=""
                src="/access-time1.svg"
              />
              <div className="relative font-medium">20min</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-base">
          <div className="flex-1 relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
            Routine Cleaning
          </div>
          <div className="rounded-xl bg-background-grey-light flex flex-row items-center justify-center py-small px-regular1 text-xs text-royalblue font-text-description-text">
            <div className="relative font-medium">Internal Task</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-text-text-dark-secondary font-text-description-text">
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
        <div className="self-stretch bg-background-grey-light flex flex-col items-start justify-start p-3 gap-[12px] font-text-description-text">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <b className="relative">Shampoo</b>
                <div className="relative text-secondary-gray">x1</div>
              </div>
              <div className="w-4 relative h-4 hidden">
                <div className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
              </div>
            </div>
            <div className="w-[229px] relative font-medium hidden text-background-background-primary">
              <span style={instructions1Style}>Instructions:</span>
              <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
              <span style={pleaseGetConditioners1Style}>
                Please get conditioners.
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <b className="relative">Conditioner</b>
                <div className="relative text-secondary-gray">x2</div>
              </div>
              <div className="w-4 relative h-4 hidden">
                <div className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
              </div>
            </div>
            <div className="relative font-medium text-royalblue">
              <span>Instructions:</span>
              <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
              <span>Please get conditioners.</span>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <b className="relative">Towel</b>
                <div className="relative text-secondary-gray">x2</div>
              </div>
              <div className="w-4 relative h-4 hidden">
                <div className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary" />
              </div>
            </div>
            <div className="w-[229px] relative font-medium hidden text-background-background-primary">
              <span style={instructions2Style}>Instructions:</span>
              <span className="text-default-grey whitespace-pre-wrap">{`  `}</span>
              <span style={pleaseGetConditioners2Style}>
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
        <div className="self-stretch rounded-small3 bg-royalblue flex flex-row items-center justify-center py-regular1 px-mediium1 gap-[8px] text-default-color-primary-light">
          <img
            className="w-small3 relative h-small3"
            alt=""
            src="/guc1538.svg"
          />
          <div className="relative font-medium">Notify Staff</div>
        </div>
        <div className="w-[319px] h-[31px] hidden flex-row items-start justify-start text-default-color-primary">
          <div className="w-[319px] rounded-regular1 box-border hidden flex-row items-center justify-center py-regular1 px-mediium1 border-[1px] border-solid border-default-color-primary">
            <div className="relative font-medium">View Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1NotAcceptedPrope1;
