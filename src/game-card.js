import { LitElement, html } from '@polymer/lit-element';

class GameCard extends LitElement {

  static get properties() {
    return {
      title: String,
      date: String,
      lang: String,
      img: String,
      about: String,
      github: String,
      project: String,
      play: String,
      ost: String,
      small: Boolean
    };
  }

  constructor() {
    super();

    // Initialize properties
    this.title = "Untitled";
    this.date = "2018";
    this.lang = "LANG";
    this.img = "campagne";
    this.about = "Missing description.";
    this.project = "";
    this.github = "";
    this.play = "";
    this.ost = "";
    this.small = false;
  }

  // Element template
  render() {
    let isSmall = this.small ? " smallName" : "";
    return html`
      <style>
      .card {
        width: 256px;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        margin: 32px;
      }
      .name {
          padding: 32px 16px 0px 16px;
          font-size: 32px;
          font-weight: 800;
          font-style: italic;
        }
      .smallName {
        font-size: 24px;
      }
      .year {
        padding: 0 0 16px 16px;
        font-size: 24px;
        font-weight: 400;
        font-style: italic;
        opacity: .67;
      }
      img {
          width: 256px;
      }
      .desc {
          font-size: 16px;
          padding: 16px;
          opacity: .89;
      }
      .buttons {
          padding: 0 16px 16px 16px;
          display: flex;
          flex-flow: row;
      }
      a {
          margin: 0 16px 0 0;
          text-decoration: none;
          color: #009f4f;
          font-weight: 600;
          font-size: 16px;
      }
      </style>
      <div class="card">
        <div class="name${isSmall}">${this.title}</div>
        <div class="year">${this.date} • ${this.lang}</div>
        <img src="assets/${this.img}.png" alt="">
        <div class="desc">${this.about}</div>
        <div class="buttons">
          ${(this.ost=="")?
              html``:
              html`<a href="${this.ost}">OST</a>`
          }
          ${(this.project=="")?
              html``:
              html`<a href="${this.project}">PROJECT</a>`
          }
          ${(this.play=="")?
              html``:
              html`<a href="${this.play}">PLAY</a>`
          }
          ${(this.github=="")?
              html``:
              html`<a href="${this.github}">GITHUB</a>`
          }
        </div>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define('game-card', GameCard);