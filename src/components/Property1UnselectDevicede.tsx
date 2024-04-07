import { FunctionComponent } from "react";

export type Property1UnselectDevicedeType = {
  tagName?: string;
};

const Property1UnselectDevicede: FunctionComponent<
  Property1UnselectDevicedeType
> = ({ tagName }) => {
  return (
    <div className="rounded-xl box-border h-7 flex flex-row items-center justify-center py-1 px-2 text-left text-sm text-text-text-dark-secondary font-button-button-text-secondary border-[1px] border-solid border-default-grey">
      <div className="relative font-medium">{tagName}</div>
    </div>
  );
};

export default Property1UnselectDevicede;
