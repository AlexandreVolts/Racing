abstract class Utils
{
	public static readonly MAX_SPEED:number = 200 * (1 / 60);
	public static readonly ACCELERATION:number = Utils.MAX_SPEED / 5;
	public static readonly BREAKING:number = -Utils.MAX_SPEED;

	public static project(point:Vector3, target:Vector2 = new Vector2(0, 0)):Vector2
	{
		//const PERSPECTIVE:number = Camera.DEPTH / point.z;
		const PERSPECTIVE:number = 300 / (300 + point.z);
		
		target.x = point.x;
		target.y = point.y;
		return (target.scale(PERSPECTIVE, true));
	}
}