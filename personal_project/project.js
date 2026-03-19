function report(data, error = false) {
    if (typeof data === 'string') data = [data];
  
    const elem = document.querySelector('#qestion');
    
    


    const p = document.createElement('p');
    p.textContent = data;
    p.classList.toggle('error', error);
    elem.append(p);
    
  }
  
  async function fetchData() {
    const response = await fetch('answers.json');
    const characters = await fetch('characters.json');

    //gets a random charcter 
    const randomnumber = Math.floor(Math.random() * 4);
    const char = await characters.json();
    const character = char[randomnumber];

    if (response.ok) {
      const data = await response.json();
      
      const guess = document.getElementById('guess').value;

      if (guess != character){
        //this is where we get the qestions.
        if (randomnumber === 0){//Cyclops
          let counter = 0;
          while (counter <= 19){
            const answer = data[counter];
            report(answer);
            counter+= 1;
           }
          }

        if (randomnumber === 1){//Spider-Man
          let counter_2 = 20;
          while (counter_2 <= 39){
            const answer = data[counter_2];
            report(answer);
            counter_2+= 1;
           }
          }

    
      if (randomnumber === 2){//Batman
        let counter_3 = 40;
        while (counter_3 <= 59){
          const answer = data[counter_3];
          report(answer);
          counter_3+= 1;
         }
        }

        if (randomnumber === 3){//Superman
          let counter_4 = 60;
          while (counter_4 <= 79){
            const answer = data[counter_4];
            report(answer);
            counter_4+= 1;
           }
          }

      }else{
        const win = document.querySelector('#win');
        win.textContent = 'you got it correct good job';
        return win
      }
    } else {
      report('No data', true);
    }
    
  }
  
  function pageLoaded() {
    const gethIt = document.querySelector('#getit');
    gethIt.addEventListener('click', fetchData);
  }
  
  window.addEventListener('load', pageLoaded);
  