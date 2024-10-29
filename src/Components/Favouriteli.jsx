import { useContext } from "react";
import { Stulistcontext } from "./Context";
function Favlist() {
  const { stlist, favli, setfavli } = useContext(Stulistcontext);
  const remove = (stlist) => {
    setfavli(favli.filter((fav) => fav !== stlist));
  };
  return (
    <section>
      <div className="ml-4">
        {favli.map((flist, index) => {
          return (
            <p>
              {index + 1}.{flist}
              <button
                onClick={() => remove(flist)}
                className="mr-4 p-1 m-2 bg-black rounded-md text-white ml-32"
              >
                Remove
              </button>
            </p>
          );
        })}
      </div>
    </section>
  );
}
export default Favlist;
