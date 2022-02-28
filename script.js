function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.makeElement = function(){
    let newElement;
    if(this.selector[0] === "."){
      newElement = document.createElement("div");
      newElement.classList.add(this.selector.substring(1));
      //console.log(newElement);
    }else if(this.selector[0] === "#"){
      newElement = document.createElement("div");
      newElement.setAttribute("id", this.selector.substring(1));
    }

    newElement.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px`;
    newElement.style.textContent = "This is my new element";

    document.body.appendChild(newElement);

};

const newBlock = new DomElement(".block", 100, 100, "red", 32);
newBlock.makeElement();
