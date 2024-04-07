import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SizemediumIconFalseTypeType = {
  text?: string;

  /** Style props */
  sizemediumIconFalseTypeBorder?: CSSProperties["border"];
  sizemediumIconFalseTypeFlex?: CSSProperties["flex"];
  sizemediumIconFalseTypeBorderRadius?: CSSProperties["borderRadius"];
  buttonTextColor?: CSSProperties["color"];
};

const SizemediumIconFalseType: FunctionComponent<
  SizemediumIconFalseTypeType
> = ({
  text = "Button Text",
  sizemediumIconFalseTypeBorder,
  sizemediumIconFalseTypeFlex,
  sizemediumIconFalseTypeBorderRadius,
  buttonTextColor,
}) => {
  const sizemediumIconFalseTypeStyle: CSSProperties = useMemo(() => {
    return {
      border: sizemediumIconFalseTypeBorder,
      flex: sizemediumIconFalseTypeFlex,
      borderRadius: sizemediumIconFalseTypeBorderRadius,
    };
  }, [
    sizemediumIconFalseTypeBorder,
    sizemediumIconFalseTypeFlex,
    sizemediumIconFalseTypeBorderRadius,
  ]);

  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonTextColor,
    };
  }, [buttonTextColor]);

  return (
    <div
      className="rounded-regular4 flex flex-row items-center justify-center py-regular4 px-mediium3 text-left text-xs text-default-color-primary1 font-button-button-text-secondary border-[1px] border-solid border-default-color-primary1"
      style={sizemediumIconFalseTypeStyle}
    >
      <div className="relative font-medium" style={buttonTextStyle}>
        {text}
      </div>
    </div>
  );
};

export default SizemediumIconFalseType;
