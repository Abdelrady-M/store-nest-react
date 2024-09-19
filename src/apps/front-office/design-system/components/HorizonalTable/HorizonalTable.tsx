export type Column = {
  key: string;
  title: string;
};

export type TableProps = {
  columnsAside: Column[];

  data: {
    [key in Column["key"]]: any;
  }[];

  render?: {
    [key in Column["key"]]: (value: any) => JSX.Element;
  };
};

export default function HorizonalTable({
  columnsAside,
  data,
  render = {},
}: TableProps) {
  return (
    <table className="w-full border-spacing-2 border-gray-200 border my-10 flex flex-wrap">
      <tbody>
        {columnsAside.map((column, index) => (
          <tr
            key={index}
            className="flex flex-col md:table-row border-b-1 border-gray-200">
            <th className="text-left p-7">{column.title}</th>
            {data.map((item, index) => (
              <td key={`${column}-${index}`} className="p-4">
                {render[column.key]
                  ? render[column.key](item[column.key])
                  : item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
