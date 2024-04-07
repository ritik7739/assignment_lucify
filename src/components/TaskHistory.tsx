import { FunctionComponent } from "react";
import Property11StarDeviceDesk from "./Property11StarDeviceDesk";
import Property1Supplies from "./Property1Supplies";

export type TaskHistoryType = {
  quantity?: boolean;
  showCheckBox?: boolean;
  showRectangleDiv?: boolean;
  instruction2?: boolean;
  showSpan?: boolean;
};

const TaskHistory: FunctionComponent<TaskHistoryType> = ({
  quantity,
  showCheckBox,
  showRectangleDiv,
  instruction2,
  showSpan,
}) => {
  return (
    <div className="w-[361px] rounded-regular3 bg-background-background-primary box-border flex flex-col items-start justify-start p-2 gap-[12px] text-left text-xs text-text-text-dark font-button-button-text-secondary border-[0.5px] border-solid border-default-grey">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="rounded bg-background-grey-light flex flex-row items-center justify-start py-0.5 px-1 gap-[5px]">
            <img
              className="w-smaller5 relative rounded-sm h-smaller5 overflow-hidden shrink-0"
              alt=""
              src="/guc1539.svg"
            />
            <div className="relative font-semibold">Rajesh</div>
            <div className="w-2 relative rounded-[50%] bg-accent-danger-accent h-2" />
          </div>
          <div className="rounded bg-background-grey-light h-5 hidden flex-row items-center justify-center py-0.5 px-1 box-border">
            <div className="relative font-medium">Scheduled</div>
          </div>
          <div className="rounded-xl bg-accent-accent-success flex flex-row items-center justify-center py-small5 px-regular text-background-background-primary font-text-description-text">
            <div className="relative font-medium">On - Time</div>
          </div>
          <div className="rounded-xl bg-accent-danger-accent flex flex-row items-center justify-center p-1 text-background-background-primary font-text-description-text">
            <div className="relative font-medium">Complaint</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start">
          <Property11StarDeviceDesk
            prop="5"
            property11StarDeviceDeskBackgroundColor="#00a441"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
        <div className="flex-1 relative font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
          Routine Cleaning
        </div>
        <div className="rounded-xl bg-background-grey-light flex flex-row items-center justify-center py-small5 px-regular text-default-color-primary font-text-description-text">
          <div className="relative font-medium">Guest Task</div>
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
      <div className="w-[319px] bg-background-grey-light hidden flex-col items-start justify-start p-3 box-border gap-[12px] text-default-color-primary-light">
        <Property1Supplies
          x2="Step 1:"
          pleaseGetConditioners="Instructions:"
          instruction2={false}
          showCheckBox
          quantity
          showRectangleDiv={false}
          showSpan={false}
          frameDivGap="13px"
          shampooFontFamily="unset"
          shampooColor="#1a0a03"
          shampooFontWeight="unset"
          x2Position="unset"
          x2FontSize="unset"
          x2Color="unset"
          x2TextAlign="unset"
          x2FontWeight="bold"
          checkboxButtonWidth="unset"
          checkboxButtonPosition="unset"
          checkboxButtonHeight="unset"
          checkboxButtonFontFamily="Montserrat"
          rectangleDivPosition="relative"
          rectangleDivHeight="unset"
          rectangleDivWidth="14px"
          rectangleDivTop="unset"
          rectangleDivRight="unset"
          rectangleDivBottom="unset"
          rectangleDivLeft="unset"
          rectangleDivBorderRadius="unset"
          rectangleDivBorder="unset"
          rectangleDivFontSize="12px"
          rectangleDivFontFamily="Montserrat"
          rectangleDivColor="#5d5e60"
          rectangleDivTextAlign="left"
          instructionsPleaseGetContFontSize="unset"
          instructionsPleaseGetContFontWeight="unset"
          instructionsPleaseGetContFontFamily="unset"
          instructionsPleaseGetContTextAlign="unset"
          instructionsPleaseGetContWidth="16px"
          instructionsPleaseGetContHeight="16px"
          instructionsColor="unset"
          instructionsPosition="absolute"
          instructionsHeight="100%"
          instructionsWidth="100%"
          instructionsTop="0%"
          instructionsRight="0%"
          instructionsBottom="0%"
          instructionsLeft="0%"
          instructionsBorderRadius="2px"
          instructionsBorder="1px solid #dc5b19"
          spanColor="unset"
          spanWidth="229px"
          spanPosition="relative"
          spanFontSize="12px"
          spanFontWeight="500"
          spanFontFamily="Montserrat"
          spanTextAlign="left"
          pleaseGetConditionersColor="#dc5b19"
        />
        <Property1Supplies
          x2="Step2:"
          pleaseGetConditioners="Instructions:"
          instruction2={false}
          showCheckBox
          quantity
          showRectangleDiv={false}
          showSpan
          frameDivGap="13px"
          shampooFontFamily="unset"
          shampooColor="#1a0a03"
          shampooFontWeight="unset"
          x2Position="unset"
          x2FontSize="unset"
          x2Color="unset"
          x2TextAlign="unset"
          x2FontWeight="bold"
          checkboxButtonWidth="unset"
          checkboxButtonPosition="unset"
          checkboxButtonHeight="unset"
          checkboxButtonFontFamily="Montserrat"
          rectangleDivPosition="relative"
          rectangleDivHeight="unset"
          rectangleDivWidth="14px"
          rectangleDivTop="unset"
          rectangleDivRight="unset"
          rectangleDivBottom="unset"
          rectangleDivLeft="unset"
          rectangleDivBorderRadius="unset"
          rectangleDivBorder="unset"
          rectangleDivFontSize="12px"
          rectangleDivFontFamily="Montserrat"
          rectangleDivColor="#5d5e60"
          rectangleDivTextAlign="left"
          instructionsPleaseGetContFontSize="unset"
          instructionsPleaseGetContFontWeight="unset"
          instructionsPleaseGetContFontFamily="unset"
          instructionsPleaseGetContTextAlign="unset"
          instructionsPleaseGetContWidth="16px"
          instructionsPleaseGetContHeight="16px"
          instructionsColor="unset"
          instructionsPosition="absolute"
          instructionsHeight="100%"
          instructionsWidth="100%"
          instructionsTop="0%"
          instructionsRight="0%"
          instructionsBottom="0%"
          instructionsLeft="0%"
          instructionsBorderRadius="2px"
          instructionsBorder="1px solid #dc5b19"
          spanColor="unset"
          spanWidth="unset"
          spanPosition="relative"
          spanFontSize="12px"
          spanFontWeight="500"
          spanFontFamily="Montserrat"
          spanTextAlign="left"
          pleaseGetConditionersColor="#dc5b19"
        />
        <Property1Supplies
          x2="Step 3:"
          pleaseGetConditioners="Instructions:"
          instruction2={false}
          showCheckBox
          quantity
          showRectangleDiv={false}
          showSpan={false}
          frameDivGap="13px"
          shampooFontFamily="unset"
          shampooColor="#1a0a03"
          shampooFontWeight="unset"
          x2Position="unset"
          x2FontSize="unset"
          x2Color="unset"
          x2TextAlign="unset"
          x2FontWeight="bold"
          checkboxButtonWidth="unset"
          checkboxButtonPosition="unset"
          checkboxButtonHeight="unset"
          checkboxButtonFontFamily="Montserrat"
          rectangleDivPosition="relative"
          rectangleDivHeight="unset"
          rectangleDivWidth="14px"
          rectangleDivTop="unset"
          rectangleDivRight="unset"
          rectangleDivBottom="unset"
          rectangleDivLeft="unset"
          rectangleDivBorderRadius="unset"
          rectangleDivBorder="unset"
          rectangleDivFontSize="12px"
          rectangleDivFontFamily="Montserrat"
          rectangleDivColor="#5d5e60"
          rectangleDivTextAlign="left"
          instructionsPleaseGetContFontSize="unset"
          instructionsPleaseGetContFontWeight="unset"
          instructionsPleaseGetContFontFamily="unset"
          instructionsPleaseGetContTextAlign="unset"
          instructionsPleaseGetContWidth="16px"
          instructionsPleaseGetContHeight="16px"
          instructionsColor="unset"
          instructionsPosition="absolute"
          instructionsHeight="100%"
          instructionsWidth="100%"
          instructionsTop="0%"
          instructionsRight="0%"
          instructionsBottom="0%"
          instructionsLeft="0%"
          instructionsBorderRadius="2px"
          instructionsBorder="1px solid #dc5b19"
          spanColor="unset"
          spanWidth="229px"
          spanPosition="relative"
          spanFontSize="12px"
          spanFontWeight="500"
          spanFontFamily="Montserrat"
          spanTextAlign="left"
          pleaseGetConditionersColor="#dc5b19"
        />
        <div className="w-[295px] rounded-regular1 bg-default-color-primary hidden flex-row items-center justify-center py-regular1 px-mediium1 box-border gap-[8px]">
          <img
            className="w-small3 relative h-small3"
            alt=""
            src="/guc1538.svg"
          />
          <div className="relative font-medium">Accept Task</div>
        </div>
      </div>
      <div className="w-[319px] rounded-regular bg-default-color-primary hidden flex-row items-center justify-center py-regular px-mediium box-border gap-[8px] text-default-color-primary-light">
        <img className="w-small3 relative h-small3" alt="" src="/guc1538.svg" />
        <div className="relative font-medium">Notify Staff</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-royalblue">
        <div className="flex-1 rounded-small4 flex flex-row items-center justify-center py-regular px-mediium border-[1px] border-solid border-royalblue">
          <div className="relative font-medium">View Details</div>
        </div>
      </div>
    </div>
  );
};

export default TaskHistory;
