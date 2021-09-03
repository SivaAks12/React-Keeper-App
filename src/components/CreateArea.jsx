import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

const [isExpanded, setExpanded] = useState(false);

const [titleAndcontent, setTitleAndContent] = useState({
  title: "",
  content: ""
});
function handleChange(event){
  const { name, value } = event.target;
  setTitleAndContent((prevValue) =>{
        return {
          ...prevValue,
          [name]: value
        }
  })
}
function submitKeeper(event){
  props.addNote(titleAndcontent);
  setTitleAndContent({
    title: "",
    content: ""
  });
  event.preventDefault();
}
function expand(){
  setExpanded(true);
}

  return (
    <div>
      <form className="create-note">
      { isExpanded &&( <input name="title" onChange={handleChange} placeholder="Title" value={titleAndcontent.title} 
        />)}
        
        <textarea name="content" onChange={handleChange} onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1} 
        value={titleAndcontent.content} 

        />
        <Zoom in={isExpanded}>
        <Fab  onClick={submitKeeper}> <AddIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
