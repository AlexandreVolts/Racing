class Segment implements Projectable
{
	private static readonly DARK:string = "rgb(100, 100, 100)";
	private static readonly LIGHT:string = "rgb(110, 110, 110)";
	private static readonly RUMBLE_LIGHT:string = "white";
	private static readonly RUMBLE_DARK:string = "darkred";
	private static readonly LANES_NUMBER:number = 2;
	private static readonly LANE_WIDTH:number = Road.WIDTH / 40;
	public static readonly DEPTH:number = 14;
	private readonly RUMBLE_COLOR:string;
	private ground:CurvedQuad;
	private hasLanes:boolean = false;
	private lanes:Array<CurvedQuad> = new Array<CurvedQuad>();
	private rumbles:Array<CurvedQuad> = new Array<CurvedQuad>(2);

	constructor(index:number)
	{
		const POSITION:Vector3 = new Vector3(-Road.WIDTH / 2, 0, index * Segment.DEPTH);
		const SIZE:Vector3 = new Vector3(Road.WIDTH, 0, Segment.DEPTH);
		const COLOR:string = ~~((index / Road.RUMBLE_LENGTH) % 2) == 0 ? Segment.DARK : Segment.LIGHT;
		
		this.hasLanes = index % 2 == 0;
		this.RUMBLE_COLOR = ~~((index / Road.RUMBLE_LENGTH) % 2) == 0 ? Segment.RUMBLE_LIGHT : Segment.RUMBLE_DARK;
		this.ground = new CurvedQuad(POSITION, SIZE, COLOR);
		if (this.hasLanes)
			this.addLanes();
		this.addRumbles();
	}
	
	private addLanes():void
	{
		const SIZE:Vector3 = new Vector3(Segment.LANE_WIDTH, 0, Segment.DEPTH);
		const CHUNK_SIZE:number = Road.WIDTH / (Segment.LANES_NUMBER + 1);
		let position:Vector3;

		for (let i:number = 0; i < Segment.LANES_NUMBER; i++) {
			position = this.ground.getPosition().clone();
			position.x += CHUNK_SIZE * (i + 1) - Segment.LANE_WIDTH / 2;
			this.lanes[i] = new CurvedQuad(position, SIZE, "white");
		}
	}
	private addRumbles():void
	{
		const SIZE:Vector3 = new Vector3(Segment.LANE_WIDTH * 4, 0, Segment.DEPTH);
		const LEFT:Vector3 = new Vector3(-Road.WIDTH / 2 - SIZE.x, 0, this.ground.getPosition().z);
		const RIGHT:Vector3 = new Vector3(Road.WIDTH / 2, 0, this.ground.getPosition().z);

		this.rumbles[0] = new CurvedQuad(LEFT, SIZE, this.RUMBLE_COLOR);
		this.rumbles[1] = new CurvedQuad(RIGHT, SIZE, this.RUMBLE_COLOR);
	}
	private apply(func:Segment.ApplyType, arg:any):void
	{
		this.ground[func](arg);
		for (let i:number = this.lanes.length - 1; i >= 0; i--) {
			this.lanes[i][func](arg);
		}
		this.rumbles[0][func](arg);
		this.rumbles[1][func](arg);
	}
	
	public draw(ctx:CanvasRenderingContext2D)
	{
		this.apply(Segment.ApplyType.DRAW, ctx);
	}
	public project(camera:Camera):void
	{
		this.apply(Segment.ApplyType.PROJECT, camera);
	}
	public regenerate(dir:Vector3, curve:number):void
	{
		dir.z = (Road.LENGTH - 1) * Segment.DEPTH;
		this.apply(Segment.ApplyType.MOVE, dir);
		this.apply(Segment.ApplyType.SET_CURVE, curve);
	}
	public getCurve():number
	{
		return (this.ground.getCurve());
	}
	public getPosition():Vector3
	{
		return (this.ground.getPosition());
	}
}

module Segment
{
	export enum ApplyType
	{
		DRAW = "draw",
		MOVE = "move",
		PROJECT = "project",
		SET_CURVE = "setCurve"
	}
}