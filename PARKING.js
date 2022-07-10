var canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

width_car = 75;

hight_car = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 5;

car_y = 25;

function add() {
	Background_imgTag = new Image();
    Background_imgTag.onload = uploadBackground;
	Background_imgTag.src = background_image;
  
	greencar_imgtag = new Image();
	greencar_imgtag = uploadgreencar;
	greencar_imgtag = greencar_image;

}
  

function uploadBackground() {
	ctx.drawImage(Background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag, 5, 25, 75, 100);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
	if (car_y >= 0) {
	  car_y = car_y - 10;
  
	  console.log(
		"When up arrow is pressed, x = " + car_x + " | y = " + car_y
	  );
  
	  uploadBackground();
  
	  uploadgreencar();
	}
  }

function down() {
	if (car_y <= 500) {
	  car_y = car_y + 10;
  
	  console.log(
		"When up arrow is pressed, x = " + car_x + " | y = " + car_y
	  );
  
	  uploadBackground();
  
	  uploadgreencar();
	}
  }


function left() {
	if (car_x >= 0) {
	  car_x = car_x - 10;
  
	  console.log(
		"When up arrow is pressed, x = " + car_x + " | y = " + car_y
	  );
  
	  uploadBackground();
  
	  uploadgreencar();
	}
  }



function right() 
{
     if (car_x <= 500) {
	  car_x = car_x + 10;
  
	  console.log(
		"When up arrow is pressed, x = " + car_x + " | y = " + car_y
	  );
  
	  uploadBackground();
  
	  uploadgreencar();
	}
  }
