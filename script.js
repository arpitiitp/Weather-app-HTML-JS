const button =document.getElementById("button-input")
// const city=document.getElementById("city-input");
const countryname=document.getElementById("country");
const time=document.getElementById("time");
const temp=document.getElementById("temprature");

async function getdetail(lat,lon){
    // let data;
   try {
    const data=await fetch(`http://api.weatherapi.com/v1/current.json?key=8fd24445f7f94622a0d140625241910&q=${lat},${lon}&aqi=yes`);
    return await data.json();
   } catch (error) {
     console.log(error);
     return await error.json();
   }
    
}

async function gotlocation(position){
  const data= await getdetail(position.coords.latitude,position.coords.longitude);
   console.log(data);
   countryname.innerText=`${data.location.name}, ${data.location.country}`
   time.innerText=`${data.location.localtime}`;
   temp.innerText=`${data.current.temp_c}`;
}

function failedtoget(){
  console.log("There is some error in fething!");
}

button.addEventListener("click",async ()=>{
    const resp=navigator.geolocation.getCurrentPosition(gotlocation,failedtoget);
    
})