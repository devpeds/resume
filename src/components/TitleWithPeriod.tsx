import { ReactElement } from "react";

interface Props {
  title: string;
  period: string;
}

function TitleWithPeriod({ title, period }: Props): ReactElement {
  return (
    <div className="title-with-period">
      <h4>{title}</h4>
      <span className="subtitle">{period}</span>
    </div>
  );
}

export default TitleWithPeriod;
