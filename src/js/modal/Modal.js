class Modal {


  constructor(options) {
    this._template = options.template;
    this._rootElement = null;
    this._modalOverlay = null;
    this._closeButton = null;
    this._footerCloseButton = null;    
    this.close = this.close.bind(this);
    this._loadTemplate();
  }


  destroy() {
    this._modalOverlay.removeEventListener('click', this.close);
    this._closeButton.removeEventListener('click', this.close);
    this._footerCloseButton.removeEventListener('click', this.close);    
    // Must be overridden in child class to clean extension properties and events
    delete this._template;
    delete this._rootElement;
    delete this._modalOverlay;
    delete this._closeButton;
  }



  _loadTemplate() {
    this._rootElement = this._parseHTMLFragment(this._template);
    // Create overlay modal container
    this._modalOverlay = document.createElement('DIV');
    this._modalOverlay.className = 'loading-overlay';
    this._modalOverlay.appendChild(this._rootElement);
    // Get close button from template
    this._closeButton = this._rootElement.querySelector('#modal-close');
    this._footerCloseButton = this._rootElement.querySelector('#modal-footer-close');
    this.open();
  }



  _fillAttributes() {
    // Must be overridden in child class to build modal with HTML template attributes
  }


  _parseHTMLFragment(htmlString) {
    const parser = new DOMParser();
    const dom = parser.parseFromString(htmlString, 'text/html');
    return dom.body.firstChild;
  }



  open() {
    document.body.appendChild(this._modalOverlay);
    this._modalOverlay.addEventListener('click', this.close);
    this._closeButton.addEventListener('click', this.close);
    this._footerCloseButton.addEventListener('click', this.close);    
  }


  close(event) {
    // Must be overridden in child class to properly clean extension properties and events
    if (!event || (event && (event.target === this._modalOverlay || event.target === this._closeButton || event.target === this._footerCloseButton))) {
      // Remove the overlay from the body
      document.body.removeChild(this._modalOverlay);
      // Use the child class destroy
      this.destroy();
    }
  }


}


export default Modal;
