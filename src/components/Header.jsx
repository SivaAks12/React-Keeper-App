import React from "react";
import BeenhereIcon from '@material-ui/icons/Beenhere';

function Header(){
   const own = "<Own Destiny />";
   const colorOwn = {
      color:"darkslategrey"
   }

   return(
      <div>
         <header>
            <h1><b style={colorOwn}>{own}</b>  Keeper App <BeenhereIcon /></h1>
         </header>
         
      </div>
      
   );
}

export default Header;