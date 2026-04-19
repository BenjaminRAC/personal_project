function report(data, error = false) {
    if (typeof data === 'string') data = [data];
  
    const elem = document.querySelector('#qestion');
    
    


    const p = document.createElement('p');
    p.textContent = data;
    p.classList.toggle('error', error);
    elem.append(p);
    
  }
  
  async function fetchData() {
    const response = await fetch('clues.json');

    //gets a random charcter 
    const randomnumber = Math.floor(Math.random() * 4);

    if (response.ok) {
      const data = await response.json();

      const Cyclops = "Cyclops";
      const char1 = data[Cyclops];
      const Spider = "Spider-Man";
      const char2 = data[Spider];
      const Batman = "Batman";
      const char3 = data[Batman];
      const Superman = "Superman";
      const char4 = data[Superman];
      const char = [char1, char2, char3, char4]
  
      const character = char[randomnumber];
      
      const guess = document.getElementById('guess').value;

      if (guess != character){
        //this is where we get the qestions.
        if (randomnumber === 0){//Cyclops
          let start = 0;
          let end = 19
          while (start <= end){
            const answer = data[counter];
            report(answer);
            start+= 1;
           }
          }

        if (randomnumber === 1){//Spider-Man
          let start = 0;
          let end = 19
          while (start <= end){
            const answer = data[counter];
            report(answer);
            start+= 1;
           }
          }

    
      if (randomnumber === 2){//Batman
          let start = 0;
          let end = 19
          while (start <= end){
            const answer = data[counter];
            report(answer);
            start+= 1;
         }
        }

        if (randomnumber === 3){//Superman
          let start = 0;
          let end = 19
          while (start <= end){
            const answer = data[counter];
            report(answer);
            start+= 1;
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
  