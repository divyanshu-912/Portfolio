// Simple contact form feedback (demo only, no backend)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Thank you for your message!';
  this.reset();
  setTimeout(() => {
    document.getElementById('form-status').textContent = '';
  }, 3000);
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

function projecttype(ptype){
  const collab=document.getElementById("collab");
 const indi=document.getElementById("individual");
 const ongoing=document.getElementById("ongoing");

  if(ptype==="collab"){
     indi.classList.remove('active');
    ongoing.classList.remove('active');
    collab.classList.add('active');
  
  }
  else if(ptype==="individual"){
     ongoing.classList.remove('active');
    collab.classList.remove('active');
    indi.classList.add('active');
   
    
  }
   else{
      indi.classList.remove('active');
    collab.classList.remove('active');
    ongoing.classList.add('active');
    
  }
}

function closeall(){
  const collab=document.getElementById("collab");
 const indi=document.getElementById("individual");
 const ongoing=document.getElementById("ongoing");

  ongoing.classList.remove('active');
    collab.classList.remove('active');
    indi.classList.remove('active');
   
}

const ctx=document.getElementById('skillChart')
const skillChart=new Chart(ctx,{
  type:'radar',
  data:{
    labels:['HTML','CSS','JavaScript','Node.js','Express','MongoDB','React'],
    datasets:[{
      label:'Proficiency Level',
      data:[95,90,85,80,75,70,10],
      backgroundColor:'rgba(0,123,255,0.2)',
      borderColor:'rgba(0,123,255,1)',
      borderWidth:2,
      pointBackgroundColor:'rgba(0,123,255,1)'

    }]
  },
  options:{
    plugins:{
      legend:{
        position:'top',
        labels:{
          color:'#333',
          font:{
            size:14,
            family:'Arial, sans-serif'
          }
        }
      },
      title:{
        display:true,
        text:'Skill Proficiency Chart',
        color:'#333',
        font:{
          size:18
        }
      }
    },

    scales:{
      r:{
        angleLines:{display:true},
        suggestedMin:0,
        suggestedMax:100,

      }
    },
    responsive:true,
  }
});
