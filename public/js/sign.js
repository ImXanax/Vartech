let languageOption = localStorage.getItem("lanPref");

let language = {
  fa: {
    header: {
      home: "خانه",
      service: "خدمات",
      contact: "ارتباط با ما",
      shop: "فروشگاه",
    },
    services: {
      serviceOne: {
        title: "تعمیر در محل",
        body: "ارائه خدمات تشخیص، تعمیر و نصب هر گونه قطعه سخت‌افزاری / نرم‌افزاری را بر روی دستگاه‌های الکترونیکی شما به صورت حضوری، سابقه کار با تمام مارک‌ها و مدل‌ها وارتک با تجهیزات مورد نیاز برای رفع و کمک به مشکلات سخت‌افزاری یا نرم‌افزاری شما در محل حضور پیدا میکند",
      },
      serviceTwo: {
        title: "ارتقای سیستم",
        body: "تعمیر و تعویض سیستم های کامپیوتری و لپ تاپ شما به سیستم  های بروز و نسل جدید ، سفارش و تعمیر و لوازم قدیمی و خراب و مشکل داره شما و ذخیره و جلوگیری از حدر رفتن پول شما برای خرید وسایل نو",
      },
      serviceThree: {
        title: "تعمیرات قطعات الکترونیکی",
        body: "ما مصمم هستیم که هر مشکلی را که با آن روبرو هستید برطرف کنیم، ,وارتک تعمیرات تخصصی برد مدار الکترونیکی، تشخیص خطا، جایگزینی قطعات معیوب یا شکسته در مدارهای الکترونیکی  را برای شما فراهم می کند",
      },
      serviceFour: {
        title: "سیستم های گیمینگ",
        body: "وارتک مشاوره رایگان برای خرید ارائه می دهد و حداقل سیستم مورد نیاز یا توصیه شده را برای بازی های ویدیویی آینده پیشنهاد می کند، ما مطمئن خواهیم شد که در طول بازی های خود دچار تاخیر یا افت فریم نخواهید شد، علاوه بر این اطلاعاتی در مورد اجزایی که نیاز به ارتقا دارند را ارائه خواهیم کرد تا از بازی های ویدیویی مورد علاقه خود لذت ببرید",
      },
    },
    contact: {
      header: {
        title: "ارتباط با ما",
        description:
          "جهت استعلام موجودی کالا ،مشاوره رایگان خرید و جمع آوری سیستم از درگاه های زیر با ما تماس حاصل نمایید",
      },
      address: {
        title: "آدرس:",
        description: "تهران، ورامین، پاساژ توحید، طبقه همکف پلاک 10",
      },
      schedule: {
        title: "پاسخگویی حضوری:",
        description: "شنبه - جمعه: 9 تا 12:30 / 15:30 تا 21:30",
      },
      phone: {
        title: "شماره تماس:",
      },
    },
    login: {
      signin: {
        title: "عضو فروشگاه هستید ؟",
        button: "ورود",
        tip: "با ایمیل خود وارد شوید",
      },
      signup: {
        title: "! ساخت حساب جدید",
        button: "ثبت نام",
        tip: "از ایمیل استفاده کنید",
      },
    },
    shop: {
      title: "فروشگاه",
      button: "افزودن به سبد",
    },
    profile: {
      msg: "حساب با موفقیت ساخته شد",
    },
  },
  en: {
    header: {
      home: "HOME",
      service: "SERVICES",
      contact: "CONTACT",
      shop: "SHOP",
    },
    services: {
      serviceOne: {
        title: "ON-SITE REPAIR",
        body: "We provide diagnosis and repairment of your electronic devices on-site working with all brands and models equipped to resolve and aid hardware or software difficulties you may be undergoing",
      },
      serviceTwo: {
        title: "COMPUTER UPGRADE",
        body: "Vartech can assist you through all your questions on setting up a new gaming computer or laptop , we recommend based on your budget and guarantee the best hardware quality and performance",
      },
      serviceThree: {
        title: "CIRCUIT BOARD REPAIRMENT",
        body: "We are determined to iron out any issues you face , Vartech offers soldering and electronic circuit board repairment , error detection , replacement of faulty or broken components on your electronic circuit boards",
      },
      serviceFour: {
        title: "VIDEO GAMES",
        body: "Vartech provides free counseling for purchases and suggests minimum or recommended  system requirements for upcoming video games, we will make sure you won't have to endure or experience lag or FPS drops throughout your playthroughs, Moreover we will provide information on components that require upgrade or change for you to enjoy your favorite video games",
      },
    },
    contact: {
      header: {
        title: "CONTACT US",
        description:
          "Feel free to reach out for the highest quality computer support and troubleshooting or guidance for building your brand new pc",
      },
      address: {
        title: "ADDRESS:",
        description:
          "Hadi Sadeghi, Vartech, St. Marter - Tohid Mall, Varamin, Tehran",
      },
      schedule: {
        title: "BUSINESS HOURS:",
        description: "Sat - Fri: 9AM - 12:30PM / 3:30PM - 9:30PM",
      },
      phone: {
        title: "CONTACT INFO:",
      },
    },
    login: {
      signin: {
        title: "Already Have An Account ?",
        button: "SIGN IN",
        tip: "or use your account",
      },
      signup: {
        title: "Create A New Account",
        button: "SIGN UP",
        tip: "or use your email for registration",
      },
    },
    shop: {
      title: "SHOP",
      button: "ADD TO CART",
    },
    profile: {
      msg: "Logged In Successfully",
    },
  },
};

