export default class Player{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.wdith = 50;
        this.height = 50;
        this.speed = 4;
    }

    draw(ctx) {
        ctx.strokeStyle = 'yellow';
        ctx.strokeRect(this.x, this.y, this.wdith, this.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        

    }
}