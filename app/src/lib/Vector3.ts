class Vector3 extends Vector2
{
	public z:number;

	constructor(x:number = 0, y:number = 0, z:number = 0)
	{
		super(x, y);
		this.z = z;
	}

	public add(vector:Vector3, apply:boolean = false):Vector3
	{
		if (!apply)
			return (new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z));
		super.add(vector, true);
		this.z += vector.z;
		return (this);
	}
	public clone():Vector3
	{
		return (new Vector3(this.x, this.y, this.z));
	}
	public subtract(vector:Vector3, apply:boolean = false):Vector3
	{
		if (!apply)
			return (new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z));
		super.subtract(vector, true);
		this.z -= vector.z;
		return (this);
	}
	public scale(n:number, apply:boolean = false):Vector3
	{
		if (!apply)
			return (new Vector3(this.x * n, this.y * n, this.z * n));
		super.scale(n, true);
		this.z *= n;
		return (this);
	}
}