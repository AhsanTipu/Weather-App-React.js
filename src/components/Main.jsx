import React, {useEffect, useState} from 'react';
import "../css/Design.css";
import CloudIcon from '@material-ui/icons/Cloud';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Main=()=>{
const [temp,setTemp]=useState("23");
const [search,setSearch]=useState(null);

const setText=(e)=>{
setSearch(e.target.value)
}
useEffect(()=>{
    const fetchApi = async () => {
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=40f7bc586bc10a961e758f627788cd76`;
        const res=await fetch(url);
        // console.log(res)
        const rejs=await res.json();
        setTemp(rejs.main);
    }
    fetchApi();
},[search])
    return(
<div>
    <div>
<div className="div-center  ">
    
   <h3 className="top">WEATHER APP</h3>
<br />
<br />

<input type="text" placeholder="Search"
className="input"
onChange={setText}
/>
<br/>
<br/>
{!temp ? (
    <p className="nod">No data found</p>
):(
<div>

    <h1 className="heads"><CloudIcon className="animation w-icon" /> {search}</h1>
    <h1 className="heads">{temp.temp} <span className="coloris"> &deg;</span>C</h1>
    <h4 className="heads"> Max {temp.temp_max}<span className="coloris"> &deg;C</span> <span className="coloris">||</span> Min {temp.temp_min}<span className="coloris"> &deg;C</span></h4>
    <svg className="wave " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="animatio" fill="#0099ff" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,69.3C320,53,400,43,480,64C560,85,640,139,720,144C800,149,880,107,960,96C1040,85,1120,107,1200,149.3C1280,192,1360,256,1400,288L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

</div>

)}



</div>

</div>
</div>
    )
}

export default Main;