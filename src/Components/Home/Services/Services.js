import React from 'react';
import eight from '../../../img/Services/Class 8 batch.png';
import nineTen from '../../../img/Services/Class 9-10 batch.png';
import elevenTweleve from '../../../img/Services/Class 11-12 batch.png';
import university from '../../../img/Services/University admition.png';
import Service from './Service';



{/* <a href="https://ibb.co/cwtCJ2w"><img src="https://i.ibb.co/xYGfhzY/Class-8-batch.png" alt="Class-8-batch" border="0"></a>
<a href="https://ibb.co/THwB5gW"><img src="https://i.ibb.co/8jmDV7Y/Class-9-10-batch.png" alt="Class-9-10-batch" border="0"></a>
<a href="https://ibb.co/dfvGc7m"><img src="https://i.ibb.co/x2bJs3F/Class-11-12-batch.png" alt="Class-11-12-batch" border="0"></a>
<a href="https://ibb.co/gPxWSQX"><img src="https://i.ibb.co/rcVpxqL/University-admition.png" alt="University-admition" border="0"></a> */}
const services = [
    {name: "Class 8 batch", img:"https://i.ibb.co/xYGfhzY/Class-8-batch.png", id: 1 },
    {name: "Class 8 batch", img: "https://i.ibb.co/8jmDV7Y/Class-9-10-batch.png", id: 2},
    {name: "Class 8 batch", img: "https://i.ibb.co/x2bJs3F/Class-11-12-batch.png", id: 3 },
    {name: "Class 8 batch", img: "https://i.ibb.co/rcVpxqL/University-admition.png", id: 4}
]
const Services = () => {
    
    return (
        <div className='grid grid-cols-2 gap-4 ml-40 gap-y-24'>
            {services.map(service=><Service service={service}></Service>)}
                          
        </div>
    );
};

export default Services;