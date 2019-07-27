abstract class Utils
{
	public static readonly MAX_SPEED:number = 400;
	public static readonly ACCELERATION:number = Utils.MAX_SPEED / 2;
	public static readonly BREAKING:number = -Utils.MAX_SPEED / 2;
	public static readonly FRICTION:number = 0.9975;

	public static toRadians(x:number):number
	{
		return (x / 180 * Math.PI);
	}
}