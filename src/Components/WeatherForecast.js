import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { useMainContext } from "../Context/MainContext";

import "./Main.css";

export const WeatherForecast = () => {
  const { weeklyData, loading, units,setId } = useMainContext();

  const handleUnits = () => {
    if (units === "M") {
      return "C°";
    } else if (units === "I") {
      return "F°";
    } else {
      return "K°";
    }
  };



  return (
    <div>
      
      {loading ? (
        
        <div className="cards">
          {weeklyData.map((data, i) => (
            
            <Card key={i} className="card">
              <CardTitle tag="h5">{data.datetime}</CardTitle>
              <CardBody>
                <CardSubtitle className="mb-2 text-muted">
                  {data.weather.description}
                </CardSubtitle>

                <CardImg
                  src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}
                  alt="icon"
                  top
                  className="card_image"
                ></CardImg>
                  
                <CardText>
                  {data.min_temp}
                  {handleUnits()} {data.max_temp} {handleUnits()}
                </CardText>
                <Button outline color="info" onClick={()=>setId(i)}>info</Button>{' '}
              </CardBody>
            </Card>
          ))}</div>
          
        
        
      ) : null}
    </div>
  );
};
