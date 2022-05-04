
  function search_instrument() {


    const instruments = document.querySelectorAll('.instrument');
    var text = document.getElementById("search_instrument").value

    instruments.forEach(function(instru_i) {
      var id = instru_i.id;

      var element = document.getElementById(id);


      console.log(element.innerHTML)
      console.log(text);
      var closest_element = element.closest( ".col-lg-4" );
      if(element.innerHTML.includes(text)){
        
        
        $(closest_element).show();
  
      }else{
        $(closest_element).hide();
      }
    });


  }
