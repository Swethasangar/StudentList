import { createContext } from "react";
import { useState } from "react";
const Stulistcontext = createContext();
const Slistcontext = (data) => {
  const [favli, setfavli] = useState([]);
  const [stlist, setstlist] = useState([
    "Sienna",
    "Henry",
    "Adalyn",
    "Joseph",
    "Janet",
  ]);
  return <Stulistcontext.Provider value={{stlist,favli,setfavli}}>{data.children}</Stulistcontext.Provider>;
};
export default Slistcontext;
export { Stulistcontext };
