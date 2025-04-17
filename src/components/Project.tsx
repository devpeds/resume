import { ReactElement, ReactNode } from "react";
import TitleWithPeriod from "./TitleWithPeriod";

interface Props {
  title: string;
  period: string;
  description?: string;
  children?: ReactNode;
}

function Project({
  title,
  period,
  description,
  children,
}: Props): ReactElement {
  return (
    <div className="project">
      <TitleWithPeriod title={title} period={period} />
      {Boolean(description) && <p className="subtitle">{description}</p>}
      {children}
    </div>
  );
}

export default Project;
