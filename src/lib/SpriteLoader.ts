class SpriteLoader
{
	private callback:Function;
	private len:number;
	private spritesheets:Map<string, Spritesheet> = new Map<string, Spritesheet>();

	constructor(paths:Array<string>, callback:Function)
	{
		this.callback = callback;
		this.len = paths.length - 1;
		for (let i:number = this.len; i >= 0; i--) {
			this.spritesheets.set(paths[i], new Spritesheet(paths[i], this.load))
		}
	}

	private load = ():void =>
	{
		this.len--;
		if (this.len <= 0)
			this.callback();
	}
}