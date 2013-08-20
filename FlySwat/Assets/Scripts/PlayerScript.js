@script RequireComponent(AudioSource)
public class PlayerScript extends MonoBehaviour
{
	private var points : float = 0;
	var mouseX : float = 0;
	var mouseY : float = 0;
	var xRotation : float;
	var currentXRotation : float;
	var xRotationV : float;
	var zPosition : float = 4.2;
	var currentZPosition : float;
	var zPositionV : float;
	var swatDamp : float = .02;
	var sensitivity: float = 50;
	var edgeL : float = -7;
	var edgeR : float = 7;
	var edgeT : float = 5.0;
	var edgeB : float = -3.0;
	var swipe : AudioClip; 
	var holdCount : float = 0;
	var engaged : boolean = false;
	var timeout : boolean = false;
	var timeoutTimer : float = 0;
	
	
	function Update () 
	{
		Screen.showCursor = false;
		Screen.lockCursor = true;
		mouseX += Input.GetAxis("Mouse X") * sensitivity * Time.deltaTime;
		mouseY += Input.GetAxis("Mouse Y") *sensitivity *Time.deltaTime; 
		mouseX = Mathf.Clamp(mouseX, edgeL, edgeR);
		mouseY = Mathf.Clamp(mouseY, edgeB, edgeT);
		
		
		if (Input.GetButton("Fire1") && !timeout)
			{
				holdCount += 1;
				if (holdCount >=20)
				{
					holdCount = 0;
					timeout = true;
					timeoutTimer = 0;
				}
				if (!engaged)
					audio.PlayOneShot(swipe);
				engaged = true;
				
				xRotation = 45;
				zPosition = 5.5;
			}
		else
			{
				if (timeoutTimer >= 20)
				{
					timeout = false;
					holdCount = 0;
				}
				else 
					timeoutTimer += 1;
				engaged = false;
				xRotation = -25;
				zPosition = 4.2;
			}
		xRotation = Mathf.Clamp(xRotation, -25, 45);
		currentXRotation = Mathf.SmoothDamp(currentXRotation, xRotation, xRotationV, swatDamp);
		currentZPosition = Mathf.SmoothDamp(currentZPosition, zPosition, zPositionV, swatDamp);
		
		transform.rotation = Quaternion.Euler(currentXRotation,0,0);
		transform.position = Vector3(mouseX, mouseY, currentZPosition);
	}
}
/*
public function increasePoints(point : float)
{
	this.points += point;
}*/