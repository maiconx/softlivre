var slideIndex = 0;
carousel();

   function carousel() {

       var i;
       var x = document.getElementsByClassName("mySlides");
       for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
       }
       slideIndex++;
       if (slideIndex > x.length) {slideIndex = 1}
       x[slideIndex-1].style.display = "block";
       setTimeout(carousel, 2000);
   }


   function toggle_visibility(id) {
      var e = document.getElementById(id);
      if(e.style.display == 'block')
         e.style.display = 'none';
      else
         e.style.display = 'block';
   }
