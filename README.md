# SwissQRBill-browser-example

This is an example library to show how to use [SwissQRBill](https://github.com/schoero/SwissQRBill/) inside the browser.

```js
import SwissQRBill from "swissqrbill/lib/browser";

const data: SwissQRBill.data = {
  currency: "CHF",
  amount: 1199.95,
  reference: "210000000003139471430009017",
  creditor: {
    name: "Robert Schneider AG",
    address: "Rue du Lac 1268",
    zip: 2501,
    city: "Biel",
    account: "CH4431999123000889012",
    country: "CH"
  },
  debtor: {
    name: "Pia-Maria Rutschmann-Schnyder",
    address: "Grosse Marktgasse 28",
    zip: 9400,
    city: "Rorschach",
    country: "CH"
  }
};


const stream = new SwissQRBill.BlobStream();

const pdf = new SwissQRBill.PDF(data, stream);

pdf.on("finish", () => {
  window.location.href = stream.toBlobURL("application/pdf");
});
```

To test, please clone this repo and run it localy using these commands:

##### Clone repo localy

`git clone https://github.com/schoero/SwissQRBill-browser-example.git`

##### Install dependencies

`cd SwissQRBill-browser-example && npm install`

##### Start webpack dev server

`npm run start`

##### Open Browser

Open http://localhost:8000 in your browser. You should see a generated PDF that looks like this:

[<img src="https://raw.githubusercontent.com/schoero/SwissQRBill/master/assets/qrbill.png">](https://github.com/schoero/SwissQRBill/blob/master/assets/qrbill.pdf)