const en = () => {
  // CHANGE FONT
  if (document.body.classList.contains("lan"))
    document.body.classList.remove("lan");

  // HTML TAG & TEXT ALIGNMENT
  document.querySelector("html").lang = "en";

  // SIGN UP SIGN IN PAGE
  let signinTip = document.querySelector(".signin-tip");
  let signinTitle = document.querySelector(".signin-title");
  let signinBtn = document.querySelector(".signin-btn");

  let signupTip = document.querySelector(".signup-tip");
  let signupTitle = document.querySelector(".signup-title");
  let signupBtn = document.querySelector(".signup-btn");

  if (signinTitle && signinTip && signinBtn) {
    signinTitle.textContent = language.en.login.signin.title;
    signinTip.textContent = language.en.login.signin.tip;
    signinBtn.textContent = language.en.login.signin.button;
  }
  if (signupTitle && signupTip && signupBtn) {
    signupTitle.textContent = language.en.login.signup.title;
    signupTip.textContent = language.en.login.signup.tip;
    signupBtn.textContent = language.en.login.signin.button;
  }
  
  let profile = document.querySelector(".nothing-title")
  if(profile){
    profile.textContent = language.en.profile.msg
  }
};

const fa = () => {
  // CHANGE FONT
  if (!document.body.classList.contains("lan"))
    document.body.classList.add("lan");

  // HTML TAG & TEXT ALIGNMENT
  document.querySelector("html").lang = "fa";

  // SIGN UP SIGN IN PAGE
  let signinTip = document.querySelector(".signin-tip");
  let signinTitle = document.querySelector(".signin-title");
  let signinBtn = document.querySelector(".signin-btn");

  let signupTip = document.querySelector(".signup-tip");
  let signupTitle = document.querySelector(".signup-title");
  let signupBtn = document.querySelector(".signup-btn");

  if (signinTitle && signinTip && signinBtn) {
    signinTitle.textContent = language.fa.login.signin.title;
    signinTip.textContent = language.fa.login.signin.tip;
    signinBtn.textContent = language.fa.login.signin.button;
  }
  if (signupTitle && signupTip && signupBtn) {
    signupTitle.textContent = language.fa.login.signup.title;
    signupTip.textContent = language.fa.login.signup.tip;
    signupBtn.textContent = language.fa.login.signin.button;
  }

  let profile = document.querySelector(".nothing-title");
  if (profile) {
    profile.textContent = language.fa.profile.msg;
  }
};

if (languageOption === "fa") {
  fa();
} else {
  en();
}

changeLanguageToggle.addEventListener("click", () => {
  languageOption = localStorage.getItem("lanPref");
  if (languageOption === "fa") {
    localStorage.setItem("lanPref", "en");
    window.location.hash = "en";
    window.location.reload();
  } else {
    localStorage.setItem("lanPref", "fa");
    window.location.hash = "fa";
    window.location.reload();
  }
});
