import { PDF, BlobStream } from "swissqrbill/pdf";

import fs from "fs";


//-- Register fonts for the bundled version

//@ts-ignore
import Helvetica from "../node_modules/pdfkit/js/data/Helvetica.afm";
//@ts-ignore
import HelveticaBold from "../node_modules/pdfkit/js/data/Helvetica-Bold.afm";

fs.writeFileSync("data/Helvetica.afm", Helvetica);
fs.writeFileSync("data/Helvetica-Bold.afm", HelveticaBold);


const data = {
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

// console.log(new SVG(data).toString());

const stream = new BlobStream();

const pdf = new PDF(data, stream);

pdf.on("finish", () => {
  window.location.href = stream.toBlobURL("application/pdf");
  console.log("PDF has been successfully created.");
});