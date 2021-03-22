const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let randomNum = Math.round(Math.random()*100);
       console.log(randomNum);            
   if(randomNum%2==0){
       resolve({
           message:`Завершено успешно. Сгенерированное число — ${randomNum}`
       });
       
   }else {
       reject({
          message:`Завершено с ошибкой. Сгенерированное число — ${randomNum}`  
       });
   } 
    },3000);
});
     myPromise   
     .then((result)=>{
         console.log(result.message);
        
     })
      .catch((error) => {
      console.log(error.message);
        
    });