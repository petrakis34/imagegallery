//Image Gallery Javascript

// Here we set all our global variables that we re gonna need next
var i=0; 
var images = "";
var arrayImages = ["images/sea1.jpg","images/sea2.jpg","images/sea3.jpg","images/sea4.jpg"];
var imageTimer;
var seconds; 
var z;

function myImage (z) { // here we set each image in order to click and show the image that we want from the above array

	document.getElementById("mainphoto").src = z;
	var image = document.getElementById("mainphoto").src;
	var z = image[image.length-5];
	i = z-1;
}

function nextImage () { // here we set the function to show the next object of our function everytime we hit onclick and reset to 0 to start over
	i++;
	document.getElementById("mainphoto").src = arrayImages[i];

	if (i>=4){
		document.getElementById("mainphoto").src = arrayImages[0];
		i=0;
	}else{
		document.getElementById("mainphoto").src = arrayImages[i];
	}
}

function prevImage () { // here we set the function to show the previous object of our function everytime we hit onclick and reset to 3 to start over
	i--;
	document.getElementById("mainphoto").src = arrayImages[i];

	if (i<0){
		document.getElementById("mainphoto").src = arrayImages[3];
		i=3;
	}else{
		document.getElementById("mainphoto").src = arrayImages[i];
	}
}

function randomImage () { //here we set the random function to hit the button and show random images. we multiply by 4 because we have 4 images and we want to have at generated all our array items

	var x = Math.random()*4;
	var y = Math.floor(x); // here we make all decimals disappear so we have a clean number
	document.getElementById("mainphoto").src = arrayImages[y];
}
 


function startImage() { // Here we start our function to start automatically showing all images
	if(document.getElementById('selectid').value=='val2'){
        var seconds = 2000;
    }else if(document.getElementById('selectid').value=='val3'){
    	var seconds = 4000;
    }else{
    	seconds = 1000;
    }

	imageTimer = setInterval("nextImage()", seconds); //here we set the set interval function to start showing our array items with variable 'seconds' time gap
}

function stopImage() { //here we stop the interval function above
	clearInterval(imageTimer);
	}