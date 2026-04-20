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
          let start= 0;
          let end = 19;
          while (start <= end){
            const answer = data[start];
            report(answer);
            start+= 1;
           }
          }

        if (randomnumber === 1){//Spider-Man
          let start_2 = 0;
          let end_2 = 39;
          while (start_2 <= end_2){
            const answer = data[start_2];
            report(answer);
            start_2+= 1;
           }
          }

    
      if (randomnumber === 2){//Batman
        let start_3 = 40;
        let end_3 = 59;
        while (counter_3 <= end_3){
          const answer = data[start_3];
          report(answer);
          start_3+= 1;
         }
        }

        if (randomnumber === 3){//Superman
          let start_4 = 60;
          let end_4 = 79;
          while (counter_4 <= end_4){
            const answer = data[start_4];
            report(answer);
            start_4+= 1;
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
  