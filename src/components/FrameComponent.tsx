import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Property1Supplies from "./Property1Supplies";

export type FrameComponentType = {
  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propColor,
  propColor1,
  propColor2,
  propColor3,
}) => {
  const instructionsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const pleaseGetConditionersStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const instructionsStyle1: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const pleaseGetConditionersStyle1: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  return (
    <div className="self-stretch bg-background-grey-light flex flex-col items-start justify-start p-3 gap-[12px] text-left text-xs text-default-color-primary-light font-button-button-text-secondary">
      <Property1Supplies
        itemServiceName="Shampoo"
        x2="x1"
        instructions="Instructions:"
        prop="  "
        pleaseGetConditioners="Please get conditioners."
        instruction2={false}
        showCheckBox={false}
        quantity
        showRectangleDiv
        showSpan
        frameDivGap="unset"
        shampooFontFamily="Montserrat"
        shampooColor="#1a0a03"
        shampooFontWeight="bold"
        x2Position="relative"
        x2FontSize="12px"
        x2Color="#5d5e60"
        x2TextAlign="left"
        x2FontWeight="unset"
        checkboxButtonWidth="16px"
        checkboxButtonPosition="relative"
        checkboxButtonHeight="16px"
        checkboxButtonFontFamily="unset"
        rectangleDivPosition="absolute"
        rectangleDivHeight="100%"
        rectangleDivWidth="100%"
        rectangleDivTop="0%"
        rectangleDivRight="0%"
        rectangleDivBottom="0%"
        rectangleDivLeft="0%"
        rectangleDivBorderRadius="2px"
        rectangleDivBorder="1px solid #dc5b19"
        rectangleDivFontSize="unset"
        rectangleDivFontFamily="unset"
        rectangleDivColor="unset"
        rectangleDivTextAlign="unset"
        instructionsPleaseGetContFontSize="12px"
        instructionsPleaseGetContFontWeight="500"
        instructionsPleaseGetContFontFamily="Montserrat"
        instructionsPleaseGetContTextAlign="left"
        instructionsPleaseGetContWidth="229px"
        instructionsPleaseGetContHeight="unset"
        instructionsColor="#dc5b19"
        instructionsPosition="unset"
        instructionsHeight="unset"
        instructionsWidth="unset"
        instructionsTop="unset"
        instructionsRight="unset"
        instructionsBottom="unset"
        instructionsLeft="unset"
        instructionsBorderRadius="unset"
        instructionsBorder="unset"
        spanColor="#b8b8b8"
        spanWidth="unset"
        spanPosition="unset"
        spanFontSize="unset"
        spanFontWeight="unset"
        spanFontFamily="unset"
        spanTextAlign="unset"
        pleaseGetConditionersColor="#1a0a03"
      />
      <Property1Supplies
        itemServiceName="Conditioner"
        x2="x2"
        instructions="Instructions:"
        prop="  "
        pleaseGetConditioners="Please get conditioners."
        instruction2
        showCheckBox={false}
        quantity
        showRectangleDiv
        showSpan
        frameDivGap="unset"
        shampooFontFamily="Montserrat"
        shampooColor="#1a0a03"
        shampooFontWeight="bold"
        x2Position="relative"
        x2FontSize="12px"
        x2Color="#5d5e60"
        x2TextAlign="left"
        x2FontWeight="unset"
        checkboxButtonWidth="16px"
        checkboxButtonPosition="relative"
        checkboxButtonHeight="16px"
        checkboxButtonFontFamily="unset"
        rectangleDivPosition="absolute"
        rectangleDivHeight="100%"
        rectangleDivWidth="100%"
        rectangleDivTop="0%"
        rectangleDivRight="0%"
        rectangleDivBottom="0%"
        rectangleDivLeft="0%"
        rectangleDivBorderRadius="2px"
        rectangleDivBorder="1px solid #dc5b19"
        rectangleDivFontSize="unset"
        rectangleDivFontFamily="unset"
        rectangleDivColor="unset"
        rectangleDivTextAlign="unset"
        instructionsPleaseGetContFontSize="12px"
        instructionsPleaseGetContFontWeight="500"
        instructionsPleaseGetContFontFamily="Montserrat"
        instructionsPleaseGetContTextAlign="left"
        instructionsPleaseGetContWidth="unset"
        instructionsPleaseGetContHeight="unset"
        instructionsColor="#5f69c7"
        instructionsPosition="unset"
        instructionsHeight="unset"
        instructionsWidth="unset"
        instructionsTop="unset"
        instructionsRight="unset"
        instructionsBottom="unset"
        instructionsLeft="unset"
        instructionsBorderRadius="unset"
        instructionsBorder="unset"
        spanColor="#b8b8b8"
        spanWidth="unset"
        spanPosition="unset"
        spanFontSize="unset"
        spanFontWeight="unset"
        spanFontFamily="unset"
        spanTextAlign="unset"
        pleaseGetConditionersColor="#5f69c7"
      />
      <Property1Supplies
        itemServiceName="Towel"
        x2="x2"
        instructions="Instructions:"
        prop="  "
        pleaseGetConditioners="Please get conditioners."
        instruction2={false}
        showCheckBox={false}
        quantity
        showRectangleDiv
        showSpan
        frameDivGap="unset"
        shampooFontFamily="Montserrat"
        shampooColor="#1a0a03"
        shampooFontWeight="bold"
        x2Position="relative"
        x2FontSize="12px"
        x2Color="#5d5e60"
        x2TextAlign="left"
        x2FontWeight="unset"
        checkboxButtonWidth="16px"
        checkboxButtonPosition="relative"
        checkboxButtonHeight="16px"
        checkboxButtonFontFamily="unset"
        rectangleDivPosition="absolute"
        rectangleDivHeight="100%"
        rectangleDivWidth="100%"
        rectangleDivTop="0%"
        rectangleDivRight="0%"
        rectangleDivBottom="0%"
        rectangleDivLeft="0%"
        rectangleDivBorderRadius="2px"
        rectangleDivBorder="1px solid #dc5b19"
        rectangleDivFontSize="unset"
        rectangleDivFontFamily="unset"
        rectangleDivColor="unset"
        rectangleDivTextAlign="unset"
        instructionsPleaseGetContFontSize="12px"
        instructionsPleaseGetContFontWeight="500"
        instructionsPleaseGetContFontFamily="Montserrat"
        instructionsPleaseGetContTextAlign="left"
        instructionsPleaseGetContWidth="229px"
        instructionsPleaseGetContHeight="unset"
        instructionsColor="#dc5b19"
        instructionsPosition="unset"
        instructionsHeight="unset"
        instructionsWidth="unset"
        instructionsTop="unset"
        instructionsRight="unset"
        instructionsBottom="unset"
        instructionsLeft="unset"
        instructionsBorderRadius="unset"
        instructionsBorder="unset"
        spanColor="#b8b8b8"
        spanWidth="unset"
        spanPosition="unset"
        spanFontSize="unset"
        spanFontWeight="unset"
        spanFontFamily="unset"
        spanTextAlign="unset"
        pleaseGetConditionersColor="#1a0a03"
      />
      <div className="w-[295px] rounded-regular bg-default-color-primary hidden flex-row items-center justify-center py-regular px-mediium box-border gap-[8px]">
        <img className="w-small3 relative h-small3" alt="" src="/guc1538.svg" />
        <div className="relative font-medium">Accept Task</div>
      </div>
    </div>
  );
};

export default FrameComponent;
