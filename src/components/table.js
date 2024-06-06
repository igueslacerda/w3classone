export default function Table(props) {
  return (
    <table>
      <tr>
        <th>id</th>
        <th>Nome</th>
        <th>Letra</th>
      </tr>
      {props.items?.map((item, i) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.nome}</td>
          <td>{item.letra}</td>
        </tr>
      ))}
    </table>
  );
}
