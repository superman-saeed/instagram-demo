import React from "react";

const SearchGrid =(props)=>{

  return(
    <div className="photo-grid">
         <div className="g-photo"><div className="g-one"> 1</div></div>

         <div className="g-photo"><div className="g-one"> 2</div></div>

         <div className="g-photo"><div className="g-one"> 3</div></div>

         <div className="g-photo"><div className="g-one"> 4</div></div>

         <div className="g-photo db-grid">
            <div className="db-inner"><div>6</div></div>
            
            <div className="db-inner"><div>6</div></div>
        </div>


         <div className="g-photo"><div className="g-one"> 7</div></div>

         <div className="g-photo"><div className="g-one"> 8</div></div>

         <div className="g-photo"><div className="g-one"> 9</div></div>
    </div>
  )
}

export default SearchGrid;
