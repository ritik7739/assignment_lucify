/**
 * The CardContainer component renders multiple child components with specific props for a user
 * interface in a TypeScript React application.
 * @returns The CardContainer component is being returned. It is a functional component that renders a
 * div containing several child components such as Property1InternalTaskDevi, TaskHistory, and
 * Property1NoComplaintAndFe with specific props passed to them.
 */
import { FunctionComponent } from "react";
import Property1InternalTaskDevi from "./Property1InternalTaskDevi";
import TaskHistory from "./TaskHistory";
import Property1NoComplaintAndFe from "./Property1NoComplaintAndFe";

const CardContainer: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[24px] text-left text-xs text-text-text-dark font-button-button-text-secondary">
      <Property1InternalTaskDevi
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
      <TaskHistory
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
      <TaskHistory
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
      <Property1NoComplaintAndFe />
      <Property1InternalTaskDevi
        quantity
        showCheckBox
        showRectangleDiv={false}
        instruction2={false}
        showSpan={false}
      />
    </div>
  );
};

export default CardContainer;
