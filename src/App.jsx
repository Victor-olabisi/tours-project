const url = "https://course-api.com/react-tours-project";
import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
     setIsLoading(true)
     try {
       const resp = await fetch(url);
       if (!resp.ok) {
         throw new Error("please check your url");
       }
       const data = await resp.json();
       // console.log(data);
       setTours(data);
       setIsLoading(false);
     } catch (error) {
       console.log(error);
     }
   };
  useEffect(() => {
   
    fetchTours();
  }, []);
  const deleteTour = (id) => {
     const newTours = tours.filter((tour) => {
        return tour.id !== id
    })
    return setTours(newTours)
    }
  if (isLoading) {
    return <Loading/>
  }

  return (
    <main>
      <section>
        <h1 className="title">tours</h1>
        <div className="title-underline"></div>
      </section>
      <Tours tours={tours} deleteTour={deleteTour} />
      {tours.length == 0 && (
        <main>
          <div className="title">
            <h2>no tour left </h2>
            <button
              className="btn"
              style={{ textAlign: "center" }}
              onClick={() => fetchTours()}
            >
              reset tours
            </button>
          </div>
        </main>
      )}
    </main>
  );
};
export default App;
