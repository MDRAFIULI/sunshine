import React from 'react';
import { useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {name,img, id} = service;
    const navigate = useNavigate()
    const handlePuchase=(id)=>{
navigate(`/service/:${id}`)
    }
    return (
    //     <div class="card w-96 bg-base-100 shadow-xl">
    //     <figure><img src={img} alt="Shoes" /></figure>
    //     <div class="card-body">
    //       <h2 class="card-title">
    //         {name}
    //         <div class="badge badge-secondary">NEW</div>
    //       </h2>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div class="card-actions justify-end">
    //         <div class="badge badge-outline">Fashion</div> 
    //         <div class="badge badge-outline">Products</div>
    //       </div>
    //     </div>
    //   </div>
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
      {name}
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <div class="card-actions justify-end">
        <button onClick={()=>handlePuchase(id)}><div class="badge badge-outline">Purchase</div></button>
      </div>
    </div>
  </div>
    );
};

export default Service;