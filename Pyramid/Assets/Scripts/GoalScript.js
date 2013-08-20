class GoalScript extends MonoBehaviour
{
	//colors defined once in base class

	var alpha : float = 0.3;
	var red : Color = Color(1,0,0,alpha);
	var green : Color = Color(0,1,0,alpha);
	var yellow : Color = Color(1,0.92,0.016,alpha);
	var blue : Color = Color(0,0,1,alpha);
	var white : Color = Color(1,1,1,alpha);

	var goalColor : Color;

	function Start()
	{
		goalColor = white;
	}

	function Update () 
	{
		renderer.material.SetColor("_Color", goalColor);
	}

	function OnCollisionEnter(collision : Collision)
	{
		var contact = collision.contacts[0];
		//print (contact.otherCollider.name);
		if(contact.otherCollider.tag.Equals("Player") && GameObject.FindWithTag("Shield").GetComponent(ShieldScript).shieldColor.Equals(goalColor))
			Destroy(gameObject);
	}
	//&& GameObject.FindWithTag("Player").GetComponent(PlayerMoveScript).shape.Equals(goalShape)
}