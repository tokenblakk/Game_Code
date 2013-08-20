public class BeeScript extends BugScript
{
	var pos : Vector3;
	var speed : Vector2;
	var rand : int;
	var atkTimer : float;
	var flyDamp : float;
	var attacking : boolean;
	var damage : int;
	var dir;
	public var HUD : HUDScript;
	
	function BeeScript()
	{ //should I make bees bounce or try to pass a direction in from the spawner?
		//int side = 
		//this.dir = side;
	}
			
	function Start () 
	{
		pointValue = 3;
		pos = rigidbody.position;
		speed = rigidbody.velocity;
		rand = Random.Range(0, 3);
		atkTimer = 120.0;
		flyDamp = 2.0;
		attacking = false;
		
		/*
		if (rigidbody.position.x = 6)
			dir = 0;
		if (rigidbody.position.x = 7)
			dir = 1;
		if (rigidbody.position.y = 2)
			dir = 2;
		if (rigidbody.position.y = 4)
			dir = 3;
	*/
	}
	
	// Update is called once per frame
	function Update () 
	{ 
		if (rigidbody.position.x <= -2.6)
		{
			rigidbody.velocity.x = -1;
		}
		if (rigidbody.position.x >= 5.1)
		{
			rigidbody.velocity.x *= -1;
		}
		if (rigidbody.position.y <= -7.1)
		{
			rigidbody.velocity.y *= -1;
		}
		if (rigidbody.position.y >= 7.1)
		{
			rigidbody.velocity.y *= -1;
		}
	
	
		if (atkTimer <= 0 )
			{
				if (!attacking)
				{
					//print("Attacking");
					attacking = true;
					Attack();
				}
			}
		else
			{
			switch (rand)
				{
					case 0: // right
						pos.x = (pos.x -((1 * Time.deltaTime) * flyDamp));
						break;
					case 1: // left
						pos.x = (pos.x +((1 * Time.deltaTime) * flyDamp));
						break;
					case 2:// bottom
						pos.y = pos.y -((1 * Time.deltaTime) * flyDamp);
						//pos.x = (pos.x -(2 * Time.deltaTime));
						break;
					case 3: // top
						pos.y = pos.y +((1 * Time.deltaTime) * flyDamp);
						//pos.x = (pos.x -(2 * Time.deltaTime));
						break;
				}
				rigidbody.position = pos;
				atkTimer --;
				flyDamp = Mathf.Clamp(flyDamp - 0.01, 0.25, 2);
			}		
		super.Update();
	}
	
	function Attack()
	{	
		rigidbody.velocity.x = 0;
		rigidbody.velocity.y = 0;
		rigidbody.AddForce(0,0, -300);
		//rigidbody.velocity.z -= 2;
	}
	
	function OnCollisionEnter(collision : Collision)
	{
	//If hit player
	//Damage player from public method in playerhud class
		var contact = collision.contacts[0];
		if (contact.otherCollider.tag.Equals("HUD"))
			{
				Destroy(gameObject);
				HUD.decreaseLives();
			}
			super.OnCollisionEnter(collision);
	}
	
}

