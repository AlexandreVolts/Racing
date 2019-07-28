class Spritesheet
{
	public position:Vector2 = new Vector2();
	public size:Vector2 = new Vector2();
	private img:HTMLImageElement;
	private onLoad:Function;
	private imgSize:Vector2 = new Vector2();
	private state:number = 0;
	private isReversed:boolean = false;
	
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
		this.onLoad();
	}

	public reverse = (isReversed:boolean) =>
	{
		this.isReversed = isReversed;
	}
	public draw(ctx:CanvasRenderingContext2D)
	{
		let width:number = (this.imgSize.x / 12);

		ctx.save();
		if (this.isReversed)
			this.position.x += this.size.x;
		ctx.translate(this.position.x - this.size.x / 2, this.position.y - this.size.y / 2);
		if (this.isReversed)
			ctx.scale(-1, 1);
		ctx.drawImage(this.img, this.state * width, 0, width, this.imgSize.y, 0, 0, this.size.x, this.size.y);
		ctx.restore();
	}
	public setState(state:number)
	{
		if (state < 12)
			this.state = state;
	}
}