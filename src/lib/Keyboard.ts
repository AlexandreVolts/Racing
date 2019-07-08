class Keyboard
{
	private keys:Map<Keys, boolean> = new Map<Keys, boolean>();

	constructor()
	{
		this.keys.set(Keys.LEFT, false);
		this.keys.set(Keys.UP, false);
		this.keys.set(Keys.RIGHT, false);
		this.keys.set(Keys.DOWN, false);
		window.addEventListener("keydown", this.onKeyEvent);
		window.addEventListener("keyup", this.onKeyEvent);
	}

	private onKeyEvent = (e:KeyboardEvent) =>
	{
		this.keys.set(e.keyCode, e.type == "keydown");
	}
}

enum Keys
{
	LEFT = 37,
	UP = 38,
	RIGHT = 39,
	DOWN = 40
}