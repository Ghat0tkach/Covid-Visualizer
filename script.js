$(document).ready(function(){
    var url ="https://data.covid19india.org/data.json"


    $.getJSON(url,function(data){
       console.log(data)
       var total_active,total_recovered,total_deaths,total_confirmed
       
       var states=[]
       var confirmed=[]
       var recovered=[]
       var deaths=[]

       $.each(data.statewise,function(id,obj){
        states.push(obj.state)
        confirmed.push(obj.confirmed)
        recovered.push(obj.recovered)
        deaths.push(obj.deatgs)
       })
        
   

                states.shift()
                confirmed.shift()
                recovered.shift()
                deaths.shift()


 

       total_active=data.statewise[0].active
       total_confirmed=data.statewise[0].confirmed
       total_recovered=data.statewise[0].recovered
       total_deaths=data.statewise[0].deaths
   
       $("#Active").append(total_active)
       $("#confirm").append(total_confirmed)
       $("#Recovered").append(total_recovered)
       $("#death").append(total_deaths)
   


      var myChart = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(myChart, {
        type: "line",
        data: {
          labels: states,
          datasets: [
            {
              label: "Confirmed Cases",
              data: confirmed,
              backgroundColor: "#f1c40f",
              minBarLength: 100,
            },
            {
              label: "Recovered",
              data: recovered,
              backgroundColor: "#2ecc71",
              minBarLength: 100,
            },
            {
              label: "Deceased",
              data: deaths,
              backgroundColor: "#e74c3c",
              minBarLength: 100,
            },
          ],
        },
        option: {},
      });
   
    })

   

})
function reveal() {
    var reveals = document.querySelectorAll(".symptoms");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);