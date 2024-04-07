import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Property1OnTimeTimerDeviType = {
  accessTime?: string;
  text?: string;

  /** Style props */
  property1OnTimeTimerDeviBackgroundColor?: CSSProperties["backgroundColor"];
  minColor?: CSSProperties["color"];
};

const Property1OnTimeTimerDevi: FunctionComponent<
  Property1OnTimeTimerDeviType
> = ({
  accessTime,
  text = "20min",
  property1OnTimeTimerDeviBackgroundColor,
  minColor,
}) => {
  const property1OnTimeTimerDeviStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property1OnTimeTimerDeviBackgroundColor,
    };
  }, [property1OnTimeTimerDeviBackgroundColor]);

  const minStyle: CSSProperties = useMemo(() => {
    return {
      color: minColor,
    };
  }, [minColor]);

  return (
    <div
      className="rounded-xl bg-honeydew flex flex-row items-center justify-start py-smaller px-small2 gap-[4px] text-left text-sm text-accent-accent-success font-text-description-text"
      style={property1OnTimeTimerDeviStyle}
    >
      <img
        className="w-smaller1 relative h-smaller1 overflow-hidden shrink-0"
        alt=""
        src={accessTime}
      />
      <div className="relative font-medium" style={minStyle}>
        {text}
      </div>
    </div>
  );
};

export default Property1OnTimeTimerDevi;
