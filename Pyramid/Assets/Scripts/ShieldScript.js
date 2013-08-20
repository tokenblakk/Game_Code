#pragma strict
var alpha : float = 0.3;
var red : Color = Color(1,0,0,alpha);
var green : Color = Color(0,1,0,alpha);
var yellow : Color = Color(1,0.92,0.016,alpha);
var blue : Color = Color(0,0,1,alpha);
var white : Color = Color(1,1,1,alpha);

enum Colors {RED, GREEN, YELLOW, BLUE, WHITE};
var inputColor : Colors = Colors.WHITE;
var shieldColor : Color;

function Start () 
{
	//shieldColor = white;
}

function Update () 
{
	switch(inputColor)
			{
				case Colors.RED:
					shieldColor = red;
					break;
				case Colors.GREEN:
					shieldColor = green;
					break;
				case Colors.YELLOW:
					shieldColor = yellow;
					break;
				case Colors.BLUE:
					shieldColor = blue;
					break;
				case Colors.WHITE:
					shieldColor = white;
					break;
				default:
					shieldColor = white;
					break;
			}
	renderer.material.SetColor("_Color", shieldColor);	
}

public function setInputColor(_color : String)
{
	//hard to convert string to enum, but this is how 
	inputColor = System.Enum.Parse(Colors, _color, true);


	// Picking an invalid colors throws an ArgumentException. To
	// avoid this, call Enum.IsDefined() first, as follows:
	
	/*
	string nonColor = "Polkadot";

	if (Enum.IsDefined(typeof(Colors), nonColor))
	  inputColor = (Colors) Enum.Parse(typeof(Colors), nonColor, true);
	else
	  MessageBox.Show("Uh oh!");
	*/
}

