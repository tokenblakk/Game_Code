public class MothScript extends BugScript
{
	//var deadMoth : Transform;// = gameObject.getComponent<Transform>();
	//var self : Rigidbody;
	var pos : Vector3;
	var speed : Vector2;
	var rand : int;
	
	function Start()
	{
		//var self = rigidbody;	
		pointValue = 2;
		pos = rigidbody.position;
		speed = rigidbody.velocity;
		rand = Random.Range(0, 3);
	}
	
	/*function MothScript()
	{

		//this is for making a dead moth thisMoth = GameObject.Instantiate(
		//
	}*/
	
	function Update () 
	{
	switch (rand)
		{
		case 0:
			pos.x = (pos.x -(2 * Time.deltaTime));
			break;
		case 1:
			pos.x = (pos.x +(2 * Time.deltaTime));
			break;
		case 2:
			pos.y = pos.y -(2 * Time.deltaTime);
			//pos.x = (pos.x -(2 * Time.deltaTime));
			break;
		case 3:
			pos.y = pos.y +(2 * Time.deltaTime);
			//pos.x = (pos.x -(2 * Time.deltaTime));
			break;
		}
		rigidbody.position = pos;
		
		//speed.y += -0.001;
		//speed.x += 0.002; 
		//rigidbody.velocity = speed;
		
		//Destroy(gameObject, 3);
		super.Update();
	}
}