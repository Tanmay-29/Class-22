//namespacing
 const World =Matter.World;
 const Engine=Matter.Engine;
  const Bodies= Matter.Bodies;
   var ball;
    var ground;
     var engine, world;
      function setup() {
         createCanvas(400,400);
          //creating our engine and world 
          
    engine= Engine.create();
     world= engine.world;
      var ball_options={ isStatic : false, restitution :1, }
      // creating a rectangular body 
      ball=Bodies.circle(200,200,50,ball_options); 
      //adding bodies to our world 
      World.add(world,ball); 
      var ground_options={ isStatic : true, }
       ground=Bodies.rectangle(200,380,400,20,ground_options);



        World.add(world,ground);


         console.log(ball); 
        }


         function draw() { 
           background("black"); 
         //to update our engine 
         Engine.update(engine);
           ellipseMode(RADIUS);
          ellipse(ball.position.x,ball.position.y,50,50); 
          rectMode(CENTER);
          rect(ground.position.x,ground.position.y,400,20);
        }

