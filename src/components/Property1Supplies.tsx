import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Property1SuppliesType = {
  itemServiceName?: string;
  x2?: string;
  instructions?: string;
  prop?: string;
  pleaseGetConditioners?: string;
  instruction2?: boolean;
  showCheckBox?: boolean;
  quantity?: boolean;
  showRectangleDiv?: boolean;
  showSpan?: boolean;

  /** Style props */
  frameDivGap?: CSSProperties["gap"];
  shampooFontFamily?: CSSProperties["fontFamily"];
  shampooColor?: CSSProperties["color"];
  shampooFontWeight?: CSSProperties["fontWeight"];
  x2Position?: CSSProperties["position"];
  x2FontSize?: CSSProperties["fontSize"];
  x2Color?: CSSProperties["color"];
  x2TextAlign?: CSSProperties["textAlign"];
  x2FontWeight?: CSSProperties["fontWeight"];
  checkboxButtonWidth?: CSSProperties["width"];
  checkboxButtonPosition?: CSSProperties["position"];
  checkboxButtonHeight?: CSSProperties["height"];
  checkboxButtonFontFamily?: CSSProperties["fontFamily"];
  rectangleDivPosition?: CSSProperties["position"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivRight?: CSSProperties["right"];
  rectangleDivBottom?: CSSProperties["bottom"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivBorderRadius?: CSSProperties["borderRadius"];
  rectangleDivBorder?: CSSProperties["border"];
  rectangleDivFontSize?: CSSProperties["fontSize"];
  rectangleDivFontFamily?: CSSProperties["fontFamily"];
  rectangleDivColor?: CSSProperties["color"];
  rectangleDivTextAlign?: CSSProperties["textAlign"];
  instructionsPleaseGetContFontSize?: CSSProperties["fontSize"];
  instructionsPleaseGetContFontWeight?: CSSProperties["fontWeight"];
  instructionsPleaseGetContFontFamily?: CSSProperties["fontFamily"];
  instructionsPleaseGetContTextAlign?: CSSProperties["textAlign"];
  instructionsPleaseGetContWidth?: CSSProperties["width"];
  instructionsPleaseGetContHeight?: CSSProperties["height"];
  instructionsColor?: CSSProperties["color"];
  instructionsPosition?: CSSProperties["position"];
  instructionsHeight?: CSSProperties["height"];
  instructionsWidth?: CSSProperties["width"];
  instructionsTop?: CSSProperties["top"];
  instructionsRight?: CSSProperties["right"];
  instructionsBottom?: CSSProperties["bottom"];
  instructionsLeft?: CSSProperties["left"];
  instructionsBorderRadius?: CSSProperties["borderRadius"];
  instructionsBorder?: CSSProperties["border"];
  spanColor?: CSSProperties["color"];
  spanWidth?: CSSProperties["width"];
  spanPosition?: CSSProperties["position"];
  spanFontSize?: CSSProperties["fontSize"];
  spanFontWeight?: CSSProperties["fontWeight"];
  spanFontFamily?: CSSProperties["fontFamily"];
  spanTextAlign?: CSSProperties["textAlign"];
  pleaseGetConditionersColor?: CSSProperties["color"];
};

const Property1Supplies: FunctionComponent<Property1SuppliesType> = ({
  itemServiceName = "Shampoo",
  x2,
  instructions,
  prop,
  pleaseGetConditioners,
  instruction2 = true,
  showCheckBox = true,
  quantity = true,
  showRectangleDiv,
  showSpan,
  frameDivGap,
  shampooFontFamily,
  shampooColor,
  shampooFontWeight,
  x2Position,
  x2FontSize,
  x2Color,
  x2TextAlign,
  x2FontWeight,
  checkboxButtonWidth,
  checkboxButtonPosition,
  checkboxButtonHeight,
  checkboxButtonFontFamily,
  rectangleDivPosition,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivBorderRadius,
  rectangleDivBorder,
  rectangleDivFontSize,
  rectangleDivFontFamily,
  rectangleDivColor,
  rectangleDivTextAlign,
  instructionsPleaseGetContFontSize,
  instructionsPleaseGetContFontWeight,
  instructionsPleaseGetContFontFamily,
  instructionsPleaseGetContTextAlign,
  instructionsPleaseGetContWidth,
  instructionsPleaseGetContHeight,
  instructionsColor,
  instructionsPosition,
  instructionsHeight,
  instructionsWidth,
  instructionsTop,
  instructionsRight,
  instructionsBottom,
  instructionsLeft,
  instructionsBorderRadius,
  instructionsBorder,
  spanColor,
  spanWidth,
  spanPosition,
  spanFontSize,
  spanFontWeight,
  spanFontFamily,
  spanTextAlign,
  pleaseGetConditionersColor,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const shampooStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: shampooFontFamily,
      color: shampooColor,
      fontWeight: shampooFontWeight,
    };
  }, [shampooFontFamily, shampooColor, shampooFontWeight]);

  const x2Style: CSSProperties = useMemo(() => {
    return {
      position: x2Position,
      fontSize: x2FontSize,
      color: x2Color,
      textAlign: x2TextAlign,
      fontWeight: x2FontWeight,
    };
  }, [x2Position, x2FontSize, x2Color, x2TextAlign, x2FontWeight]);

  const checkboxButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: checkboxButtonWidth,
      position: checkboxButtonPosition,
      height: checkboxButtonHeight,
      fontFamily: checkboxButtonFontFamily,
    };
  }, [
    checkboxButtonWidth,
    checkboxButtonPosition,
    checkboxButtonHeight,
    checkboxButtonFontFamily,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      position: rectangleDivPosition,
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      borderRadius: rectangleDivBorderRadius,
      border: rectangleDivBorder,
      fontSize: rectangleDivFontSize,
      fontFamily: rectangleDivFontFamily,
      color: rectangleDivColor,
      textAlign: rectangleDivTextAlign,
    };
  }, [
    rectangleDivPosition,
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivBorderRadius,
    rectangleDivBorder,
    rectangleDivFontSize,
    rectangleDivFontFamily,
    rectangleDivColor,
    rectangleDivTextAlign,
  ]);

  const instructionsPleaseGetContainerStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: instructionsPleaseGetContFontSize,
      fontWeight: instructionsPleaseGetContFontWeight,
      fontFamily: instructionsPleaseGetContFontFamily,
      textAlign: instructionsPleaseGetContTextAlign,
      width: instructionsPleaseGetContWidth,
      height: instructionsPleaseGetContHeight,
    };
  }, [
    instructionsPleaseGetContFontSize,
    instructionsPleaseGetContFontWeight,
    instructionsPleaseGetContFontFamily,
    instructionsPleaseGetContTextAlign,
    instructionsPleaseGetContWidth,
    instructionsPleaseGetContHeight,
  ]);

  const instructionsStyle: CSSProperties = useMemo(() => {
    return {
      color: instructionsColor,
      position: instructionsPosition,
      height: instructionsHeight,
      width: instructionsWidth,
      top: instructionsTop,
      right: instructionsRight,
      bottom: instructionsBottom,
      left: instructionsLeft,
      borderRadius: instructionsBorderRadius,
      border: instructionsBorder,
    };
  }, [
    instructionsColor,
    instructionsPosition,
    instructionsHeight,
    instructionsWidth,
    instructionsTop,
    instructionsRight,
    instructionsBottom,
    instructionsLeft,
    instructionsBorderRadius,
    instructionsBorder,
  ]);

  const spanStyle: CSSProperties = useMemo(() => {
    return {
      color: spanColor,
      width: spanWidth,
      position: spanPosition,
      fontSize: spanFontSize,
      fontWeight: spanFontWeight,
      fontFamily: spanFontFamily,
      textAlign: spanTextAlign,
    };
  }, [
    spanColor,
    spanWidth,
    spanPosition,
    spanFontSize,
    spanFontWeight,
    spanFontFamily,
    spanTextAlign,
  ]);

  const pleaseGetConditionersStyle: CSSProperties = useMemo(() => {
    return {
      color: pleaseGetConditionersColor,
    };
  }, [pleaseGetConditionersColor]);

  return (
    <div className="flex flex-col items-start justify-start gap-[12px] text-left text-xs text-text-text-dark1 font-text-description-text self-stretch">
      <div
        className="self-stretch flex flex-row items-center justify-between"
        style={frameDivStyle}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
          <div className="relative" style={shampooStyle}>
            {itemServiceName}
          </div>
          {quantity && (
            <div className="relative text-secondary-gray" style={x2Style}>
              {x2}
            </div>
          )}
        </div>
        {showCheckBox && (
          <div className="w-4 relative h-4" style={checkboxButtonStyle}>
            {showRectangleDiv && (
              <div
                className="absolute h-smaller1 w-smaller1 top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-default-color-primary"
                style={rectangleDivStyle}
              />
            )}
          </div>
        )}
      </div>
      {instruction2 && (
        <div
          className="relative font-medium text-default-color-primary"
          style={instructionsPleaseGetContainerStyle}
        >
          <span style={instructionsStyle}>{instructions}</span>
          {showSpan && (
            <span
              className="text-default-grey whitespace-pre-wrap"
              style={spanStyle}
            >
              {prop}
            </span>
          )}
          <span
            className="text-text-text-dark"
            style={pleaseGetConditionersStyle}
          >
            {pleaseGetConditioners}
          </span>
        </div>
      )}
    </div>
  );
};

export default Property1Supplies;
