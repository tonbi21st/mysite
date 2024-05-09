'use strict';
{
  const timer = document.getElementById('test');
  const start = document.getElementById('start');
  const counter = document.getElementById("counter");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const alarm1 = document.getElementById("alarm1");
  const alarm2 = document.getElementById("alarm2");
  const alarm3 = document.getElementById("alarm3");
  const alarm4 = document.getElementById("alarm4");
  const alarm5 = document.getElementById("alarm5");
  const alarm6 = document.getElementById("alarm6");
  let alarmsound1;
  let alarmsound2;
  let alarmsound3;
  let alarmsound4;
  let alarmsound5;
  let alarmsound6;
  let endTime;
  // const lefttime0Finish  *constだとエラーになる setinterval関数を実行しないと決まらないから
  let lefttime0Finish;
  let elapsedTime
  let countdown;
  const audio = new Audio('sound.mp3');
  
  function check() {
    
    // let countdown = endTime - new Date().getTime(); 
    countdown = endTime - new Date().getTime(); 
    // constだとエラーになる。
    lefttime.textContent = countdown;
    
    
    if (countdown < 0){ 
      clearInterval(lefttime0Finish)
      countdown = 0  
      start.disabled = false;
    }
 
    
    const lefttotalseconds = Math.floor(countdown / 1000);
   
    const minutes = Math.floor(lefttotalseconds / 60);
    const seconds = lefttotalseconds % 60;
    
    const minutesFormatted = String(minutes).padStart(2, '0')
    const secondsFormatted = String(seconds).padStart(2, '0')
    lefttime.textContent = `${minutesFormatted}:${secondsFormatted}`; 
    
    
    // アラーム１処理始まり
    if ((countdown < alarm1.value * 60  *1000) && (alarmsound1 == 0)){ 
      alarmsound1 = 1;}
      else if((countdown < alarm1.value * 60 * 1000) && (alarmsound1 == 1)){
        alarmsound1 = 2;
      }else if(alarmsound1 == 2){
        alarmsound1 = 2
      } 
      
      if(alarmsound1 == 1){audio.play();}
      // アラーム１処理終わり
      
      
      // アラーム２処理始まり
      if ((countdown < alarm2.value * 60  *1000) && (alarmsound2 == 0)){
        alarmsound2 = 1;}
        else if((countdown < alarm2.value * 60   *1000) && (alarmsound2 == 1)){
          alarmsound2 = 2;
        }else if(alarmsound2 == 2){
          alarmsound2 = 2
        } 
        
        if(alarmsound2 == 1){audio.play();}
        // アラーム２処理終わり
        
        
        // アラーム3処理始まり
        if ((countdown < alarm3.value * 60  *1000) && (alarmsound3 == 0)){ 
          alarmsound3 = 1;}
          else if((countdown < alarm3.value * 60  *1000) && (alarmsound3 == 1)){
            alarmsound3 = 2;
          }else if(alarmsound3 == 2){
            alarmsound3 = 2
          } 
          
          if(alarmsound3 == 1){audio.play();}
          // アラーム3処理終わり
          
          
          // アラーム4処理始まり
          if ((countdown < alarm4.value * 60 *1000) && (alarmsound4 == 0)){  
            alarmsound4 = 1;}
            else if((countdown < alarm4.value * 60  *1000) && (alarmsound4 == 1)){
              alarmsound4 = 2;
            }else if(alarmsound4 == 2){
              alarmsound4 = 2
            } 
            
            if(alarmsound4 == 1){audio.play();}
            // アラーム4処理終わり
            
            
            // アラーム5処理始まり
            if ((countdown < alarm5.value * 60 *1000) && (alarmsound5 == 0)){ 
              alarmsound5 = 1;}
              else if((countdown < alarm5.value * 60  *1000) && (alarmsound5 == 1)){
                alarmsound5 = 2;
              }else if(alarmsound5 == 2){
                alarmsound5 = 2
              } 
              
              if(alarmsound5 == 1){audio.play();}
              // アラーム5処理終わり
              
              
              // アラーム6処理始まり
              if ((countdown < alarm6.value * 60 *1000) && (alarmsound6 == 0)){  
                alarmsound6 = 1;}
                else if((countdown < alarm6.value  * 60 *1000) && (alarmsound6 == 1)){
                  alarmsound6 = 2;
                }else if(alarmsound6 == 2){
                  alarmsound6 = 2
                } 
                
                if(alarmsound6 == 1){audio.play();}
                // アラーム6処理終わり
                
                
                // 0になったら鳴る
                if(countdown == 0){audio.play();}        
                
                
  }
  
  
  
  start.addEventListener('click', () => {
    if(counter.value === "0"){
      ;
    }
    else{
    counter.disabled = true;
    start.disabled = true;
    stop.disabled = false;
  
    endTime = new Date().getTime() + counter.value * 60 * 1000;
    //アラーム音処理フラグ 
    
    if(counter.value <  alarm1.value){
       alarmsound1 = 2
      }else{
       alarmsound1 = 0
      }
    if(counter.value <  alarm2.value){
       alarmsound2 = 2
      }else{
       alarmsound2 = 0
      }
    if(counter.value <  alarm3.value){
       alarmsound3 = 2
      }else{
       alarmsound3 = 0
      }
    if(counter.value <  alarm4.value){
       alarmsound4 = 2
      }else{
       alarmsound4 = 0
      }
    if(counter.value <  alarm5.value){
       alarmsound5 = 2
      }else{
       alarmsound5 = 0
      }
    if(counter.value <  alarm6.value){
       alarmsound6 = 2
      }else{
       alarmsound6 = 0
      }
    
    lefttime0Finish = setInterval(check, 100);
    }
  });

  stop.addEventListener('click',() => {
    if(counter.value === "0"){
      ;
    }else{
    clearInterval(lefttime0Finish);
    start.disabled = false;
    stop.disabled = true;
    const stoptimeleftseconds = Math.floor(countdown / 1000);
    
    const stopminutes = Math.floor(stoptimeleftseconds / 60);
    const stopseconds = stoptimeleftseconds % 60 / 60;

    

     const stopminutesleft = Math.floor((stopminutes + stopseconds)*100) / 100
     counter.value = stopminutesleft; 
     countdown = 0;
    }
  })

  reset.addEventListener('click',() => {
    clearInterval(lefttime0Finish)
    lefttime.textContent = "00:00"
    counter.disabled = false;
    start.disabled = false;
    stop.disabled = false;
    counter.value = 0;
    alarm1.value = 0;
    alarm2.value = 0;
    alarm3.value = 0;
    alarm4.value = 0;
    alarm5.value = 0;
    alarm6.value = 0;
     })
  
}