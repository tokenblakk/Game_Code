#pragma strict
var alpha : float = 0.3;
var changeInterval = 0.33;
var red : Color = Color(1,0,0,alpha);
var green : Color = Color(0,1,0,alpha);
var yellow : Color = Color(1,0.92,0.016,alpha);
var blue : Color = Color(0,0,1,alpha);
var white : Color = Color(1,1,1,alpha);

var colors : Color[] = [red, green, yellow, blue, white];
var shieldColor : Color;


var paused : boolean = false;
function Start () 
{
	shieldColor = white;
}

function Update () 
{
	//testing colors against color walls
	if (Input.GetButton("q"))
	{
		if(paused)
			paused = false;
		else
			paused = true;
	}
	if (!paused)
	{
		var index : int = Time.time / changeInterval;
		index = index % colors.Length;
		shieldColor = colors[index];
		renderer.material.SetColor("_Color", shieldColor);
	}	
}