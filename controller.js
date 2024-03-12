
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = null;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    this.onInteractionStart = function(dnd) {
        var x = dnd.xInit;
        var y = dnd.yInit;
        
        if (this.currEditingMode === editingMode.rect) {
            this.currentShape = new Rectangle(x, y, x, y, this.currLineWidth, this.currColour);
        } else if (this.currEditingMode === editingMode.line) {
            this.currentShape = new Line(x, y, x, y, this.currLineWidth, this.currColour);
        }

        if (this.currentShape) {
            drawing.tabForm.push(this.currentShape);
        }
        
        drawing.paint(ctx, canvas);
    };

    this.onInteractionUpdate = function(dnd) {
        var x = dnd.xFinal;
        var y = dnd.yFinal;

        if (this.currentShape) {
            this.currentShape.finalx = x;
            this.currentShape.finaly = y;
            drawing.paint(ctx, canvas);
        }
    };

    this.onInteractionEnd = function(dnd) {
    if (this.currentShape) {
        var x = dnd.xFinal;
        var y = dnd.yFinal;
        this.currentShape.finalx = x;
        this.currentShape.finaly = y;
        this.currentShape = null;
        drawing.paint(ctx, canvas);
    }
    };
};


