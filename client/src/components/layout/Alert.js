import React, { useContext, Fragment } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return (
    <Fragment>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`} key={alert.id}>
          <em className="fas fa-info-circle"></em> {alert.message}
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
