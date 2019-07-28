/// <reference path="lib/Vector2.ts" />

class Player implements Projectable
{
	private static readonly SIZE:Vector2 = new Vector2(1000, 1000);
	private position:Vector3 = new Vector3();
	private skin:Spritesheet;

	constructor(skin:Spritesheet)
	{
		this.skin = skin;
	}

	public draw(ctx:CanvasRenderingContext2D):void
	{
		this.skin.draw(ctx);
	}
	public move(camera:Camera):void
	{
		const Z_SPEED:number = camera.getSpeed().z;
		const BUMP:number = Math.random() * (Z_SPEED / Utils.MAX_SPEED) * 2;

		this.position.y = BUMP;
		this.position.z = 100;
	}
	public project(camera:Camera):void
	{
		camera.projectPoint(this.position, this.skin.position);
		this.skin.size = Player.SIZE.scale(camera.getPerspectiveRatio(this.position.z));
	}
	public turn(dir:number):void
	{
		this.skin.setState(dir != 0 ? 1 : 0);
		this.skin.reverse(dir == -1);
	}
}