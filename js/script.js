var myProjects=[{name:"Value Platform",imgSrc:"/img/value.PNG", git:"", show:"https://value-platform.com/home"},
{name:"Profile",imgSrc:"/img/profile.PNG", git:"https://github.com/amanyasad/Profile", show:"https://amany-profile-148.netlify.app/"},
{name:"Weather",imgSrc:"/img/weather.PNG", git:"https://github.com/amanyasad/Weather-Project", show:"https://magnificent-gumdrop-ac7729.netlify.app/"},
{name:"Angora",imgSrc:"/img/angora.PNG", git:"https://github.com/amanyasad/Angora", show:"https://amanyasad.github.io/Angora/"},
{name:"Devfolio",imgSrc:"/img/devfolio.PNG", git:"https://github.com/amanyasad/DevFolio", show:"https://amanyasad.github.io/DevFolio/"},
{name:"Fokier",imgSrc:"/img/Fokir.PNG", git:"https://github.com/amanyasad/Fokir", show:"https://amanyasad.github.io/Fokir/"},
{name:"Simone",imgSrc:"/img/simone.PNG", git:"https://github.com/amanyasad/Simone", show:"https://amanyasad.github.io/Simone/"}]


var limit = 6;
function showProject(){

  
    var str ='';
  for (let index = 0; index < limit; index++) {
  
    str += `
    <div class="col-lg-4 my-3">
    <div class=" contain-proj rounded-3 ">
        <img src="${myProjects[index].imgSrc}" alt="" style="width: 100%;"  class="image rounded-3">
        <div class="overlay rounded-3">
            <div class="text row">
                <div class="col-12 my-3">
                  <h3 class="text-center text-light">${myProjects[index].name}</h3>
                </div>
                <div class="col-6">
                    <a class="text-light" href="${myProjects[index].git}" target="_blank"><i class="fa-brands fa-github fs-4 px-2 mx-3"></i></a>
                </div>
                <div class="col-6">
                <a class="text-light" href="${myProjects[index].show}" target="_blank"><i class="fa-regular fa-eye fs-4 px-2 mx-3"></i></a>
                </div>
            </div>
          </div>
    </div>

</div>
    
    `
    
  }
  document.getElementById('showProjects').innerHTML = str;
}


showProject();


let btnEle = document.getElementById("show");
btnEle.addEventListener("click",()=>{

   
    if(limit === 6){
        limit = myProjects.length;
        btnEle.innerHTML = 'Hide more';
        showProject();
    }else{
        limit = 6;
        btnEle.innerHTML = 'Show more';
        showProject();
    }
})


