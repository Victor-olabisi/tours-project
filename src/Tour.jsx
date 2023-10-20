import { useState } from "react";
const Tour = ({ id, name, info, image, deleteTour }) => {
    const [readmore, setReadmore] = useState(false)
    return (
      <article className="single-tour">
        <img src={image} alt={name} className="img" />
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {readmore ? info : `${info.substring(0,200)}...` }
                    <button className="info-btn btn" onClick={() => setReadmore(!readmore)}>{readmore? "show less" : 'readmore'}</button>
          </p>
          <button className="btn delete-btn btn-block" onClick={()=>{deleteTour(id)}}>not interested </button>
        </div>
      </article>
    );
};
export default Tour;
