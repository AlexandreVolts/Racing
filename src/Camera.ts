abstract class Camera
{
	public static readonly HEIGHT:number = 50;
	public static readonly FOV:number = 85;
	public static readonly DEPTH:number = 1 / Math.tan(Camera.FOV / 2);
}