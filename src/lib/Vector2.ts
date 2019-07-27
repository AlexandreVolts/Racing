class Vector2
{
	public x:number;
	public y:number;

	constructor(x:number = 0, y:number = 0)
	{
		this.x = x;
		this.y = y;
	}

	public static getRandomVector(scale:number = 1):Vector2
	{
		return (Vector2.getVectorFromAngle(Math.random() * (Math.PI * 2), scale));
	}
	public static getVectorFromAngle(angle:number, scale:number = 1):Vector2
	{
		return (new Vector2(Math.cos(angle) * scale, Math.sin(angle) * scale));
	}
	
	public add(vector:Vector2, apply:boolean = false):Vector2
	{
		if (!apply)
			return (new Vector2(this.x + vector.x, this.y + vector.y));
		this.x += vector.x;
		this.y += vector.y;
		return (this);
	}
	public clone():Vector2
	{
		return (new Vector2(this.x, this.y));
	}
	public subtract(vector:Vector2, apply:boolean = false):Vector2
	{
		if (!apply)
			return (new Vector2(this.x - vector.x, this.y - vector.y));
		this.x -= vector.x;
		this.y -= vector.y;
		return (this);
	}
	public scale(n:number, apply:boolean = false):Vector2
	{
		if (!apply)
			return (new Vector2(this.x * n, this.y * n));
		this.x *= n;
		this.y *= n;
		return (this);
	}
}