import { LitElement, css, html } from 'lit'

export class AddressForm extends LitElement {


  static get properties() {
    return {
        // zipcode:{type:String},
        // zipcodeError:{type:String}

    }
  }



  constructor() {
    super()
    // this.zipcode=""
    // this.zipcodeError=""

  }



  render() {
    return html`
 

        <label>
        Zip Code:
        <input  @input=${(e)=>this.zipcode=e.target.value}>
        <p class="error">${this.zipcodeError}</p>
      </label>


      

    `
  }

 

  static get styles() {
    return css`

    `
  }






}

customElements.define('address-form', AddressForm)
