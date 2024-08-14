"use client";

import React from "react";
import ListView from "./ListView";
import AppNotification from "./AppNotification";

export default function ListingsContainerComponent() {
  const [data, setData] = React.useState(null);
  const [hasError, setHasError] = React.useState(false);
  const endPoint = "https://api.github.com/organizations?per_page=5";

  React.useEffect(() => {
    fetch(endPoint)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("error");
        }
      })
      .then((res) => setData(res))
      .catch((err) => {
        console.error("Error: ", err);
        setHasError(true);
      });
  }, []);

  if (hasError) {
    return (
      <AppNotification
        type="warning"
        message="Server not available. Please try again later"
      />
    );
  }

  // TODO: add a loader while waiting
  if (!data) {
    return <AppNotification message="Did not find any Organisations" />;
  }

  return <ListView listings={data} />;
}
