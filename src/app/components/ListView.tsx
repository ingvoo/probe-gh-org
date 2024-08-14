// TODO: add types for list item

const ListView = (props: any) => {
  return (
    <ul>
      {props.listings.map((item: any) => (
        <li className="py-4 border-t flex justify-between gap-4" key={item.id}>
          <span className="font-bold text-lg">{item.login}</span>
          <span>
            {item.description ? item.description : "Description not avaialable"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
