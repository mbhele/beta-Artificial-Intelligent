const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const list=document.getElementById('list')
var box =[];

// const greeting =["In good you little piece of shit", 'Doing good homeboy', 'leave me alone']
const greeting =["Hello, how can i help you?", 'Yes, i am here, you need my help?', 'Finally, you are here? how may i be of assistance!']

 const weather= [
     'Hot',
     'Cold'
 ];

 var password='Mi12';
  
const SpeechRecognition = window.SpeechRecognition||window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
    recognition.onstart=function(){
    console.log(`voice is activated, you can to microphone`)
    }


    
recognition.onresult=function(event){
    const current =event.resultIndex;
  var output='';
    const transcript =event.results[current][0].transcript;
    content.textContent=transcript;
    box.push(transcript)
    console.log(box)
    console.log(event);
    // alert(transcript);

    //   PUSH THE INPUT TO THE ARRRAY BOX
    box.forEach(function(bo){
      console.log(bo);
      output+=`<li>${bo}</li>`;

    })
    list.innerHTML=output;
    readOutLoud(transcript);

}


//add the listener to the btn

btn.addEventListener('click', (mb)=> {
    recognition.start();
});



function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text ='i dont know what you said';
    // box.push(finalText);
    // console.log(box)
     if(message.includes('how are you') ||message.includes('hello')){
          const finalText=
             greeting[Math.floor(Math.random()* greeting.length)];
             speech.text=finalText;
               box.push(finalText);
               console.log(box)
            //  weather
     } else if(message.includes('weather')){
        const final= weather[Math.floor(Math.random()* weather.length)];
 console.log(final)
        if(final==='Cold'){
            
            document.body.style.background='#709eec';
            content.innerHTML=`
             <ul><li>Physics</li></ul>`;
             speech.text=final;
        } else if(final==='Hot'){
        document.body.style.background='#eb0706';
        console.log(final)
     speech.text=final;
    }
    
     } else if(message.includes('password')){
         var ps=password;
         speech.text=ps;
        //  console.log(final)
        //  speech.text=final;
     }
    //  box.push(finalText);
    //  console.log(box)
         // weather

//    speech.text=message;

    speech.volume=1;
    speech.rate=1;
    speech.pitch=0.2;
     
 window.speechSynthesis.speak(speech)
}