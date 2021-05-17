canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_x = 10;
car1_y = 10;
car2_x = 50;
car2_y = 50;
car_width =125;
car_height = 80;

background_img = "racingground.jpeg";
car1_img = "car1.png";
car2_img = "car2.png";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground();
    background_imgtag.src = background_img;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1();
    car1_imgtag.src = car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2();
    car2_imgtag.src = car2_img;

}

function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {    
    ctx.drawImage(car1_imgtag, car1_x, car1_y, car_width, car_height);
}
function uploadcar2() {    
    ctx.drawImage(car2_imgtag, car2_x, car2_y, car_width, car_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed =='37')
    {
        console.log("left arrow key is pressed");
        left();
    }

    if(keyPressed =='38')
    {
        console.log("up arrow key is pressed");
        up();
    }

    if(keyPressed =='39')
    {
        console.log("right arrow key is pressed");
        right();
    }

    if(keyPressed =='40')
    {
        console.log("down arrow key is pressed");
        down();
    }
    if(keyPressed =='65')
    {
        console.log("a (left) is pressed");
        lefta();
    }

    if(keyPressed =='87')
    {
        console.log("w (up) arrow key is pressed");
        upw();
    }

    if(keyPressed =='68')
    {
        console.log("d (right) arrow key is pressed");
        rightd();
    }

    if(keyPressed =='88')
    {
        console.log("x (down) arrow key is pressed");
        downx();
    }
}
function left()
{
    if(car1_x>=0)
    {
        car1_x = car1_x - 10;
        console.log("when left is pressed, x = " + car1_x + ",y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}
function right()
{
    if(car1_x<=700)
    {
        car1_x = car1_x + 10;
        console.log("when right is pressed, x = " + car1_x + ",y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}
function up()
{
    if(car1_y>=0)
    {
        car1_y = car1_y - 10;
        console.log("when up is pressed, x = " + car1_x + ",y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}
function down()
{
    if(car1_y<=500)
    {
        car1_y = car1_y + 10;
        console.log("when down is pressed, x = " + car1_x + ",y = " + car1_y);
        uploadbackground();
        uploadcar1();
    }
}
function lefta()
{
    if(car2_x>=0)
    {
        car2_x = car2_x - 10;
        console.log("when left is pressed, x = " + car2_x + ",y = " + car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function rightd()
{
    if(car2_x<=700)
    {
        car2_x = car2_x + 10;
        console.log("when right is pressed, x = " + car2_x + ",y = " + car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function upw()
{
    if(car2_y>=0)
    {
        car2_y = car2_y - 10;
        console.log("when up is pressed, x = " + car2_x + ",y = " + car2_y);
        uploadbackground();
        uploadcar2();
    }
}
function downx()
{
    if(car2_y<=500)
    {
        car2_y = car2_y + 10;
        console.log("when down is pressed, x = " + car2_x + ",y = " + car2_y);
        uploadbackground();
        uploadcar2();
    }
}