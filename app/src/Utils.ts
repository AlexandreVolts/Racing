/// <reference path="road/Road.ts" />

abstract class Utils
{
	public static readonly MAX_SPEED:number = 350;
	public static readonly HORIZONTAL_SPEED:number = 12500;
	public static readonly ACCELERATION:number = Utils.MAX_SPEED / 2;
	public static readonly BREAKING:number = -Utils.MAX_SPEED / 2;
	public static readonly FRICTION:number = 0.9975;

	/**
	 * Apply an ease-in function and return the result
	 * @param x A value between 0 and 1
	 * @return a cubic eased-in value between 0 and 1
	 */
	public static easeIn(x:number):number
	{
		return (x * x);
	}
	/**
	 * Apply an ease-out function and return the result
	 * @param x A value between 0 and 1
	 * @return a cubic eased-out value between 0 and 1
	 */
	public static easeOut(x:number):number
	{
		return (1 - (1 - x) * x);
	}
	/**
	 * Apply a ease-in-out function and return the result
	 * @param x A value between 0 and 1
	 * @return a cubic eased-in-out value between 0 and 1
	 */
	public static easeInOut(x:number):number
	{
		return (0.5 - Math.cos(x * Math.PI) / 2);
	}
	/**
	 * Generate a random boolean
	 * @return a boolean randomly generated
	 */
	public static flip():boolean
	{
		return (Math.random() < 0.5);
	}
	/**
	 * Generate a random number between min and max values
	 * @param min Minimum value of the generated number 
	 * @param max Maximum valie of the generated number
	 * @return a randomly generated number between min and max values
	 */
	public static rand(min:number, max:number):number
	{
		return (min + Math.random() * (max - min));
	}
	/**
	 * Get a value as degree and return its radian value
	 * @param x Degree angle
	 * @return a radian angle
	 */
	public static toRadians(x:number):number
	{
		return (x / 180 * Math.PI);
	}
}