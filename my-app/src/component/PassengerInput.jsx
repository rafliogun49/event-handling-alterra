import {useState} from "react";

function PassenggerInput(props) {
  const [data, setData] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
  });

  const [editing, setEditing] = useState(true);

  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = data.nama && data.umur && data.jenisKelamin;
    if (formIsNotEmpty) {
      const newData = {
        nama: data.nama,
        umur: data.umur,
        jenisKelamin: data.jenisKelamin,
      };

      props.tambahPengunjung(newData);
      setData({
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
      });
    } else {
      alert("data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setEditing(false);
  };

  const handleTutupInput = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div style={viewMode}>
        <p>Masukkan nama anda</p>
        <input
          type="text"
          placeholder="Nama anda..."
          value={data.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan umur anda</p>
        <input
          type="text"
          placeholder="Umur anda..."
          value={data.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Masukkan jenis jelamin anda</p>
        <select name="jenisKelamin" onChange={onChange}>
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput}>Selesai</button>
      </div>
      <div>
        <button onClick={handleBukaInput} style={editMode}>
          Masukkan nama Penumpang
        </button>
      </div>
    </div>
  );
}

export default PassenggerInput;
