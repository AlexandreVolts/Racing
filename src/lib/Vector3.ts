class Vector3 extends Vector2
{
	public z:number;

	constructor(x:number = 0, y:number = 0, z:number = 0)
	{
		super(x, y);
		this.z = z;
	}

	public add(vector:Vector3):Vector3
	{
		super.add(vector);
		this.z += vector.z;
		return (this);
	}
	public substract(vector:Vector3):Vector3
	{
		super.substract(vector);
		this.z -= vector.z;
		return (this);
	}
}