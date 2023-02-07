import React from "react";
import SearchCss from "./Search.module.css";

class Search extends React.Component {
  constructor({ props }) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={SearchCss.parentBlock}>
          <p className={SearchCss.dataInfo}>
            {this.props.item?.dt_txt.includes("09:00") &&
              "Дата : " + (this.props.item?.dt_txt).slice(0, 11)}
          </p>
          <div className={SearchCss.childBlock}>
            <div className={SearchCss.innerBlock}>
              <p className={SearchCss.timeInfo}>
                Время : {(this.props.item?.dt_txt).slice(11, 16)}
              </p>
              <p className={SearchCss.tempInfo}>
                Температура : {(this.props.item?.main?.temp - 273).toFixed(0)}
                &deg;C
              </p>
            </div>
            <p className={SearchCss.weatherInfo}>
              Погода : {this.props.item?.weather?.[0].description}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Search;
