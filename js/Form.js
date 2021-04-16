class Form {

  constructor()
  {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
  }
  
  hide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){

    this.title.html("Car Racing Game");
    this.title.position(130,0);

    this.input.position(130,200);
    this.button.position(130,220);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();

      playerCount+=1;

      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
