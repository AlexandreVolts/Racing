class RoadMode
{
	private static readonly MIN_LENGTH:number = 10;
	private static readonly MAX_LENGTH:number = 50;
	private static readonly MIN_CURVE_STRENGTH:number = 100;
	private static readonly MAX_CURVE_STRENGTH:number = 200;
	private static readonly CURVE_ENTER_RATIO:number = 0.33;
	private static readonly CURVE_HOLD_RATIO:number = 0.66;
	private current = 0;
	private curveStrength:number = 0;
	private lastSegment:Segment;
	private length:number;
	
	constructor(lastSegment:Segment)
	{
		this.lastSegment = lastSegment;
		this.setup();
	}

	public setup():void
	{
		this.length = ~~Utils.rand(RoadMode.MIN_LENGTH, RoadMode.MAX_LENGTH);
		this.current = this.length;
		this.curveStrength = 0;
		if (Utils.flip())
			this.curveStrength = ~~Utils.rand(RoadMode.MIN_CURVE_STRENGTH, RoadMode.MAX_CURVE_STRENGTH);
		if (Utils.flip())
			this.curveStrength *= -1;
	}
	public updateSegment(segment:Segment):void
	{
		let dir:number = this.lastSegment.getPosition().x - segment.getPosition().x;
		let curve:number = this.curveStrength;
		let ratio:number = this.current / this.length;

		dir += this.lastSegment.getCurve();
		if (ratio < RoadMode.CURVE_ENTER_RATIO)
			curve *= Utils.easeIn(ratio);
		else if (ratio > RoadMode.CURVE_HOLD_RATIO)
			curve *= Utils.easeOut(ratio);
		else
			curve *= ratio;
		segment.regenerate(new Vector3(dir), curve);
		this.current--;
		if (this.current <= 0)
			this.setup();
		this.lastSegment = segment;
	}
}