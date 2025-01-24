window.onload = function() {
  var name = "Victor";
  var belt = "Black";
   var victor = {
    name , belt,
    chop(x) {
      console.log(`You chopped the enemy ${x} times ok`);
    }
   };
  console.log(victor.chop(5));
}