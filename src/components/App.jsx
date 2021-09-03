import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
   const [notes, setNotes] = useState([]);

   useEffect(()=>{
      if(localStorage.getItem('keeper')){
         setNotes(JSON.parse(localStorage.getItem('keeper')));
      }
   }, []);
  
   function AddKeeper(titleAndcontent){
      const getKeeperLocal = JSON.parse(localStorage.getItem('keeper'));
      if(getKeeperLocal === null){
         setNotes([titleAndcontent]);
         localStorage.setItem('keeper', JSON.stringify([titleAndcontent]));
      }else{
         setNotes([...getKeeperLocal, titleAndcontent]);
         localStorage.setItem('keeper', JSON.stringify([...getKeeperLocal, titleAndcontent]));
      }
   }
   

   function deleteItem(id){
      setNotes(prevValue  => {
         return prevValue.filter((item, index) => {
            return index !== id;
         })
      });
      let getKey = JSON.parse(localStorage.getItem('keeper'))
            getKey.splice(id, 1);
            localStorage.setItem('keeper', JSON.stringify(getKey));
  }
   return(
     <div>
          <Header />
          <CreateArea  addNote={AddKeeper}/>

          {notes.map((item, index) => (
          <Note 
          key={index}
          id={index}
         title={item.title}
         content={item.content}
         delete={deleteItem}
         />)) }
         <Footer />
      </div>
     
     
   );
}

export default App;