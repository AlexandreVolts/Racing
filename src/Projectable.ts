interface Projectable
{
	draw(ctx:CanvasRenderingContext2D):void;
	project(camera:Camera):void;
}