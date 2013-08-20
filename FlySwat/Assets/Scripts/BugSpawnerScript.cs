using UnityEngine;
using System.Collections;

public class BugSpawnerScript : MonoBehaviour {
	
		public Transform Bug;// = gameObject.GetComponent<Transform>();
		float timer;
		public float defaultTime;
		bool canSpawn = false;
		public Vector3 position; 
	
	// Use this for initialization
	public void Start () 
	{
		timer = defaultTime;
		spawn(Bug);
		canSpawn = false;		
	}
	
	// Update is called once per frame
	public void Update () 
	{
		if (canSpawn)
		{
			spawn(Bug);
			canSpawn = false;
		}
		if (timer <= 0)
		{
			canSpawn = true;
			timer = defaultTime;
		}
		timer -= Time.deltaTime;
		//print(timer);
	}
	
	public virtual void spawn(Transform bug)
	{
		position = new Vector3(Random.Range(-7f, 7f), Random.Range(-2.5f, 5f) , 5.7f);
		Instantiate(bug, position, Quaternion.Euler(0,180,0)); //Bugs face backwards otherwise
	}	
}
