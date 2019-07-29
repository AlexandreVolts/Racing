class Background
{
	private static readonly WIDTH:number = 2500;
	private readonly NB_LAYERS:number;
	private skin:Spritesheet;
	
	constructor(spritesheet:Spritesheet, nbLayers:number)
	{
		this.NB_LAYERS = nbLayers;
		this.skin = spritesheet;
		this.skin.size.x = Background.WIDTH;
		this.skin.setNbTiles(new Vector2(1, nbLayers));
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