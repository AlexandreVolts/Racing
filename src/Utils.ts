abstract class Utils
{
	public static readonly MAX_SPEED:number = 200 * (1 / 60);
	public static readonly ACCELERATION:number = Utils.MAX_SPEED / 5;
	public static readonly BREAKING:number = -Utils.MAX_SPEED;

	public static project(point:Vector3, view:Vector3, screenSize:Vector2):Vector2
	{
		let output:Vector2 = new Vector2();
		let scale:number;
		
		point.substract(view);
		scale = Camera.DEPTH / point.z;
		output.x = ~~(screenSize.x / 2 + (scale * point.x * screenSize.x) / 2);
		output.y = ~~(screenSize.y / 2 + (scale * point.y * screenSize.y) / 2);
		return (output);
	}
}