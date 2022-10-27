import { useMainContext } from "../Context/MainContext";
import {
  BsFillDropletFill,
  BsWind,
  BsCompass,
  BsFillSunFill,
  BsCloudFill,
} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import { Card, CardBody, CardText } from "reactstrap";

export const CurrentWeather = () => {
  const { weeklyData, id, city, units } = useMainContext();

  const handleUnits = () => {
    if (units === "M") {
      return "m/s";
    } else if (units === "I") {
      return "mph";
    } else {
      return "m/s";
    }
  };

  return (
    <>
      {weeklyData && weeklyData.length ? (
        <Card className="CurrentCard">
          <CardBody>
            <CardText>
              {weeklyData[id]?.valid_date} / {city}
            </CardText>
            <CardText>
              relative humidity : {weeklyData[id]?.rh}%{" "}
              <BsFillDropletFill></BsFillDropletFill>
            </CardText>
            <CardText>
              wind speed : {weeklyData[id]?.wind_spd}-{handleUnits()}{" "}
              <BsWind></BsWind> &nbsp; &nbsp; &nbsp; wind direction :{" "}
              {weeklyData[id]?.wind_cdir_full} <BsCompass></BsCompass>
            </CardText>
            <CardText>
              uv : {weeklyData[id]?.uv} <BsFillSunFill></BsFillSunFill>&nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; clouds :{" "}
              {weeklyData[id]?.clouds}% &nbsp;<BsCloudFill></BsCloudFill>
            </CardText>
          </CardBody>
        </Card>
      ) : (
        <Card className="CurrentCard">loading...</Card>
      )}
    </>
  );
};
