// Implémenter ici les 4 classes du modèle.
// Drawing
function Drawing() {
    this.tabForm = [];
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
