import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="absolute-center font-large error__page">
      {JSON.stringify(error, null, 2)}
    </div>
  );
}

export default Error;
