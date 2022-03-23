import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import ListPassenger from "./ListPassenger";
import PassenggerInput from "./PassengerInput";

const initialValue = [
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Yogi",
    umur: 23,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Yogu",
    umur: 26,
    jenisKelamin: "Wanita",
  },
];

function Home() {
  const [data, setData] = useState(initialValue);

  const hapusPengunjung = (id) => {
    setData((oldData) => {
      return oldData.filter((item) => item.id !== id);
    });
  };

  const tambahPengunjung = (newUser) => {
    const newData = {id: uuidv4(), ...newUser};
    setData((oldData) => [...oldData, newData]);
  };

  return (
    <div>
      <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
      <PassenggerInput tambahPengunjung={tambahPengunjung} />;
    </div>
  );
}

export default Home;
