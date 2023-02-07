import axios from "axios";
import React from "react";
import Search from "../Search/Search";
import BodyInfoCss from "./BodyInfo.module.css";

class BodyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      weather: null,
      city: "",
      apiKey: "7649406db017899420ebe249b61b4f7d",
      notFound: "город не найдет",
    };
  }

  ///////
  startRequest = async (e) => {
    e.preventDefault();
    try {
      const respons = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.search}&lang=ru&appid=${this.state.apiKey}`
      );
      const data = await respons.data;
      console.log(data);
      await this.setState({
        city: data.city.name,
        weather: data.list,
      });
    } catch {
      console.error("error");
      alert("Город не найден");
    }
    // .then((respons) => console.log(respons.data))
    // .catch((error) => console.error(error));
  };

  //////////////////////

  searchCity = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          className={BodyInfoCss.input_parent}
          placeholder="Введите город"
          onChange={this.searchCity}
        />
        <button className={BodyInfoCss.btn_parent} onClick={this.startRequest}>
          {" "}
          Поиск{" "}
        </button>
        <h1>Название города : {this.state.city}</h1>
        {this.state.weather
          ?.filter((item) => {
            if (
              item.dt_txt.includes("09:00") ||
              item.dt_txt.includes("12:00") ||
              item.dt_txt.includes("15:00") ||
              item.dt_txt.includes("18:00") ||
              item.dt_txt.includes("21:00")
            ) {
              return item;
            } else return false;
          })
          .map((item) => (
            <Search key={item.dt_txt} item={item} />
          ))}
      </div>
    );
  }
}

export default BodyInfo;
