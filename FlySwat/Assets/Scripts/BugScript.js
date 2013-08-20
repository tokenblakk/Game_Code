public class BugScript extends MonoBehaviour
{
	//@script RequireComponent(AudioSource)
	var deadBug: Transform;
	var pointValue : int = 1;
	//var splat : AudioClip;
	
	/*function BugScript()
	{
		
	}
	*/
	function OnCollisionEnter(collision : Collision)
	{
	//When Hit, destroy and change to dead bug. 
	//Dead bug should have some fading mechanism.
		var contact = collision.contacts[0];
		if (contact.otherCollider.tag.Equals("Player"))
			{
				Destroy(gameObject);
				var theDeadBug : Transform;
				theDeadBug = Instantiate(deadBug, transform.position, Quaternion.Euler(0,180,0));
			}
	}
	
	function GetPointValue()
	{
		return pointValue;
	}
	
	function Update () 
	{
	
		Destroy(gameObject, 6);
	
	}
}
