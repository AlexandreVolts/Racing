class Background
{
	private static readonly WIDTH:number = 2500;
	private readonly NB_LAYERS:number;
	private skin:Spritesheet;
	
	constructor(descriptor:JSONDescriptor)
	{
		this.NB_LAYERS = descriptor.layers;
		this.skin = descriptor.sprite;
		this.skin.size.x = Background.WIDTH;
		this.skin.setNbTiles(new Vector2(1, this.NB_LAYERS));
		this.resize();
	}

	public draw(ctx:CanvasRenderingContext2D):void
	{
		for (let i:number = 0; i < this.NB_LAYERS; i++) {
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