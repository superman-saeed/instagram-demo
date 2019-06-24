import React from "react";


const style={
  objectFit:"cover",
  width:"inherit",
  height:"inherit"
};

const SearchGrid =(props)=>{
const {json} = props;
console.log(["SearchGrid",json]);
  return(
    <div className="photo-grid">
         <div className="g-photo">
           <div className="g-one">
              <img style={style} src={json[0].urls.small} alt="random" />
           </div>
         </div>

         <div className="g-photo">
           <div className="g-one">
              <img style={style} src={json[1].urls.small} alt="random" />
           </div>
         </div>

         <div className="g-photo">
           <div className="g-one">
              <img style={style} src={json[2].urls.small} alt="random" />
           </div>
         </div>

         <div className="g-photo">
           <div className="g-one">
              <img style={style} src={json[3].user.profile_image.large} alt="random" />
           </div>
         </div>

         <div className="g-photo db-grid">
            <div className="db-inner">
                <div> <img style={style} src={json[4].urls.small} alt="random" /> </div>
            </div>

            <div className="db-inner">
                <div><img style={style} src={json[5].urls.small} alt="random" /></div>
            </div>
        </div>


        <div className="g-photo">
          <div className="g-one">
             <img style={style} src={json[6].urls.small} alt="random" />
          </div>
        </div>

        <div className="g-photo">
          <div className="g-one">
             <img style={style} src={json[7].urls.small} alt="random" />
          </div>
        </div>

        <div className="g-photo">
          <div className="g-one">
             <img style={style} src={json[8].urls.small} alt="random" />
          </div>
        </div>
    </div>
  )
}

export default SearchGrid;
