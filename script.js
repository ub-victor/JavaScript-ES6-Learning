window.onload = function() {
var ninja = {
  name: "victoire",
  chop(x){
    window.setInterval(function(){
      if(x > 0){
        console.log(this.name + " chopped the enemy");
        x--;
      }
    },1000);
  }
}
ninja.chop(5);
}