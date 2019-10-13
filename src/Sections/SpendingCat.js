import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./SpendingCat.css";

class SpendingCat extends Component {
  state = {};
  render() {
    return (
      <div className="idiot">
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <h1 className="stupidheader">Available saving plans</h1>
        <div class="cards-list">
          <div class="card 1">
            <div class="card_image">
              <a
                href="https://www.uob.com.sg/personal/invest/unit-trusts/regular-investment.page"
                target="_blank"
              >
                <img src="https://www.capitaland.com/content/dam/capitaland-tenants/imported/en/-/media/cma-malls/websites/logos_560/u/uob_bk-panjang_ba2badd5-7370-4722-bb63-b7e3908a31fb_560x462.jpg.transform/cap-lowres/image.jpg" />
              </a>
            </div>
            <div class="card_title"></div>
          </div>

          <div class="card 2">
            <div class="card_image">
              <a
                href="https://www.greateasternlife.com/sg/en/personal-insurance/our-products/wealth-accumulation.html"
                target="_blank"
              >
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112011/great_eastern_logo__slogan.jpg?itok=Xjc6wv5J" />
              </a>
            </div>
            <div class="card_title"></div>
          </div>

          <div class="card 3">
            <div class="card_image">
              <a
                href="https://www.dbs.com.sg/personal/investments/investing-in-funds/invest-saver"
                target="_blank"
              >
                <img src="https://media.giphy.com/media/SnZGWiZ3qciiY/giphy.gif" />
              </a>
            </div>
            <div class="card_title"></div>
          </div>

          <div class="card 4">
            <div class="card_image">
              <a
                href="https://www.aviva.com.sg/en/savings-and-retirement/?utm_source=search&utm_medium=ppc&utm_campaign=always_on&utm_term=savings&gclid=Cj0KCQjw84XtBRDWARIsAAU1aM0ST6Gjkw_sq7XDYSSjAtEy_N5KNHIkSQ-ZTBi6-tnp-yJYZpkqiiUaAhR9EALw_wcB"
                target="_blank"
              >
                <img src="https://image3.mouthshut.com/images/imagesp/925071446s.jpg" />
              </a>
            </div>
            <div class="card_title"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpendingCat;
