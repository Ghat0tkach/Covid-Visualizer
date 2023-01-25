//fetched-api//
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
       $("#death").append("   Cases")


     
     
   
    })

   

})
//animation//
function reveal2() {
    var reveals2 = document.querySelectorAll(".symptoms");
  
    for (var i = 0; i < reveals2.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals2[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active");
      } else {
        reveals2[i].classList.remove("active");
      }
    }
  }
  function reveal() {
    var reveals = document.querySelectorAll(".Precautions");
  
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
  window.addEventListener("scroll", reveal2);


  //Cookie page//
  const modal = document.getElementById('modal')
  const modalCloseBtn = document.getElementById('modal-close-btn')
  const consentForm = document.getElementById('consent-form')
  const modalText = document.getElementById('modal-text')
  const declineBtn = document.getElementById('decline-btn')
  const modalChoiceBtns = document.getElementById('modal-choice-btns')
  
  setTimeout(function(){
      modal.style.display = 'inline'
  }, 1500)
  
  modalCloseBtn.addEventListener('click', function(){
      modal.style.display = 'none'
  })
  
  declineBtn.addEventListener('mouseenter', function(){
      modalChoiceBtns.classList.toggle('modal-btns-reverse')
  })
  
  consentForm.addEventListener('submit', function(e){
      e.preventDefault()
      
      const consentFormData = new FormData(consentForm)
      const fullName = consentFormData.get('fullName')
      
      modalText.innerHTML = `
      <div class="modal-inner-loading">
          <img src="img/loading.svg">
          <p id="upload-text">Checking Your Will for Commitment...</p>
      </div>` 
      
      setTimeout(function(){
          document.getElementById('upload-text').innerText = `
          Finalizing...`
      }, 1500)
      
      
      setTimeout(function(){
          document.getElementById('modal-inner').innerHTML = `
          <h2>Thanks <span class="modal-display-name">${fullName}</span>! </h2>
          <p>We Made Sure You're following Covid Measures.</p>
          <div class="thank-gif">
              <img src="img/thank_you.gif">
          </div>
      `
      modalCloseBtn.disabled = false
      }, 3000)
    
  }) 
  const login=document.getElementById('form-submit')
  login.addEventListener('click',function(e){
      e.preventDefault()
      const contact=document.getElementById('contact')
      contact.innerHTML=`<div class="post-contact">
          <p>Thanks for Contacting</p>
          <p>We Will Reach You Shortly through your Email</p>
          </div>
                        `
  })