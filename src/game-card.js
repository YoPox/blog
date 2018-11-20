import {LitElement, html} from '@polymer/lit-element';

class GameCard extends LitElement {

  static get properties(){
    return {
      titre: String,
      date: String,
      lang: String,
      img: String,
      about: String
    };
  }

  constructor(){
    super();

    // Initialize properties
    this.titre="Campagne";
    this.date="2018";
    this.lang="Kotlin";
    this.img="campagne";
    this.about="Campagne est un city builder créé en une semaine pour la GBJAM6.";
  }

  // Element template
  render(){
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
          padding: 16px 16px 32px 16px;
          opacity: .67;
      }
      </style>
      <div class="card">
        <div class="name">${this.titre}</div>
        <div class="year">${this.date} • ${this.lang}</div>
        <img src="assets/${this.img}.png" alt="">
        <div class="desc">${this.about}</div>
      </div>
    `;
  }
}

// Register the element with the browser
customElements.define('game-card', GameCard);