class Spritesheet
{
	public position:Vector2 = new Vector2();
	public size:Vector2 = new Vector2();
	private img:HTMLImageElement;
	private isReversed:boolean = false;
	private imgSize:Vector2 = new Vector2();
	private nbTiles:Vector2 = new Vector2(1, 1);
	private onLoad:Function;
	private state:Vector2 = new Vector2();
	private tileSize:Vector2;
	
	constructor(path:string, onLoad:Function)
	{
		this.onLoad = onLoad;
		this.img = new Image();
		this.img.src = path;
		this.img.onload = this.load;
	}

	private load = () =>
	{
		this.imgSize = new Vector2(this.img.width, this.img.height);
		this.size = this.imgSize.clone();
		this.tileSize = this.imgSize.clone();
		this.onLoad();
	}

	public reverse = (isReversed:boolean) =>
	{
		this.isReversed = isReversed;
	}
	public draw(ctx:CanvasRenderingContext2D)
	{
		ctx.save();
		if (this.isReversed)
			this.position.x += this.size.x;
		ctx.translate(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2);
		if (this.isReversed)
			ctx.scale(-1, 1);
		ctx.drawImage(this.img, this.tileSize.x * this.state.x, this.tileSize.y * this.state.y, 
					this.tileSize.x, this.tileSize.y, 0, 0, this.size.x, this.size.y);
		ctx.restore();
	}
	public setNbTiles(nbTiles:Vector2):void
	{
		if (nbTiles.x <= 0)
			nbTiles.x = 1;
		if (nbTiles.y <= 0)
			nbTiles.y = 1;
		this.nbTiles = nbTiles
		this.tileSize.x = ~~(this.imgSize.x / nbTiles.x);
		this.tileSize.y = ~~(this.imgSize.y / nbTiles.y);
	}
	public setState(state:Vector2)
	{
		this.setStateX(state.x);
		this.setStateY(state.y);
	}
	public setStateX(state:number):void
	{
		if (state >= 0 && state <= this.nbTiles.x)
			this.state.x = state;
	}
	public setStateY(state:number):void
	{
		if (state >= 0 && state <= this.nbTiles.y)
			this.state.y = state;	
	}
}