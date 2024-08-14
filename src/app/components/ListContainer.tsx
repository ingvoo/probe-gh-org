"use client";

import React from "react";
import ListView from "./ListView";
import AppNotification from "./AppNotification";

type IOrganization = {
  id: number;
  login: string;
  description?: string;
  url?: string;
};

const endPoint = "https://api.github.com/organizations?per_page=5";

export default function ListingsContainerComponent() {
  const [data, setData] = React.useState<Array<IOrganization> | null>(null);
  const [hasError, setHasError] = React.useState(false);

  function loadMoreOrganizations() {
    if (!data) {
      return;
    }

    const id = data[data.length - 1].id;

    fetch(`${endPoint}&since=${id}`)
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("error");
      })
      .then((res) => {
        setData([...data, ...res]);
      })
      .catch((err) => {
        console.error("Error: ", err);
        setHasError(true);
      });
  }

  React.useEffect(() => {
    fetch(endPoint)
      .then((res) => {
        if (res.status === 200) return res.json();
        throw new Error("error");
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

  return (
    <>
      <ListView listings={data} />
      <footer className="mt-8 flex items-center justify-center">
        <button onClick={loadMoreOrganizations} className="border px-6 py-2">
          Load more
        </button>
      </footer>
    </>
  );
}
