import { FunctionComponent } from "react";
import Property1UnselectDevicede from "../components/Property1UnselectDevicede";
import Property1NotAcceptedPrope from "../components/Property1NotAcceptedPrope";
import Property1NotAcceptedDelaye from "../components/Property1NotAcceptedDelaye";
import Property1OngoingProperty from "../components/Property1OngoingProperty";
import Property1NotAcceptedPrope1 from "../components/Property1NotAcceptedPrope1";
import Property1RecurringTaskDev from "../components/Property1RecurringTaskDev";
import Scheduled from "../components/Scheduled";
import CardContainer from "../components/CardContainer";

const Frame: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-center gap-[24px] text-left text-5xl text-text-text-dark font-button-button-text-secondary">
      <div className="w-[1128px] rounded-smaller5 bg-default-color-primary-light box-border hidden flex-row items-center justify-start py-device-padding px-8 gap-[40px] border-[1px] border-solid border-default-grey">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="relative font-semibold">Welcome!</div>
          <div className="relative text-[20px] whitespace-pre-wrap">{`Checkout What’s goin on!  `}</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[32px] text-default-color-primary">
          <div className="w-[212px] rounded-big bg-background-grey-light box-border flex flex-col items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-default-grey">
            <div className="relative font-semibold">₹ 1,85,000</div>
            <div className="relative text-base font-semibold text-text-text-dark-secondary">
              Housekeeping revenue
            </div>
          </div>
          <div className="w-[212px] rounded-big bg-background-grey-light box-border flex flex-col items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-default-grey">
            <div className="relative font-semibold">30 sec</div>
            <div className="relative text-base font-semibold text-text-text-dark-secondary">
              Avg Response Time
            </div>
          </div>
          <div className="w-[212px] rounded-big bg-background-grey-light box-border flex flex-col items-center justify-start p-4 gap-[16px] border-[1px] border-solid border-default-grey">
            <div className="relative font-semibold">93%</div>
            <div className="relative text-base font-semibold text-text-text-dark-secondary">
              Task Completion Rate
            </div>
          </div>
        </div>
        <img
          className="w-normal1 relative h-normal1 overflow-hidden shrink-0"
          alt=""
          src="/globalicon.svg"
        />
      </div>
      <div className="w-[1128px] flex flex-row items-center justify-start">
        <div className="relative font-semibold">Tasks of the day</div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[8px]">
        <Property1UnselectDevicede tagName="Not Accepted" />
        <Property1UnselectDevicede tagName="Ongoing" />
        <Property1UnselectDevicede tagName="Scheduled" />
        <Property1UnselectDevicede tagName="Completed" />
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Property1UnselectDevicede tagName="Delayed" />
          <Property1UnselectDevicede tagName="Ontime" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <Property1NotAcceptedPrope
            gUC153="/guc1538.svg"
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Property1NotAcceptedDelaye
            gUC153="/guc1538.svg"
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Property1OngoingProperty
            gUC153="/guc1538.svg"
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Property1NotAcceptedPrope1
            instructionsColor="#dc5b19"
            pleaseGetConditionersColor="#1a0a03"
            instructionsColor1="#dc5b19"
            pleaseGetConditionersColor1="#1a0a03"
            quantity
            showCheckBox={false}
            showRectangleDiv
            instruction2={false}
            showSpan
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <Property1RecurringTaskDev
            gUC153="/guc15313.svg"
            gUC1531="/guc15313.svg"
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Scheduled
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Property1RecurringTaskDev
            gUC153="/guc15313.svg"
            gUC1531="/guc15313.svg"
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Property1RecurringTaskDev
            gUC153="/guc15313.svg"
            gUC1531="/guc15313.svg"
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
          <Scheduled
            quantity
            showCheckBox
            showRectangleDiv={false}
            instruction2={false}
            showSpan={false}
          />
        </div>
        <CardContainer />
      </div>
    </div>
  );
};

export default Frame;
