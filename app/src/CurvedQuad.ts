/// <reference path="Quad.ts" />

class CurvedQuad extends Quad
{
	private curve:number = 0;
	
	constructor(position:Vector3, size:Vector3, color:string, curve:number = 0)
	{
		super(position, size, color);
		this.setCurve(curve);
	}

	public getCurve():number
	{
		return (this.curve);
	}
	public setCurve(curve:number):void
	{
		this.points[2].x += (curve - this.curve);
		this.points[3].x += (curve - this.curve);
		this.curve = curve;
	}
}