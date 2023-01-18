function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

let language = {
  fa: {
    header: {
      home: "خانه",
      service: "خدمات",
      contact: "ارتباط با ما",
    },
    services: {
      serviceOne: {
        title: "تعمیر در محل",
        body: "حضور شخصی در محل برای نصب تعمیر و اعمال تمامی تغییرات مورد نیاز سیستم شما ، خدمات در محل شامل جمع و نصب کردن قطعات کامپیوتری و نرم افزار ها و بروز رسانی و ویروس کشی و ... میباشد",
      },
      serviceTwo: {
        title: "ارتقای سیستم",
        body: "تعمیر و تعویض سیستم های کامپیوتری و لپ تاپ شما به سیستم  های بروز و نسل جدید ، سفارش و تعمیر و لوازم قدیمی و خراب و مشکل داره شما و ذخیره و جلوگیری از حدر رفتن پول شما برای خرید وسایل نو",
      },
      serviceThree: {
        title: "لحیم و بازسازی",
        body: "تعویض قطعات برد شما و مشکل زدایی از برد های خراب مودم ، مادربرد و کارت گرافیک ، تعمییر و شناسایی قعطات ناسالم و تعویض مقاوت اطمینان سازی از برق رسانی صحیحه قطعات الکترونیکی شما",
      },
      serviceFour: {
        title: "سیستم های گیمینگ",
        body: "ساخت بهترین تجربه برای بازی با انتخاب بهترین سیستم های به روز برای بازی های به روز با کیفیت بالا نسبت به بودجه های محدود ، توصیه و مشاوره ی رایگان با بهتری قیمت های بازار و فروش و دانلود بازی های سفارشی و بسته های الحاقی بازی های مورد علاقه ی شما",
      },
    },
  },
};

if (window.location.hash) {
  if (window.location.hash == "#fa") {
    // HTML TAG UPDATE
    let html = document.querySelector("html");
    html.lang = "fa";
    // Header
    let nav = document.querySelectorAll(".nav-li");
    nav[0].textContent = language.fa.header.home;
    nav[1].textContent = language.fa.header.service;
    nav[2].textContent = language.fa.header.contact;
    let navbar = document.querySelector(".nav-ul");
    navbar.style.direction = "rtl";

    let infoBoxTitle = document.querySelectorAll(".info-box-title");
    let infoBoxBody = document.querySelectorAll(".info-box-text");
    let infoBoxContent = document.querySelectorAll(".info-box-content");
    infoBoxContent.forEach((el) => {
      el.style.direction = "rtl";
    });
    infoBoxTitle[0].textContent = language.fa.services.serviceOne.title;
    infoBoxBody[0].textContent = language.fa.services.serviceOne.body;

    infoBoxTitle[1].textContent = language.fa.services.serviceTwo.title;
    infoBoxBody[1].textContent = language.fa.services.serviceTwo.body;

    infoBoxTitle[2].textContent = language.fa.services.serviceThree.title;
    infoBoxBody[2].textContent = language.fa.services.serviceThree.body;

    infoBoxTitle[3].textContent = language.fa.services.serviceFour.title;
    infoBoxBody[3].textContent = language.fa.services.serviceFour.body;
  } else {
    console.log("NOPE");
  }
}
