import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
   const [notes, setNotes] = useState([]);

   function AddKeeper(titleAndcontent){
      setNotes((prevValue)=>{
         return [...prevValue, titleAndcontent]
      });
      
   }
   function deleteItem(id){
      setNotes(prevValue  => {
         return prevValue.filter((item, index) => {
            return index !== id;
         })
      });

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