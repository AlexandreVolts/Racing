abstract class Utils
{
	public static readonly MAX_SPEED:number = 200 * (1 / 60);
	public static readonly ACCELERATION:number = Utils.MAX_SPEED / 5;
	public static readonly BREAKING:number = -Utils.MAX_SPEED;

	public static toRadians(x:number):number
	{
		return (x / 180 * Math.PI);
	}
}