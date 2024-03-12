
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = null;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').addEventListener('click', function() {
        this.currEditingMode = editingMode.rect;
    }.bind(this));

    document.getElementById('butLine').addEventListener('click', function() {
        this.currEditingMode = editingMode.line;
    }.bind(this));

    document.getElementById('spinnerWidth').addEventListener('change', function(event) {
        this.currLineWidth = parseInt(event.target.value);
    }.bind(this));

    document.getElementById('colour').addEventListener('change', function(event) {
        this.currColour = event.target.value;
    }.bind(this));

    new DnD(canvas, this);

    this.onInteractionStart = function(dnd) {
        var x = dnd.xInit;
        var y = dnd.yInit;
        
        if (this.currEditingMode === editingMode.rect) {
            this.currentShape = new Rectangle(x, y, x, y, this.currLineWidth, this.currColour);
        } else if (this.currEditingMode ===  editingMode.line) {
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
		dnd.xInit = dnd.xFinal;
        dnd.yInit = dnd.yFinal;
        // Update the shape list
        drawing.updateShapeList();
		state.clearAllNextState(drawing.tabForm);
    }
    };
};

function UndoRedo(){
    this.undoButton = document.getElementById("undoButton");
    this.redoButton = document.getElementById("redoButton");

    this.undoButton.addEventListener("click", function() {
        var previousState = state.returnPreviousState();
        if (previousState) {
            console.log(previousState);
            console.log(drawing.tabForm);
            drawing.tabForm = previousState;
            drawing.paint(ctx, canvas);
            drawing.updateShapeList();
        } else {
            console.log("No previous state available.");
        }
    });

    this.redoButton.addEventListener("click", function() {
        var nextState = state.goNextState();
        if (nextState) {
            console.log(nextState);
            console.log(drawing.tabForm);
            drawing.tabForm = nextState;
            drawing.paint(ctx, canvas);
            drawing.updateShapeList();
        } else {
            console.log("No next state available.");
        }
    });
}




