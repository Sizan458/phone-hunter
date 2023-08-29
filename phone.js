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
       <button onclick="datile('${phone.slug}')" class="btn btn-primary">Show Details</button>
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
  search.textContent ="";
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

const datile = async(id)=>{
 //console.log('datile',id);
  const res= await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data =   await res.json();
  const phone = data.data;
  showAllData(phone);
  
};

const showAllData = phone =>{
 console.log(phone);
  
  const p=  document. getElementById('s-d-c')
  p.innerHTML=`
      <img class='ml-[35%]' src="${phone.image}" alt="" />
      <h2 class='mt-10 '>${phone.name}</h2>
      <p class='mt-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <p>Storage:<span>${phone.mainFeatures.storage
      }</span> </p>
      <p>Display Size:<span >${phone.mainFeatures.displaySize
      }</span> </p>
      <p>Chipset:<span>${phone.mainFeatures.chipSet}</span></p>
      <p>Memory:<span>${phone.mainFeatures.memory}</span></p>
      <p>Sensors:<span>${phone.mainFeatures.sensors}</span></p>
      <p>Model:<span>${phone.slug}</span></p>
      <p>Release data:<span>${phone.releaseDate}</span></p>
      <p>Wifi:<span>${phone.others?.WLAN || 'No Wifi'}</span></p>
      <p>Bluetooth:<span>${phone.others?.Bluetooth || 'No Bluetooth'}</span></p>
      <P>GPS:<span>${phone.others?.GPS || 'No GPS'}</span></P>
      <p>NFC:<span>${phone.others?.NFC || 'NO NFC'}</span></p>
      <p>USB:<span>${phone.others?.USB || 'No USB'}</span></p>
      <p>Radio:<span>${phone.others?.Radio || 'No Radio'}</span></p>
      
      
  `;

  my_modal_1.showModal()
}
loadPhone('iphone' )