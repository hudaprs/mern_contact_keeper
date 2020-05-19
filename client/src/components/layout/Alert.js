import React, { useContext, Fragment } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    <Fragment>
      {alerts.length > 0 &&
        alerts.map((alert) => (
          <div className={`alert alert-${alert.type}`} key={alert.id}>
            <em className="fas fa-info-circle"></em> {alert.message}
          </div>
        ))}
    </Fragment>
  );
};

export default Alert;
