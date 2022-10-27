import { createContext,useState,useContext } from "react"
import { api_key, WeeklyUrl } from "../Api";
import axios from "axios";


const MainContext = createContext();

export const ContextProvider = ({children}) => {
    const [city, setCity] = useState("İstanbul");
    const [units, setUnits] = useState("M");
    const [weeklyData, setWeeklyData] = useState({})
    const [id, setId] = useState("")
    const [currData, setCurrdata] = useState({})
    const [loading,setLoading] = useState(false)


      const getWeeklyData = async () => {
      
        try {
          
          const { data } = await axios.get(
            `${WeeklyUrl}?units=${units}&key=${api_key}&city=${city}`
          );
  
          setWeeklyData(data.data);
          setLoading(true)

          console.log(data.data)
        } catch (error) {
          console.log(error.message);
        }
      };

    const values={
        city,
        setCity,
        units,
        getWeeklyData,
        setUnits,       
        setLoading,
        loading,
        weeklyData,
        setWeeklyData,
        id,
        setId,
        currData,
        setCurrdata
    };


    return <MainContext.Provider value={values}>{children}</MainContext.Provider>
};

export const useMainContext = () => useContext(MainContext)