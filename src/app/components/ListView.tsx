type ListItem = {
  id: number;
  login: string;
  url?: string;
  description?: string;
};

type ListViewProps = {
  listings: Array<ListItem>;
};

const ListView = ({ listings }: ListViewProps) => {
  return (
    <ul>
      {listings.map((item) => (
        <li className="border-t" key={item.id}>
          <a className="flex justify-between gap-4 py-4" href={item.url}>
            <span className="font-bold text-lg">
              {item.login} <small>({item.id})</small>
            </span>
            <span>
              {item.description
                ? item.description
                : "Description not available"}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
