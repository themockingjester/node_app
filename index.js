var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area:(x,y) => (x*y)
}

function solveRectangle(l,b){
    console.log("Solving for rectangle with l = "+l+" and b = "+b);
    if(l<=0 || b<=0){
        console.log("rectable dimenndion shoould be greater trhan zero");

    }
    else{
        console.log('Area of the rectangle is '+rect.area(l,b));
    }
}

solveRectangle(2,4);
solveRectangle(3,5);
solveRectangle(0,5);