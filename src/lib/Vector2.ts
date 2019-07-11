class Vector2
{
	public x:number;
	public y:number;

	constructor(x:number = 0, y:number = 0)
	{
		this.x = x;
		this.y = y;
	}

	public add(vector:Vector2):Vector2
	{
		this.x += vector.x;
		this.y += vector.y;
		return (this);
	}
	public substract(vector:Vector2):Vector2
	{
		this.x -= vector.x;
		this.y -= vector.y;
		return (this);
	}
}