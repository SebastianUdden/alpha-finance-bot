import { useState } from "react";
import styled from "styled-components";
import Alert from "../../molecules/alert/Alert";
import Banner from "../../molecules/banner/Banner";

export interface AlertsProps {
  title: string;
  alerts: string[];
}

const Alerts = ({ title, alerts }: AlertsProps) => {
  const [showAll, setShowAll] = useState(false);
  const showAlerts = showAll ? alerts : alerts.slice(0, 3);
  return alerts.length > 0 ? (
    <Wrapper>
      {alerts.length > 3 && (
        <Banner
          title={title}
          onClick={() => setShowAll(!showAll)}
          buttonText={showAll ? "Hide alerts" : "Show all"}
        />
      )}
      {showAlerts && (
        <List>
          {showAlerts.map((alert) => (
            <Alert text={alert} />
          ))}
        </List>
      )}
    </Wrapper>
  ) : null;
};

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.elevatedBackground};
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export default Alerts;
