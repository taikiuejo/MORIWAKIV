document.addEventListener('DOMContentLoaded', function () {
  new globalNav();
});

class globalNav{
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.js-humberger-menu__trigger');
    this.DOM.header = document.querySelector('.header');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }
  
  _toggle() {
    this.DOM.header.classList.toggle('menu-open');
  }
  
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}


