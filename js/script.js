// const btn = document.getElementById("bruh");
// btn.addEventListener("click", function () {
//   var pdfObject = jsPDFInvoiceTemplate.default(props); //returns number of pages created
//   console.log("hello?");
// });

// var props = {
//   outputType: jsPDFInvoiceTemplate.OutputType.Save,
//   returnJsPDFDocObject: true,
//   fileName: "Invoice 2021",
//   orientationLandscape: false,
//   compress: true,
//   logo: {
//     src: "./images/logo.jpg",
//     type: "PNG", //optional, when src= data:uri (nodejs case)
//     width: 30.66, //aspect ratio = width/height
//     height: 30.66,
//     margin: {
//       top: 0, //negative or positive num, from the current position
//       left: 0, //negative or positive num, from the current position
//     },
//   },
//   stamp: {
//     inAllPages: true, //by default = false, just in the last page
//     src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
//     type: "JPG", //optional, when src= data:uri (nodejs case)
//     width: 20, //aspect ratio = width/height
//     height: 20,
//     margin: {
//       top: 0, //negative or positive num, from the current position
//       left: 0, //negative or positive num, from the current position
//     },
//   },
//   business: {
//     name: "VARTECH - وارتک",
//     address: "ورامین - پاساژ توحید - طبقه همکف پلاک 10",
//     phone: "09903303135 - 09019284117",
//     email: "FailureJunky@gmail.com",
//     email_1: "Vartechshop@gmail.com",
//     website: "www.vartech.gigfa.com",
//   },
//   contact: {
//     label: "Invoice issued for:",
//     name: "معراج حسینی",
//     address: "-",
//     phone: "09395118977",
//     email: "merwwj@gmail.com",
//     otherInfo: "imxanax.github.io",
//   },
//   invoice: {
//     label: "Invoice #: ",
//     num: 1,
//     invDate: "Payment Date: 01/01/2021 18:12",
//     invGenDate: "Invoice Date: 02/02/2021 10:17",
//     headerBorder: false,
//     tableBodyBorder: false,
//     header: [
//       {
//         title: "#",
//         style: {
//           width: 10,
//         },
//       },
//       {
//         title: "Title",
//         style: {
//           width: 30,
//         },
//       },
//       {
//         title: "Description",
//         style: {
//           width: 80,
//         },
//       },
//       { title: "Price" },
//       { title: "Quantity" },
//       { title: "Unit" },
//       { title: "Total" },
//     ],
//     table: Array.from(Array(10), (item, index) => [
//       index + 1,
//       "There are many variations ",
//       "Lorem Ipsum is simply dummy text dummy text ",
//       200.5,
//       4.5,
//       "m2",
//       400.5,
//     ]),
//     additionalRows: [
//       {
//         col1: "Total:",
//         col2: "145,250.50",
//         col3: "ALL",
//         style: {
//           fontSize: 14, //optional, default 12
//         },
//       },
//       {
//         col1: "VAT:",
//         col2: "20",
//         col3: "%",
//         style: {
//           fontSize: 10, //optional, default 12
//         },
//       },
//       {
//         col1: "SubTotal:",
//         col2: "116,199.90",
//         col3: "ALL",
//         style: {
//           fontSize: 10, //optional, default 12
//         },
//       },
//     ],
//     invDescLabel: "Invoice Note",
//     invDesc:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
//   },
//   footer: {
//     text: "The invoice is created on a computer and is valid without the signature and stamp.",
//   },
//   pageEnable: true,
//   pageLabel: "Page ",
// };

// const allList = document.querySelectorAll("li");
// allList.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log("CLICKED:" + e);
//   });
// });


