// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.xInit = 0;
  this.yInit = 0;
  this.xFinal = 0;
  this.yFinal = 0;
  this.press = false;

  // Developper les 3 fonctions gérant les événements
  this.pression = function (evt) {
    this.press = true;
    var pos = getMousePosition(canvas, evt);
    this.xInit = pos.x;
    this.yInit = pos.y;
    console.log("Pression : " + this.xInit + " " + this.yInit);
    interactor?.onInteractionStart?.(this);
  }.bind(this);

  this.deplacement = function (evt) {
    if (this.press) {
      var pos = getMousePosition(canvas, evt);
      this.xFinal = pos.x;
      this.yFinal = pos.y;
      console.log("Déplacement : " + this.xFinal + " " + this.yFinal);
      interactor?.onInteractionUpdate?.(this);
    }
  }.bind(this);

  this.relachement = function (evt) {
    this.press = false;
    var pos = getMousePosition(canvas, evt);
    this.xFinal = pos.x;
    this.yFinal = pos.y;
    console.log("Relachement : " + this.xFinal + " " + this.yFinal);
    interactor?.onInteractionEnd?.(this);
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown", this.pression, false);
  canvas.addEventListener("mousemove", this.deplacement, false);
  canvas.addEventListener("mouseup", this.relachement, false);
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}
