var MenuItems = document.getElementById("MenuItems")
     MenuItems.style.maxHeight="0px";
     function menutoggle(){
         if(MenuItems.style.maxHeight=="0px"){
             MenuItems.style.maxHeight = "200px";
         }
         else{
            MenuItems.style.maxHeight="0px";
         }
     }


 function openMenu() {
        document.querySelector(".sidebar").classList.add("Open");
      }
      function closeMenu() {
        document.querySelector(".sidebar").classList.remove("Open")
      }

 
      
      

      