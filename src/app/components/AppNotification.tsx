type AppNotificationProps = {
  message: string;
  type?: "error" | "warning";
};

const AppNotification = ({ message, type }: AppNotificationProps) => {
  return (
    <aside className={"p-4 bg-red-50 border border-red-200"}>
      <h2>
        {/* TODO: type template condition needs refactoring for multiple notification types */}
        <span>{type === "warning" ? "😬" : "🤷‍♂️"}</span>
        <span>{message}</span>
      </h2>
    </aside>
  );
};

export default AppNotification;
