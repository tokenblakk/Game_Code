class WallScript extends GoalScript
{
	
	var customColor : Color = Color(0,0,0,alpha);
	//enum Colors {RED : "RED", GREEN : "GREEN", YELLOW : "YELLOW", BLUE : "BLUE", WHITE : "WHITE"};
	enum Colors {RED, GREEN, YELLOW, BLUE, WHITE};
	var inputColor : Colors;

	//no Colors here look in base class
	//goalColor = 

	function Start()
	{

		switch(inputColor)
		{
			case Colors.RED:
				customColor = red;
				break;
			case Colors.GREEN:
				customColor = green;
				break;
			case Colors.YELLOW:
				customColor = yellow;
				break;
			case Colors.BLUE:
				customColor = blue;
				break;
			case Colors.WHITE:
				customColor = white;
				break;
			default:
				customColor = white;
				break;
		}
		//if (customColor != Color(0,0,0,alpha))
			//goalColor = customColor;
		goalColor = customColor;
	}

	

	//&& GameObject.FindWithTag("Player").GetComponent(PlayerMoveScript).shape.Equals(goalShape)
}
//TODO either come back and fix this goal/custom color or revert back to seperate scripts with same code, which is inefficent but effective