/* eslint-disable require-jsdoc */
export default class Toast extends HTMLElement {
  constructor() {
    super();
  }

  set errorMessage(message) {
    this._errorMessage = message;
    this._renderErrorMessage();
  }

  set successMessage(message) {
    this._successMessage = message;
    this._renderSuccessMessage();
  }

  _renderSuccessMessage() {
    this.innerHTML = `
      <div id="successToast" class="">
        <div class="toast toast--success">
          <div class="toast__header">
            <h1 class="toast__title">
              ${this._successMessage}
            </h1>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      this._clearElement();
    }, 3000);
  }

  _renderErrorMessage() {
    this.innerHTML = `
      <div id="errorToast" class="">
        <div class="toast toast--error">
          <div class="toast__header">
            <h1 class="toast__title">
              ${this._errorMessage}
            </h1>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      this._clearElement();
    }, 3000);
  }

  _clearElement() {
    this.innerHTML = '';
  }
}

customElements.define('toast-message', Toast);
