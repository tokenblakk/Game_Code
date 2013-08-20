#pragma strict
var alpha : float = 0.3;
var red : Color = Color(1,0,0,alpha);
var green : Color = Color(0,1,0,alpha);
var yellow : Color = Color(1,0.92,0.016,alpha);
var blue : Color = Color(0,0,1,alpha);
var white : Color = Color(1,1,1,alpha);

//enum Colors {RED, GREEN, YELLOW, BLUE, WHITE};
var inputColor : Colors;
var gemColor : Color;
var eulerAngleVelocity : Vector3 = Vector3 (0, 100, 0);
var deltaRotation : Quaternion;

function Start () 
{
	switch(inputColor)
			{
				case Colors.RED:
					gemColor = red;
					break;
				case Colors.GREEN:
					gemColor = green;
					break;
				case Colors.YELLOW:
					gemColor = yellow;
					break;
				case Colors.BLUE:
					gemColor = blue;
					break;
				case Colors.WHITE:
					gemColor = white;
					break;
				default:
					gemColor = white;
					break;
			}
}

function Update () 
{
	renderer.material.SetColor("_Color", gemColor);
	//rotate gem
	deltaRotation = Quaternion.Euler(eulerAngleVelocity * Time.deltaTime);
    rigidbody.MoveRotation(rigidbody.rotation * deltaRotation);
}

function OnCollisionEnter(collision : Collision)
	{
		var contact = collision.contacts[0];
		//print (contact.otherCollider.name);
		if(contact.otherCollider.tag.Equals("Player"))
		{
			GameObject.FindWithTag("Shield").GetComponent(ShieldScript).setInputColor(inputColor.ToString());
			Destroy(gameObject);
		}
	}