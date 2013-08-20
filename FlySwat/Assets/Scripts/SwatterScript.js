public class SwatterScript extends MonoBehaviour
{
	var swat : AudioClip;
	//public var pointValue : float;
	public var HUD : HUDScript;
	function OnCollisionEnter(collision : Collision) 
	{
		//HUD = GameObject.Find
		 //HUD = GetComponent(HUDScript); //Grandparent player screen GUI
	    //Play Sound
	    //Add Points
	    
	    /////
	    //         Programing paradigm
	    //for (var contact : ContactPoint in collision.contacts) <-
	    //For loops create an entire array of points contacted. 
	    //So this would cause a series of points where the score was added to
	    //Contacts between faces of the bug object and the swatter resulted in varying score changes per hit.
	    var contact = collision.contacts[0];
	    	//print(contact.otherCollider);
	    	//contact.otherCollider.name.Contains("Bug") || 
	    	if (contact.otherCollider.tag.Equals("Bug"))
	    	{
	    		audio.PlayOneShot(swat);
	    		if (contact.otherCollider.name.Contains("Bug"))
	    		{
	    			if (collision.gameObject.GetComponent(BugScript))
	    				HUD.increasePoints(collision.gameObject.GetComponent(BugScript).GetPointValue());
	    		}
	    		
	    		if (contact.otherCollider.name.Contains("Moth"))
	    		{
	    			if (collision.gameObject.GetComponent(MothScript))
	    				HUD.increasePoints(collision.gameObject.GetComponent(MothScript).GetPointValue());
	    		}
	    		//contact.otherCollider.transform.);
	    	}
	        //add the alternate bugs and their scores here.
	    
	}
	function Update () {
	}
}