import {useRef, useState} from "react";

function App() {
  const dataKosong = {
    judul: "",
    pengarang: "",
    cetakan: "",
    tahunTerbit: 0,
    kotaTerbit: "",
    harga: 0,
  };

  const [data, setData] = useState(dataKosong);
  const regex = /^[A-Za-z]*$/;
  const [errMsg, setErrMsg] = useState("");
  const fotoSampul = useRef(null);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "pengarang") {
      if (regex.test(value)) {
        setErrMsg("");
      } else {
        setErrMsg("Nama pengarang harus berupa huruf");
      }
    }

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errMsg !== "") {
      alert("ada data yang tidak sesuai");
    } else {
      alert(`Data buku ${data.judul} berhasil ditambahkan`);
    }
  };

  const resetData = () => {
    setData(dataKosong);
    setErrMsg("");
  };

  return (
    <>
      <h1 className="text-center">Formulir buku baru</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Judul:
          <input type="text" name="judul" required value={data.judul} onChange={handleInput} />
        </label>
        <label>
          Pengarang:
          <input
            type="text"
            name="pengarang"
            required
            value={data.pengarang}
            onChange={handleInput}
          />
        </label>
        <label>
          Cetakan:
          <input type="text" name="cetakan" value={data.cetakan} onChange={handleInput} />
        </label>
        <label>
          Tahun terbit:
          <input type="number" name="tahunTerbit" value={data.tahunTerbit} onChange={handleInput} />
        </label>
        <label>
          Kota terbit:
          <input type="text" name="kotaTerbit" value={data.kotaTerbit} onChange={handleInput} />
        </label>
        <label>
          Harga:
          <input type="number" name="harga" value={data.harga} onChange={handleInput} />
        </label>
        <label>
          Foto Sampul:
          <input type="file" name="fotoSampul" ref={fotoSampul} />
        </label>
        <span className="text-danger">{errMsg}</span> <br />
        <input type="submit" value="Submit" />
        <button onClick={resetData}>Reset</button>
      </form>
    </>
  );
}

export default App;
