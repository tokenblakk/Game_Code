using UnityEngine;
using System.Collections;

public class MothSpawnerScript : BugSpawnerScript {

	// Use this for initialization
	public void Start () 
	{
		base.Start();
	}
	
	// Update is called once per frame
	public void Update () 
	{
		base.Update();
	}
	
	/*void spawn(Transform bug)
	{
		position = new Vector3(Random.Range(-7f, 7f), Random.Range(-3f, 5f) , 5.7f);
		Instantiate(bug, position, Quaternion.Euler(0,180,0)); //Bugs face backwards otherwise
	}	
	
	/*override void spawn(Transform moth)
	{
		
	}*/
}
