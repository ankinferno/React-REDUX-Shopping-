import React from 'react';

const SingleItem = ({data})=> (

 <div className="card" style={{width : "18rem" }} >
   <img src={data.url} className="card-img-top" alt=".."></img> 
   <div className="card-body">
    <p> className="card-title">{data.title}</p> 
  </div>
</div> 

)


           

export default SingleItem;