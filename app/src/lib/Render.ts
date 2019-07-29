abstract class Render
{
	public static circle(ctx:CanvasRenderingContext2D, pos:Vector2, radius:number, color:string = "black"):void
	{
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, false);
		ctx.fill();
	}
	public static line(ctx:CanvasRenderingContext2D, p1:Vector2, p2:Vector2, color:string = "black"):void
	{
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
	}
	public static polygon(ctx:CanvasRenderingContext2D, points:Array<Vector2>, color:string = "black"):void
	{
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(points[0].x, points[0].y);
		for (let i:number = 1, len:number = points.length; i < len; i++) {
			ctx.lineTo(points[i].x, points[i].y);
		}
		ctx.closePath();
		ctx.fill();
	}
}