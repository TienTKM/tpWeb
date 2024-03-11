// Implémenter ici les 4 classes du modèle.
// Drawing
function Drawing() {
    this.tabForm = [];
    this.paint = function (ctx, canvas) {
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
        for (const element of this.tabForm) {
            element.paint(ctx);
        }
    }
    // Implement get form
    this.getForms = function () {
        return this.tabForm;
    }
}

// Rectangle
function Rectangle(initx, inity, finalx, finaly, thickness, color) {
    this.initx = initx;
    this.inity = inity;
    this.finalx = finalx;
    this.finaly = finaly;
    this.thickness = thickness;
    this.color = color;
    this.paint = function (ctx) {
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.initx, this.inity, this.finalx, this.finaly);
        ctx.stroke();
    }
    // Implement getters
    this.getInitX = function () {
        return this.initx;
    }
    this.getInitY = function () {
        return this.inity;
    }
    this.getFinalX = function () {
        return this.finalx;
    }
    this.getFinalY = function () {
        return this.finaly;
    }
    // Get thickness and color
    this.getThickness = function () {
        return this.thickness;
    }
    this.getColor = function () {
        return this.color;
    }
}

// Line
function Line(initx, inity, finalx, finaly, thickness, color) {
    this.initx = initx;
    this.inity = inity;
    this.finalx = finalx;
    this.finaly = finaly;
    this.thickness = thickness;
    this.color = color;
    this.paint = function (ctx) {
        ctx.lineWidth = this.thickness;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.initx, this.inity);
        ctx.lineTo(this.finalx, this.finaly);
        ctx.stroke();
    }
    // Implement getters
    this.getInitX = function () {
        return this.initx;
    }
    this.getInitY = function () {
        return this.inity;
    }
    this.getFinalX = function () {
        return this.finalx;
    }
    this.getFinalY = function () {
        return this.finaly;
    }
    // Get thickness and color
    this.getThickness = function () {
        return this.thickness;
    }
    this.getColor = function () {
        return this.color;
    }
}

// N'oubliez pas l'héritage !
