"use client";

import React from "react";
import ListView from "./ListView";

export default function ListingsContainerComponent() {
  const [data, setData] = React.useState(null);
  const [hasError, setHasError] = React.useState(false);
  const endPoint = "https://api.githubom/organizations?per_page=5";

  React.useEffect(() => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((res) => setData(res))
  }, []);


  return <ListView listings={data} />;
}
