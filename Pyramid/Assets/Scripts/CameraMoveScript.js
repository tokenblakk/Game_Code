var player : GameObject;
var cameraLag : float = 0.9;
//var xRotation : float  = 6;
//var yRotation : float  = 6;
var yPosition : float;
var zPosition : float;
var xPosition : float;
//player.rigidbody.position.y;
//var targetYRotation : float;
var targetXRotationV : float;
//var targetYRotationV : float;
var targetYV : float;
var targetXV : float;
var targetZV : float;
var rotationSpeed : float = 0.5;
var targetYPosition : float;
var targetZPosition : float;
var targetXPosition : float; //Zoom
var mouseLookSpeed : float = 50;

function Update () 
{
	var playerTrans = player.GetComponent(Transform);
	yPosition = playerTrans.position.y;
	zPosition = playerTrans.position.z;
	xPosition = playerTrans.position.x + 10;

	if (Input.GetAxisRaw("Horizontal") == 1 || Input.GetAxisRaw("Horizontal") == -1)
		{
			targetXPosition = xPosition + 2;
			targetXPosition = Mathf.SmoothDamp(xPosition, targetXPosition, targetXV, rotationSpeed);//rotational speed
		}
	else 
		{	
			targetXPosition = xPosition + 5;
			targetXPosition = Mathf.SmoothDamp(xPosition, targetXPosition, targetXV, rotationSpeed);//rotational speed
		}
	targetYPosition = Mathf.SmoothDamp(targetYPosition,  yPosition +1, targetYV, rotationSpeed);
	targetZPosition = Mathf.SmoothDamp(targetZPosition,  zPosition +1, targetZV, rotationSpeed);
	transform.position.z = targetZPosition;
	transform.position.y = targetYPosition;
	transform.position.x = targetXPosition;
	Camera.main.transform.LookAt(playerTrans);
	//transform.rotation = Quaternion.Euler(0,targetYRotation,0);
	//transform.eulerAngles = Vector3(Mathf.Clamp(0.0,yRotation,0.0), 0, 0);
	//transform.rotation.x = Mathf.Clamp(transform.rotation.x,0.0,30.0);
}
