
 const createBtn = document.querySelector("#create-btn");


 // function to create text area
  createBtn.addEventListener("click", ()=>{

    const textField = document.getElementById("text-field");
    

    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'text-area');
    textArea.setAttribute('rows', '10'); // Set number of rows
    textArea.setAttribute('cols', '100'); // Set number of columns
    textArea.setAttribute('class', 'myTextArea');
    textArea.setAttribute('placeholder', 'write something');

    // create close button
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
  

    closeBtn.innerHTML = `
      <img src ="notes-app-img/images/delete.png" width="18px" hieght="18px">
    `;

    // create save button
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');

     saveBtn.innerHTML = `
       <i class="fa-duotone fa-solid fa-floppy-disk"></i
     `;

       // event listener for close btn
      closeBtn.addEventListener('click', () =>{
        //  console.log("clicked")
         textArea.remove();
         closeBtn.remove();
         saveBtn.remove();

       })


         // event listener for save btn
    saveBtn.addEventListener('click', () =>{
      console.log(textArea.value);
       saveNotes(textArea.value);
    });

    // apend all elements here
     textField.appendChild(textArea);   
     textField.appendChild(closeBtn);   
     textField.appendChild(saveBtn);   

     // event listener for delete-all-btn
      const deleteAll = document.getElementById('delete-all-btn').addEventListener('click',
        ()=>{
         removeAllNotes();  // remove all notes in the textField
        }
      )

      // trigger fetchNotes funciton here
      fetchNotes();

  });


  



  // Push notes in the local storage
  const saveNotes = (inputValue) => {
    console.log(inputValue);
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    // Push the new note into the notes array and save it
    notes.push(inputValue);
    localStorage.setItem("notes", JSON.stringify(notes));
  
    console.log("Note saved:", inputValue);
  };


   // Remove a note
   const removeAllNotes = ()=>{
    // console.log("removeNote is running")
      document.querySelectorAll('.close-btn').forEach(btn => btn.remove());
      document.querySelectorAll('.save-btn').forEach(btn => btn.remove());
      document.querySelectorAll('textarea').forEach(textarea => textarea.remove());
    }; 


     // fetchNotes
      const fetchNotes = ()=>{
        const textArea = document.querySelector('textarea');

        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        textArea.textContent = notes;
        console.log("this is fetchnotes: ",notes);
      }

  

      // reset All Notes
     // get resetBtn
      document.getElementById('reset-btn').addEventListener('click', ()=>{
        localStorage.clear();
        // erase from all textFields
        document.querySelectorAll('textarea').forEach((elem) => elem.value = "");
      })
      
