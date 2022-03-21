import ListItem from "./ListItem";

const ListPassenger = (props) => {
  const {data, hapusPengunjung} = props;

  return (
    <div>
      <table>
        <thead>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
        </thead>
        <tbody>
          {data.map((passenger) => (
            <ListItem key={passenger.id} item={passenger} hapusPengunjung={hapusPengunjung} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
