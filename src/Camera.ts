abstract class Camera
{
	public static readonly HEIGHT:number = 1000;
	public static readonly FOV:number = 100;
	public static readonly DEPTH:number = 1 / Math.tan(Camera.FOV / 2);
}