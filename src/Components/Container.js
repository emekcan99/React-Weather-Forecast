import { WeatherForecast } from "./WeatherForecast";
import { useMainContext } from "../Context/MainContext";
import { Form1 } from "./Form";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { CurrentWeather } from "./CurrentWeather";

export const Container = () => {
  const { getWeeklyData, units } = useMainContext();
  useEffect(() => {
    getWeeklyData();
  }, [units]);



  return (
    <div>
      
      <Form1></Form1>
      
      <WeatherForecast></WeatherForecast>
      <CurrentWeather></CurrentWeather>
      
    </div>
  );
};
