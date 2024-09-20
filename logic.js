
 const createBtn = document.querySelector("#create-btn");


 // function to create text area
  createBtn.addEventListener("click", ()=>{

    const textField = document.getElementById("text-field");

    const textArea = document.createElement('textarea');
    textArea.setAttribute('rows', '10'); // Set number of rows
    textArea.setAttribute('cols', '100'); // Set number of columns
    textArea.setAttribute('class', 'myTextArea');
    textArea.setAttribute('placeholder', 'write something');

    // apend the textArea in textField
     textField.appendChild(textArea);

  });

    const saveNotesBtn = document.querySelector('.save-btn');
    saveNotesBtn.addEventListener('click', () =>{
        saveNotes();
    })

  // write a function to push notes in the local storage
   const saveNotes = ()=>{
     const inputValue = document.querySelector(".myTextArea").value;
  

     // push value in local storage
     localStorage.setItem('note', inputValue);

   }