interface JSONDescriptor
{
	name:string,
	path:string,
	layers:number,
	width:number,
	sprite:Spritesheet
}

class AssetLoader
{
	private static readonly PATH:string = "assets/json/config.json";
	private datas:any;
	private map:Map<string, JSONDescriptor> = new Map<string, JSONDescriptor>();
	private onLoad:Function;
	private spriteLoader:SpriteLoader;
	
	constructor(onLoad:Function)
	{
		new JSONLoader(AssetLoader.PATH, this.load);
		
		this.onLoad = onLoad;
	}

	private getPathArray():Array<string>
	{
		let output:Array<string> = new Array<string>();

		for (let i:number = this.datas.backgrounds.length - 1; i >= 0; i--)
			output.push(this.datas.backgrounds[i].path);
		for (let i:number = this.datas.characters.length - 1; i >= 0; i--)
			output.push(this.datas.characters[i].path);
		return (output);
	}
	private load = (datas:any):void =>
	{
		this.datas = JSON.parse(datas);
		this.spriteLoader = new SpriteLoader(this.getPathArray(), () =>
		{
			this.setupMap();
			this.onLoad();
		});
	}
	private setupMap():void
	{
		const BACKGROUNDS:Array<JSONDescriptor> = this.datas.backgrounds;
		let datas:Array<JSONDescriptor> = BACKGROUNDS.concat(this.datas.characters);

		for (let i:number = datas.length - 1; i >= 0; i--) {
			datas[i].sprite = this.get(datas[i].path);
			this.map.set(datas[i].name, datas[i]);
		}
	}
	
	public get(id:string):Spritesheet
	{
		return (this.spriteLoader.get(id));
	}
	public getJSONDescriptor(id:string):JSONDescriptor
	{
		return (this.map.get(id));
	}
}