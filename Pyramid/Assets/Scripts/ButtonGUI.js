var buttonTex : Texture2D;
var style : GUIStyle;
function OnGUI ()
{

	
	if(GUI.RepeatButton(Rect((Screen.width/2 -350),(Screen.height/2 + 100),100,50), buttonTex, style))
		{
			GameObject.FindWithTag("Player").GetComponent(PlayerMoveScript).jetpack();
		}
	else
		GameObject.FindWithTag("Player").GetComponent(PlayerMoveScript).laserOn = false;

}