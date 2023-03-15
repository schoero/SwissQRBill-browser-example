# SwissQRBill-browser-example

This repository is an example how you could bundle [SwissQRBill > v3.0.0](https://github.com/schoero/SwissQRBill/) by yourself using webpack for the usage inside a browser. For instructions on [SwissQRBill v2.x](https://github.com/schoero/SwissQRBill/tree/v2.4.2) visit [this link](https://github.com/schoero/SwissQRBill-browser-example/tree/v2). 

```js
import { PDF, BlobStream } from "swissqrbill/browser";

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

const stream = new BlobStream();
const pdf = new PDF(data, stream);

pdf.on("finish", () => {
  window.location.href = stream.toBlobURL("application/pdf");
});
```

To test, please clone this repo and run it locally using the following commands:

##### Clone repository locally

```bash
git clone https://github.com/schoero/SwissQRBill-browser-example.git
```

##### Install dependencies

```bash
cd SwissQRBill-browser-example && npm install
```

##### Start webpack dev server

```bash
npm run start
```

##### Open Browser

Open http://localhost:8000/pdf.html or http://localhost:8000/svg.html in your browser. You should see a generated pdf/svg that looks like this:

[<img src="https://raw.githubusercontent.com/schoero/SwissQRBill/master/assets/qrbill.png">](https://github.com/schoero/SwissQRBill/blob/master/assets/qrbill.pdf)
