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
	TAB = 9,
	ENTER = 13,
	SHIFT = 16,
	CTRL = 17,
	ALT = 18,
	ESCAPE = 27,
	END = 35,
	LEFT = 37,
	UP = 38,
	RIGHT = 39,
	DOWN = 40,
	INSERT = 45,
	DELETE = 46,
	ZERO = 48,
	NINE = 57,
	A = 65,
	D = 68,
	Q = 81,
	S = 83,
	Z = 90
}