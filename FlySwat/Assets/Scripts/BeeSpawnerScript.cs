using UnityEngine;
using System.Collections;

public class BeeSpawnerScript : BugSpawnerScript {
	
	int rand;
	//Vector3 position; 
		
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
		position = new Vector3(Random.Range(-7f, 7f), Random.Range(-2.5f, 5f) , 5.7f);
		Instantiate(bug, position, Quaternion.Euler(0,180,0)); //Bugs face backwards otherwise
	}	
	
	*/

	public override void spawn(Transform bee)
	{
		rand = Random.Range(0, 3);
		switch (rand)
			{
				case 0: //from right
					base.position = new Vector3(7, Random.Range(-2.5f, 5f) , 5.7f);
					print("right");
					break;
				case 1: // from left
					position = new Vector3(-7, Random.Range(-2.5f, 5f) , 5.7f);
			print("left");
					break;
				case 2: // from bottom
					position = new Vector3(Random.Range(-7f, 7f), -2.5f , 5.7f);
					//pos.x = (pos.x -(2 * Time.deltaTime));
			print("bot");
					break;
				case 3: //from top
					position = new Vector3(Random.Range(-7f, 7f), 4f , 5.7f);
					//pos.x = (pos.x -(2 * Time.deltaTime));
			print("top");
					break;
			}

		Instantiate(bee, position, Quaternion.Euler(0,180,0)); //Bugs face backwards otherwise
	}	
}
