import {useSelector, useDispatch} from "react-redux";
import {hapusPengunjung} from "../store/passenggerSlice";
import ListItem from "./ListItem";
const ListPassenger = (props) => {
  const passengers = useSelector((state) => state.pasengger.passengers);
  const dispatch = useDispatch();

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {passengers.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={() => {
              dispatch(hapusPengunjung);
            }}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
