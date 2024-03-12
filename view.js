// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function (ctx) {
    //Manage color
    ctx.lineWidth = this.getThickness();
    ctx.strokeStyle = this.getColor();
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX() - this.getInitX(), this.getFinalY() - this.getInitY());
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    //Manage color
    ctx.lineWidth = this.getThickness();
    ctx.strokeStyle = this.getColor();
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

// Ajouter une fonction updateShapeList() pour afficher la liste des formes
Drawing.prototype.updateShapeList = function () {
    var list = document.getElementById('shapeList');
    var id = 0;
    list.innerHTML = '';
    this.getForms().forEach(function (eltDuTableau) {
        var li = document.createElement('li');

        // Create button element
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-default';

        // Create span element for glyphicon
        var span = document.createElement('span');
        span.className = 'glyphicon glyphicon-remove-sign';

        // Append span to button
        button.appendChild(span);

        // Append button to li
        li.appendChild(button);

        // Add shape name and their id after the button
        li.appendChild(document.createTextNode(eltDuTableau.constructor.name + ' ' + (1+id++)));

        list.appendChild(li);

        // When button is clicked, remove the drawing from tabForm using the position in the shape list
        button.addEventListener('click', function () {
            let listArray = Array.from(list.children);
            let position = listArray.indexOf(li);
            drawing.tabForm.splice(position, 1);
            drawing.paint(ctx, canvas);
            drawing.updateShapeList();
        });
    });
}
