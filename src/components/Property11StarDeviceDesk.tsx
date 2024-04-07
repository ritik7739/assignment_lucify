import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Property11StarDeviceDeskType = {
  prop?: string;

  /** Style props */
  property11StarDeviceDeskBackgroundColor?: CSSProperties["backgroundColor"];
};

const Property11StarDeviceDesk: FunctionComponent<
  Property11StarDeviceDeskType
> = ({ prop, property11StarDeviceDeskBackgroundColor }) => {
  const property11StarDeviceDeskStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: property11StarDeviceDeskBackgroundColor,
    };
  }, [property11StarDeviceDeskBackgroundColor]);

  return (
    <div
      className="w-10 rounded-xl bg-accent-danger-accent h-5 flex flex-row items-center justify-center py-smaller3 px-regular1 box-border gap-[4px] text-left text-xs text-background-background-primary font-button-button-text-secondary"
      style={property11StarDeviceDeskStyle}
    >
      <div className="relative font-semibold">{prop}</div>
      <img
        className="w-3 relative rounded-12xs-5 h-3"
        alt=""
        src="/star-9.svg"
      />
    </div>
  );
};

export default Property11StarDeviceDesk;
