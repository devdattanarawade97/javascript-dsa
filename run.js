

const countGreaterThan50=async ()=>{

    const response=await fetch("https://coderbyte.com/api/challenges/json/age-counting");
  
    const jsonData =await response.json();
  
    const data=jsonData.data.split(',').split('=');
  
    console.log("data : ", data);
  }