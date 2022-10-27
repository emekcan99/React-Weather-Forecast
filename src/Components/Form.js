
import { useMainContext } from "../Context/MainContext";
import {Button, Input,Form} from "reactstrap"
import "./Main.css";

export const Form1 = () => {
  const {  setCity, setUnits,getWeeklyData,setLoading } =
    useMainContext();

 

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log("girmedim")
    
    getWeeklyData()
    
      
    console.log("girdim")
    setLoading(true)
    
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="CityForm">
        
        <label htmlFor="city">Please enter a city name</label>
        <br></br>
        <Input
          bsSize="sm"
          name="city"
          id="city"
          className="InputText"
          onChange={(e) => setCity(e.target.value)}
        ></Input>
        

        <label htmlFor="units">Please select a unit</label>
        
        <select name="units" onChange={(e) => setUnits(e.target.value)}>
          <option value="M" name="M">
            Metric (Celsius, m/s, mm)
          </option>
          <option value="S" name="S">
            Scientific (Kelvin, m/s, mm)
          </option>
          <option value="I" name="I">
            Fahrenheit (F, mph, in)
          </option>
        </select>
        <br></br>
        <br></br>
        <Button outline color="success" type="submit" >search</Button>{' '}
        
      </Form>
    </div>
  );
};
