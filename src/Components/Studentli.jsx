import { useContext } from "react";
import { useState } from "react";
import { Stulistcontext } from "./Context";
function Stulist() {
  const { stlist, favli, setfavli } = useContext(Stulistcontext);
  const [click, setclick] = useState(false);
  const addfavli = (stlist) => {
    if (!favli.includes(stlist)) {
      setfavli([...favli, stlist]);
      setclick(false);
      setclick(true);
    }
  };
  return (
    <section className="bg-slate-200 border rounded-md m-4 container">
      <div className="ml-5 list mt-2">
        {stlist.map((slist, index) => {
          return (
            <p>
              {index + 1}.{slist}
              <button
                className="mr-4 p-1 m-2 bg-black rounded-md text-white"
                onClick={() => addfavli(slist)}
                disabled={favli.includes(slist)} 
              >
                Add Favourites
              </button>
            </p>
          );
        })}
      </div>
    </section>
  );
}
export default Stulist;
