#pragma strict
var alpha : float = 0.3;
var red : Color = Color(1,0,0,alpha);
var green : Color = Color(0,1,0,alpha);
var yellow : Color = Color(1,0.92,0.016,alpha);
var blue : Color = Color(0,0,1,alpha);
var white : Color = Color(1,1,1,alpha);

var colors : Color[] = [red, green, yellow, blue, white];
var index : int = 1;
var shieldColor : Color;

function Start () 
{
	shieldColor = white;
}

function Update () 
{
	//testing colors against color walls
	if (Input.GetKeyDown("e")) //keeps colors switching forward through array
	{
		index += 1;
		if (index > 4)
			index = 0;
	}
	if (Input.GetKeyDown("q")) //cycle backward
	{
		index -= 1;
		if (index < 0)
			index = 4;
	}

	//index = index % colors.Length; //cycle through colors the ifs are safer and avoid index out of bounds
	shieldColor = colors[index];
	renderer.material.SetColor("_Color", shieldColor);	
}