import {Component} from "react";
import {v4 as uuidv4} from "uuid";
import ListPassenger from "./ListPassenger";
import PassenggerInput from "./PassengerInput";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  hapusPengunjung = (id) => {
    const newListPengunjung = this.state.data.filter((item) => item.id !== id);
    this.setState({data: newListPengunjung});
  };

  tambahPengunjung = (newUser) => {
    const newPengunjung = {id: uuidv4(), ...newUser};
    this.setState({data: [...this.state.data, newPengunjung]});
  };

  render() {
    return (
      <div>
        <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
        <PassenggerInput tambahPengunjung={this.tambahPengunjung} />;
      </div>
    );
  }
}

export default Home;
