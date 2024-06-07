export default function Table(props) {
  return (
    <table>
      <tr>
        {props.colunas.lenght !== 0 &&
          props.colunas.map((col) => <th>{col.titulo}</th>)}
      </tr>
      {props.items?.map((item, i) => (
        <tr>
          {props.colunas.lenght === 0 ? (
            <td></td>
          ) : (
            props.colunas.map((col) => <td>{item[col.propriedade]}</td>)
          )}
        </tr>
      ))}
    </table>
  );
}
