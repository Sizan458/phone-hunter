const loadPhone  =async(searchText,showAll)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones=  data.data
    
  // console.log(phones); 
  displayPhone(phones,showAll);    
}


const  displayPhone=(phones,showAll) =>{
   //console.log(phones);
   const phoneContainer = document.getElementById('card');
   

   phoneContainer.textContent='';

   const allPhone =document.getElementById('btn2')
   if (phones.length > 10 && !showAll) {
    allPhone.classList.remove('hidden');
    
   }else{
    allPhone.classList.add('hidden');
   }
  // console.log('is show all',showAll)

   if(!showAll){
    phones=phones.slice(0,10);
   }
   

  phones.forEach(phone=>{
   //console.log(phone);   
  const phoneCard = document.createElement('div');
  
   phoneCard.classList=` p-17 bg-base-100 shadow-xl`;
   phoneCard.innerHTML=`
   <figure class='mt-8 ml-20'><img src="${phone.image}"></figure>
   <div class="card-body">
     <h2 class="card-title">${phone.phone_name
     }</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div class="card-actions justify-end">
       <button class="btn btn-primary">Buy Now</button>
     </div>
   </div>
   `
phoneContainer.appendChild(phoneCard)

  })
  spinner(false);
 
}

   

const btn=(showAll)=> {
  spinner(true);
  const search=document.getElementById('input-field');
  const searchText=search.value;
  console.log(searchText);
  loadPhone(searchText,showAll) ;
}

const spinner =(isLoading)=> {
  const loading = document.getElementById('lodaing');
  if(isLoading){
    loading.classList.remove('hidden');
  }else{
    loading.classList.add('hidden');
  }
}

const HandelShowAll=()=>{
  btn(true);

};

//loadPhone()