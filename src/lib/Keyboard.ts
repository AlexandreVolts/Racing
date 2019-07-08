class Keyboard
{
	private keys:Map<Key, boolean> = new Map<Key, boolean>();

	constructor()
	{
		window.addEventListener("keydown", this.onKeyEvent);
		window.addEventListener("keyup", this.onKeyEvent);
	}

	private onKeyEvent = (e:KeyboardEvent) =>
	{
		this.keys.set(e.keyCode, e.type == "keydown");
	}

	public isKeyDown(key:Key)
	{
		return (this.keys.get(key));
	}
}

enum Key
{
	LEFT = 37,
	UP = 38,
	RIGHT = 39,
	DOWN = 40,
	Q = 81,
	Z = 90,
	D = 68,
	S = 83
}