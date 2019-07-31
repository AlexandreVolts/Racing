class Background
{
	private static readonly WIDTH:number = 2500;
	private static readonly SPEED:number = 0.005;
	private readonly NB_LAYERS:number;
	private skin:Spritesheet;
	private xLayersPositions:Array<number> = new Array<number>();
	
	constructor(descriptor:JSONDescriptor)
	{
		this.NB_LAYERS = descriptor.layers;
		this.skin = descriptor.sprite;
		this.skin.size.x = Background.WIDTH;
		for (let i:number = 0; i < this.NB_LAYERS; i++) {
			this.xLayersPositions.push(0);
		}
		this.skin.setNbTiles(new Vector2(1, this.NB_LAYERS));
		this.resize();
	}

	public move(curve:number):void
	{
		for (let i:number = 0; i < this.NB_LAYERS; i++) {
			this.xLayersPositions[i] += -curve * Background.SPEED * (i + 1);
		}
	}
	public draw(ctx:CanvasRenderingContext2D):void
	{
		for (let i:number = 0; i < this.NB_LAYERS; i++) {
			this.skin.position.x = this.xLayersPositions[i];
			this.skin.setStateY(i);
			this.skin.draw(ctx);
		}
	}
	public resize():void
	{
		this.skin.size.y = window.innerHeight * 0.5;
		this.skin.position.y = - this.skin.size.y / 2;
	}
}

module Background
{
	export enum Type
	{
		PLAINS = "Plains"
	}
}