class SpriteLoader
{
	private callback:Function;
	private len:number;
	private spritesheets:Map<string, Spritesheet> = new Map<string, Spritesheet>();

	constructor(paths:Array<string>, callback:Function)
	{
		this.callback = callback;
		this.len = paths.length;
		for (let i:number = this.len - 1; i >= 0; i--) {
			this.spritesheets.set(paths[i], new Spritesheet(paths[i], this.load));
		}
	}

	private load = ():void =>
	{
		this.len--;
		if (this.len <= 0)
			this.callback();
	}

	public get(path:string):Spritesheet
	{
		return (this.spritesheets.get(path));
	}
}