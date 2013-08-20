@script RequireComponent(AudioSource)
public class DeadBugScript extends MonoBehaviour
{
	var splat : AudioClip;
	var timer : float = 10; 
	
	function Awake()
	//When instantiated, play the splat sound
	//Instead of when the bug is destroyed
	{
		audio.PlayOneShot(splat);
	}
	
	
	function Update () 
	//Fade the bug, or just get rid of it
	{
		Destroy(gameObject, 3);
	}
}