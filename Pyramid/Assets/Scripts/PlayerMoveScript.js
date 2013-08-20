//@script RequireComponent(CharacterController)
@script RequireComponent(ParticleEmitter)

var laserOn : boolean = false;
var jetForce : float = -20;//-155;
var style : GUIStyle;
var texture : Texture2D;
var myTexture : Texture2D;
var shape : String = "Square";
var color : String = "Yellow";
var laser : ParticleEmitter;
var fuelTimer : float = 5;
var timerReset : float = 1.5;
var hasFuel : boolean = true;
var speed : float = 50;
var direction : Vector3;
var jumpVelocity : float = 150;

function Update () {

//print(shape);


	if (fuelTimer <= 0)
		hasFuel = false;
	if (timerReset <= 0)
		{
			timerReset = 1.5;
			fuelTimer = 5;
			hasFuel = true;
		}
	if (!hasFuel)
		laserOn = false;
	if((!hasFuel || laserOn == false) && fuelTimer < 5) //count our timer if we need fuel
		timerReset -= Time.deltaTime;

	//Android Controls
	for (var touch : Touch in Input.touches) {
            if (touch.phase != TouchPhase.Ended && touch.phase == TouchPhase.Moved)
				{
	                direction.x = touch.deltaPosition.x/touch.deltaTime;
	            	rigidbody.AddTorque(Vector3((direction.x * Time.deltaTime)* (speed * 4),0,0));
					laserOn = false;
				}
        }

    //Keyboard Controls
	if (Input.GetAxisRaw("Horizontal") == 1)
		{
			rigidbody.AddTorque(Vector3((90)  * speed,0,0));
			laserOn = false;
			//print("right");
		}
	if (Input.GetAxisRaw("Horizontal") == -1)
		{
			rigidbody.AddTorque(Vector3((-90)  * speed,0,0));
			//rigidbody.AddTorque(Vector3(-90,0,0));
			laserOn = false;
			//print("left");
		}
		if (Input.GetAxisRaw("Vertical") == 1)
			jetpack();
	// if (Input.GetButtonDown("Jump"))
	if (Input.GetKeyDown("space"))
	{
		jump();
	}
	/*else if(Input.GetAxisRaw("Vertical") == -1)
	{
		if (shape.Equals("Square"))
			swap('Circle');
		else if (shape.Equals("Circle"))
			swap('Square');
		//checkBlock(); //TODO Make some cool interation with the level here SIKE! this is lame, do colors
		laserOn = false;
	}*/
	else if (Input.GetKeyDown("e")) //TODO SWAP THE TEXTURES
	{
		laserOn = false;
	}
	else if (Input.GetKeyDown("q")) //TODO SWAP THE TEXTURES
	{
		laserOn = false;
	}
	if (laserOn == true)
	{
		laser.emit = true; //turn on nexxessary lasers
	}
	else //be explicit with the laser toggling
	{
		laser.emit = false; //cut off unnexxessary laasers
	}
	//else print("");
}

function jetpack()
{

	if (hasFuel)	//UP 
		{
			rigidbody.AddRelativeForce(0,jetForce,0); //Jetpack, reverse jetpack spouting from top
			laserOn = true;
			fuelTimer -= Time.deltaTime;
		}
}

function jump()
{
	rigidbody.AddForce(Vector3.up * jumpVelocity * speed);
}

function OnGUI()
{
	myTexture = new Texture2D(150,10);
	//////////////BALLER SHIT BANG BANG
	//GUI.backgroundColor = Color.red;
	//GUI.contentColor = Color.red;
	//var r : float = Random.Range(0, 20);
	/*var color : Color = texture.color;//Color.red;// = new Color(r, r, r);
	for (var y : int = 0; y< myTexture.height; y++)
	{
		for(var x : int = 0; x< myTexture.width; x++)
		{
			myTexture.SetPixel(x, y, color);
		}
	}
	//texture.SetPixel(1,1, color);
	myTexture.Apply();	
	
	//GUI.skin.box = style;
	//GUI.enabled = true;
	style.normal.background = texture;
	style.normal.textColor = Color.green;
	*/


	style.normal.background = texture;
	style.alignment = TextAnchor.MiddleLeft;
	style.fontSize = 16;
	GUI.Box(new Rect(10, 15, (fuelTimer*20)+7, 20),"  Fuel", style);	//shows player fuels while fuel is available.

//jetpack button
 
	/*if(Input.touchCount > 0 ){
	 
	for(var i : int = 0; i < Input.touchCount; i++){
	 
	var touch : Touch = Input.GetTouch(i);
	 
	if(touch.phase == TouchPhase.Began &&
	(
		(GUI.Button
			(Rect((Screen.width/2 -110),(Screen.height/2-50)+50,100,50), "Jetpack")
			.HitTest(touch.position)
		)
	)
	)
		jetpack();
	}*/


} 

function OnCollisionStay(collision : Collision)
{
	//var contact = collision.contacts[0];
	for (var contact: ContactPoint in collision.contacts)
		{
			if (contact.otherCollider.tag.Equals("Block"))// "Triangle")
				{
					laser.emit = true;
					//print(otherCollider.name);
				}
		}
}

function checkBlock()
{
	print("Checking block...");
}

function swap(newShape)
{
	shape = newShape;
}