const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const span_tag = document.getElementById('span_tag');
const datahide = document.querySelector('.middle_layer');



const getInfo = async (event) =>{

    event.preventDefault();

  let cityVal = cityName.value;

    if(cityVal===""){

    

        city_name.innerText = "Wrong Details !"
        datahide.classList.add('data_hide');

    }else{
        
        try{

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e32800d662f5a77fb6fb773459df28c7`
        
            const response = await fetch(url);
            const data = await response.json();

            // console.log(data);

            const arrData = [data];

            city_name.innerText =`${arrData[0].name} , ${arrData[0].sys.country}`
            span_tag.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

           if(tempMood==="Clear"){
               temp_status.innerHTML = "<i class='fas fa-sun' style= 'color: #ecc688;'></i>";
           }
           else if(tempMood==="Clouds"){
            temp_status.innerHTML = "<i class='fas fa-cloud' style= 'color: #f1f2f6;'></i>";
        }
       else  if(tempMood==="Rain"){
            temp_status.innerHTML = "<i class='fas fa-rain' style= 'color: #a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML = "<i class='fas fa-sun' style= 'color: #ecc688;'></i>";
        }


            
        datahide.classList.remove('data_hide');



        }catch  {
           
            // console.log(e);
            city_name.innerText = "Please provide valid information";
            datahide.classList.add('data_hide');


        }
       
    }
}




submitBtn.addEventListener('click' , getInfo);
