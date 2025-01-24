window.onload = function() {  
  var name = "Victor";  
  var belt = "Black";  
  var victor = {  
    name,  
    belt,  
    chop(x) {  
      console.log(`You chopped the enemy ${x} times ok`);  
    }  
  };  
  victor.chop(5); // This will only log the message  
}