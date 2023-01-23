let languageOption = localStorage.getItem("lanPref");

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
        body: "وارتک مشاوره رایگان برای خرید ارائه می دهد و حداقل سیستم مورد نیاز یا توصیه شده را برای بازی های ویدیویی آینده پیشنهاد می کند، ما مطمئن خواهیم شد که در طول بازی های خود دچار تاخیر یا افت فریم نخواهید شد، علاوه بر این اطلاعاتی در مورد اجزایی که نیاز به ارتقا یا ارتقا دارند ارائه خواهیم کرد. تغییر دهید تا از بازی های ویدیویی مورد علاقه خود لذت ببرید",
      },
    },
  },
  en: {
    header: {
      home: "HOME",
      service: "SERVICES",
      contact: "CONTACT",
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
  },
};

const en = () => {
  // CHANGE FONT
  if (document.body.classList.contains("lan"))
    document.body.classList.remove("lan");
  // REPLACE ICON
  const englishSvg = document.getElementById("changeLanguageToggle");
  englishSvg.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.677 473.677" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="1.068" y="258.99" style="fill:#C42126;" width="471.56" height="0.007"></rect> <rect x="25.629" y="129.7" style="fill:#C42126;" width="422.42" height="0.007"></rect> <rect x="8.831" y="172.79" style="fill:#C42126;" width="456" height="0.007"></rect> <polygon style="fill:#C42126;" points="101.793,431.36 371.888,431.36 371.902,431.345 101.778,431.345 "></polygon> <path style="fill:#C42126;" d="M236.837,0c-4.652,0-9.267,0.168-13.848,0.43h27.699C246.103,0.168,241.489,0,236.837,0z"></path> <rect x="0.978" y="215.89" style="fill:#C42126;" width="471.71" height="0.007"></rect> </g> <path style="fill:#E7E7E7;" d="M306.838,86.609H419.93c-13.433-16.353-29.045-30.829-46.341-43.084h-84.922 C295.694,55.888,301.737,70.476,306.838,86.609z"></path> <path style="fill:#DC3027;" d="M288.667,43.525h84.922C338.482,18.646,296.333,3.066,250.688,0.43h-7.292 C264.88,3.134,274.748,19.034,288.667,43.525z"></path> <path style="fill:#E7E7E7;" d="M464.846,172.794c-4.211-15.018-9.858-29.427-16.798-43.084H317.94 c2.636,13.833,4.716,28.282,6.256,43.084H464.846z"></path> <path style="fill:#DC3027;" d="M310.622,129.703h137.422c-7.831-15.403-17.239-29.857-28.114-43.091H299.886 C304.119,100.011,307.713,114.465,310.622,129.703z"></path> <path style="fill:#E7E7E7;" d="M329.178,258.98h143.431c0.681-7.288,1.066-14.674,1.066-22.138c0-7.064-0.37-14.038-0.976-20.949 H329.212C329.679,230.223,329.671,244.658,329.178,258.98z"></path> <path style="fill:#DC3027;" d="M472.703,215.886c-1.298-14.798-3.964-29.195-7.857-43.084H318.154 c1.473,14.109,2.446,28.544,2.921,43.084H472.703z"></path> <path style="fill:#E7E7E7;" d="M315.465,345.166h131.962c7.038-13.642,12.774-28.062,17.075-43.091H321.845 C320.274,316.899,318.142,331.345,315.465,345.166z"></path> <path style="fill:#DC3027;" d="M464.506,302.072c3.975-13.885,6.735-28.282,8.107-43.084H324.709 c-0.505,14.551-1.507,28.982-3.01,43.084L464.506,302.072L464.506,302.072z"></path> <path style="fill:#E7E7E7;" d="M371.902,431.345c17.546-12.206,33.379-26.697,47.025-43.084H307.806 c-5.194,16.2-11.361,30.765-18.515,43.084L371.902,431.345L371.902,431.345z"></path> <g> <path style="fill:#DC3027;" d="M303.625,388.258h115.302c11.002-13.219,20.553-27.673,28.499-43.091h-132.93 C311.546,360.416,307.915,374.877,303.625,388.258z"></path> <path style="fill:#DC3027;" d="M228.254,473.509c-0.479-0.015-0.957-0.037-1.436-0.052 C227.297,473.471,227.776,473.494,228.254,473.509z"></path> <path style="fill:#DC3027;" d="M236.837,473.677c50.211,0,96.735-15.673,135.051-42.317h-85.715 C270.96,457.57,260.923,473.677,236.837,473.677z"></path> </g> <path style="fill:#C42126;" d="M236.837,473.677c-2.876,0-5.733-0.067-8.582-0.168C231.134,473.606,233.994,473.677,236.837,473.677 z"></path> <path style="fill:#F3F4F5;" d="M296.509,43.525H100.092C82.793,55.78,67.184,70.255,53.747,86.609h260.929 C309.575,70.476,303.536,55.888,296.509,43.525z"></path> <path style="fill:#E73625;" d="M100.092,43.525h196.417C282.587,19.034,264.88,3.134,243.396,0.43h-20.407 C177.344,3.066,135.195,18.646,100.092,43.525z"></path> <path style="fill:#F3F4F5;" d="M8.835,172.794h322.83c-1.541-14.805-3.62-29.251-6.256-43.084H25.633 C18.692,143.368,13.046,157.776,8.835,172.794z"></path> <path style="fill:#E73625;" d="M53.747,86.609C42.88,99.843,33.464,114.296,25.637,129.7h299.772 c-2.906-15.235-6.499-29.688-10.733-43.091C314.676,86.609,53.747,86.609,53.747,86.609z"></path> <path style="fill:#F3F4F5;" d="M0.002,236.842c0,7.464,0.389,14.85,1.066,22.138h333.491c0.494-14.323,0.501-28.754,0.034-43.084 H0.978C0.372,222.804,0.002,229.778,0.002,236.842z"></path> <path style="fill:#E73625;" d="M0.978,215.886h333.611c-0.475-14.543-1.451-28.974-2.921-43.084H8.831 C4.938,186.694,2.272,201.088,0.978,215.886z"></path> <path style="fill:#F3F4F5;" d="M331.549,302.072H9.175c4.301,15.033,10.041,29.449,17.075,43.091h298.919 C327.847,331.345,329.974,316.899,331.549,302.072z"></path> <path style="fill:#E73625;" d="M9.175,302.072h322.374c1.5-14.102,2.505-28.537,3.01-43.084H1.068 C2.44,273.793,5.204,288.187,9.175,302.072z"></path> <path style="fill:#F3F4F5;" d="M101.778,431.345h194.009c7.154-12.322,13.324-26.884,18.515-43.084H54.753 C68.399,404.648,84.228,419.139,101.778,431.345z"></path> <g> <path style="fill:#E73625;" d="M26.254,345.166c7.947,15.418,17.497,29.872,28.499,43.091h259.549 c4.286-13.38,7.917-27.841,10.867-43.091H26.254z"></path> <path style="fill:#E73625;" d="M226.818,473.456c0.479,0.015,0.957,0.037,1.436,0.052c2.85,0.101,5.707,0.168,8.582,0.168 c24.087,0,43.727-16.106,58.943-42.317H101.793C137.54,456.221,180.448,471.523,226.818,473.456z"></path> </g> <path style="fill:#283991;" d="M231.941,0.123C110.574,2.592,11.654,96.301,1.008,215.5h230.937V0.123H231.941z"></path> <g> <polygon style="fill:#EFEFEF;" points="47.39,134.187 50.998,145.297 62.688,145.297 53.231,152.167 56.843,163.285 47.39,156.411 37.94,163.285 41.545,152.167 32.091,145.297 43.781,145.297 "></polygon> <polygon style="fill:#EFEFEF;" points="47.39,173.438 50.998,184.555 62.688,184.555 53.231,191.425 56.843,202.543 47.39,195.669 37.94,202.543 41.545,191.425 32.091,184.555 43.781,184.555 "></polygon> <polygon style="fill:#EFEFEF;" points="86.648,75.296 90.257,86.41 101.943,86.41 92.489,93.284 96.098,104.394 86.648,97.528 77.194,104.394 80.803,93.284 71.345,86.41 83.035,86.41 "></polygon> <polygon style="fill:#EFEFEF;" points="86.648,114.554 90.257,125.668 101.943,125.668 92.489,132.534 96.098,143.652 86.648,136.786 77.194,143.652 80.803,132.534 71.345,125.668 83.035,125.668 "></polygon> <polygon style="fill:#EFEFEF;" points="86.648,153.812 90.257,164.93 101.943,164.93 92.489,171.792 96.098,182.91 86.648,176.037 77.194,182.91 80.803,171.792 71.345,164.93 83.035,164.93 "></polygon> <path style="fill:#EFEFEF;" d="M17.585,182.91l-3.612-11.118l9.454-6.866H11.744l-0.262-0.811 c-1.283,3.968-2.442,7.984-3.511,12.045l0.165-0.123L17.585,182.91z"></path> <path style="fill:#EFEFEF;" d="M37.94,124.027l9.45-6.873l9.454,6.873l-3.612-11.118l9.454-6.873h-11.69l-3.609-11.11l-3.609,11.11 H39.47c-0.8,1.212-1.574,2.431-2.352,3.661l4.428,3.212L37.94,124.027z"></path> <path style="fill:#EFEFEF;" d="M86.648,58.27l9.45,6.866l-3.609-11.11l9.45-6.873h-6.75c-5.733,4.286-11.264,8.822-16.578,13.608 l-1.425,4.375L86.648,58.27z"></path> <path style="fill:#EFEFEF;" d="M116.452,45.511l9.454-6.873l9.45,6.873l-3.609-11.118l9.45-6.866h-11.686l-0.49-1.496 c-3.96,2.023-7.879,4.128-11.709,6.368l2.745,1.993L116.452,45.511z"></path> <polygon style="fill:#EFEFEF;" points="125.906,55.671 129.515,66.778 141.201,66.778 131.747,73.651 135.356,84.769 125.906,77.895 116.452,84.769 120.061,73.651 110.604,66.778 122.293,66.778 "></polygon> <polygon style="fill:#EFEFEF;" points="125.906,94.929 129.515,106.036 141.201,106.036 131.747,112.909 135.356,124.027 125.906,117.153 116.452,124.027 120.061,112.909 110.604,106.036 122.293,106.036 "></polygon> <polygon style="fill:#EFEFEF;" points="125.906,134.187 129.515,145.297 141.201,145.297 131.747,152.167 135.356,163.285 125.906,156.411 116.452,163.285 120.061,152.167 110.604,145.297 122.293,145.297 "></polygon> <polygon style="fill:#EFEFEF;" points="125.906,173.438 129.515,184.555 141.201,184.555 131.747,191.425 135.356,202.543 125.906,195.669 116.452,202.543 120.061,191.425 110.604,184.555 122.293,184.555 "></polygon> <polygon style="fill:#EFEFEF;" points="165.164,36.038 168.773,47.152 180.459,47.152 171.009,54.026 174.614,65.136 165.164,58.27 155.707,65.136 159.319,54.026 149.862,47.152 161.551,47.152 "></polygon> <polygon style="fill:#EFEFEF;" points="165.164,75.296 168.773,86.41 180.459,86.41 171.009,93.284 174.614,104.394 165.164,97.528 155.707,104.394 159.319,93.284 149.862,86.41 161.551,86.41 "></polygon> <polygon style="fill:#EFEFEF;" points="165.164,114.554 168.773,125.668 180.459,125.668 171.009,132.534 174.614,143.652 165.164,136.786 155.707,143.652 159.319,132.534 149.862,125.668 161.551,125.668 "></polygon> <polygon style="fill:#EFEFEF;" points="165.164,153.812 168.773,164.93 180.459,164.93 171.009,171.792 174.614,182.91 165.164,176.037 155.707,182.91 159.319,171.792 149.862,164.93 161.551,164.93 "></polygon> <polygon style="fill:#EFEFEF;" points="204.422,16.413 208.031,27.527 219.717,27.527 210.263,34.393 213.872,45.511 204.422,38.637 194.965,45.511 198.577,34.393 189.12,27.527 200.806,27.527 "></polygon> <polygon style="fill:#EFEFEF;" points="204.422,55.671 208.031,66.778 219.717,66.778 210.263,73.651 213.872,84.769 204.422,77.895 194.965,84.769 198.577,73.651 189.12,66.778 200.806,66.778 "></polygon> <polygon style="fill:#EFEFEF;" points="204.422,94.929 208.031,106.036 219.717,106.036 210.263,112.909 213.872,124.027 204.422,117.153 194.965,124.027 198.577,112.909 189.12,106.036 200.806,106.036 "></polygon> <polygon style="fill:#EFEFEF;" points="204.422,134.187 208.031,145.297 219.717,145.297 210.263,152.167 213.872,163.285 204.422,156.411 194.965,163.285 198.577,152.167 189.12,145.297 200.806,145.297 "></polygon> <polygon style="fill:#EFEFEF;" points="204.422,173.438 208.031,184.555 219.717,184.555 210.263,191.425 213.872,202.543 204.422,195.669 194.965,202.543 198.577,191.425 189.12,184.555 200.806,184.555 "></polygon> </g> </g></svg>`;

  // HTML TAG & TEXT ALIGNMENT
  document.querySelector("html").lang = "en";
  document.querySelector(".nav-ul").style.direction = "ltr";
  let infoBoxContent = document.querySelectorAll(".info-box-content");
  infoBoxContent.forEach((el) => {
    el.style.direction = "ltr";
  });

  // HEADER
  let nav = document.querySelectorAll(".nav-li");
  nav[0].textContent = language.en.header.home;
  nav[1].textContent = language.en.header.service;
  nav[2].textContent = language.en.header.contact;

  //SERVICES
  let infoBoxTitle = document.querySelectorAll(".info-box-title");
  let infoBoxBody = document.querySelectorAll(".info-box-text");

  infoBoxTitle[0].textContent = language.en.services.serviceOne.title;
  infoBoxBody[0].textContent = language.en.services.serviceOne.body;

  infoBoxTitle[1].textContent = language.en.services.serviceTwo.title;
  infoBoxBody[1].textContent = language.en.services.serviceTwo.body;

  infoBoxTitle[2].textContent = language.en.services.serviceThree.title;
  infoBoxBody[2].textContent = language.en.services.serviceThree.body;

  infoBoxTitle[3].textContent = language.en.services.serviceFour.title;
  infoBoxBody[3].textContent = language.en.services.serviceFour.body;
};

const fa = () => {
  // CHANGE FONT
  if (!document.body.classList.contains("lan"))
    document.body.classList.add("lan");
  // REPLACE ICON
  const farsiSvg = document.getElementById("changeLanguageToggle");
  farsiSvg.innerHTML = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M32 2C18.9 2 7.8 10.3 3.7 22h56.6C56.2 10.3 45.1 2 32 2z" fill="#83bf4f"> </path> <path d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z" fill="#ed4c5c"> </path> <path d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z" fill="#f9f9f9"> </path> <g fill="#ffffff"> <path d="M59.4 44.3l-.3.6h.3v-.6"> </path> <path d="M4.9 44.9l-.3-.6v.6h.3"> </path> <path d="M5.6 18.8h-.5c-.1.1-.2.2-.2.3h.7v-.3"> </path> <path d="M5.6 21v-.3h-1v-.6h1.5v.9h2.2v-2.3H8v1.9h-.6v-1.9h-.3v1.9h-.6v-1.9h-.3v1H4.6c-.1.2-.2.5-.3.7v.6h1.3"> </path> <path d="M5.6 44.9h-.7c0 .1.1.2.2.3h.6l-.1-.3"> </path> <path d="M4.6 44.3h1.5v.9h2.2v-2.3H8v1.9h-.6v-1.9h-.3v1.9h-.6v-1.9h-.3v1H4.5c0 .2.1.3.1.4"> </path> <path d="M5.6 43H4.1c0 .1.1.2.1.3h1.4V43"> </path> <path d="M13.6 21H15v-.3h-1v-.6h1.5v.9h2.2v-2.3h-.3v2h-.6v-2h-.4v2h-.6v-2h-.3v1h-1.9z"> </path> <path d="M13 21v-1.3h-1.3v.4h1v.6h-1.5v-1H9v1.4h.3v-1h1.5v.9z"> </path> <path d="M9.8 20.7h.5v.3h-.5z"> </path> <path d="M8.9 18.8H15v.3H8.9z"> </path> <path d="M11.7 44.3h1v.6h-1.5v-1H9v1.4h.3v-1h1.5v.9H13v-1.3h-1.3z"> </path> <path d="M9.8 44.9h.5v.3h-.5z"> </path> <path d="M8.9 43H15v.3H8.9z"> </path> <path d="M17.4 44.9h-.6v-2h-.4v2h-.6v-2h-.3v1h-1.9v1.3H15v-.3h-1v-.6h1.5v.9h2.2v-2.3h-.3z"> </path> <path d="M23 21h1.3v-.3h-1v-.6h1.5v.9H27v-2.3h-.3v2h-.6v-2h-.3v2h-.6v-2h-.4v1H23z"> </path> <path d="M22.4 21v-1.3H21v.4h1v.6h-1.5v-1h-2.2v1.4h.3v-1h1.6v.9z"> </path> <path d="M18.2 18.8h6.1v.3h-6.1z"> </path> <path d="M19.2 20.7h.5v.3h-.5z"> </path> <path d="M26.7 44.9h-.6v-2h-.3v2h-.6v-2h-.4v1H23v1.3h1.3v-.3h-1v-.6h1.5v.9H27v-2.3h-.3z"> </path> <path d="M19.2 44.9h.5v.3h-.5z"> </path> <path d="M18.2 43h6.1v.3h-6.1z"> </path> <path d="M21 44.3h1v.6h-1.5v-1h-2.2v1.4h.3v-1h1.6v.9h2.2v-1.3H21z"> </path> <path d="M31.7 21v-1.3h-1.3v.4h1v.6h-1.6v-1h-2.2v1.4h.4v-1h1.5v.9z"> </path> <path d="M27.6 18.8h6.1v.3h-6.1z"> </path> <path d="M28.5 20.7h.5v.3h-.5z"> </path> <path d="M32.3 21h1.3v-.3h-1v-.6h1.6v.9h2.2v-2.3H36v2h-.6v-2h-.3v2h-.6v-2h-.3v1h-1.9z"> </path> <path d="M27.6 43h6.1v.3h-6.1z"> </path> <path d="M30.4 44.3h1v.6h-1.6v-1h-2.2v1.4h.4v-1h1.5v.9h2.2v-1.3h-1.3z"> </path> <path d="M28.5 44.9h.5v.3h-.5z"> </path> <path d="M36 44.9h-.6v-2h-.3v2h-.6v-2h-.3v1h-1.9v1.3h1.3v-.3h-1v-.6h1.6v.9h2.2v-2.3H36z"> </path> <path d="M37.8 20.7h.5v.3h-.5z"> </path> <path d="M36.9 18.8H43v.3h-6.1z"> </path> <path d="M41.6 21H43v-.3h-1v-.6h1.5v.9h2.2v-2.3h-.3v2h-.6v-2h-.4v2h-.6v-2h-.3v1h-1.9z"> </path> <path d="M41 21v-1.3h-1.3v.4h1v.6h-1.5v-1H37v1.4h.3v-1h1.5v.9z"> </path> <path d="M36.9 43H43v.3h-6.1z"> </path> <path d="M45.4 44.9h-.6v-2h-.4v2h-.6v-2h-.3v1h-1.9v1.3H43v-.3h-1v-.6h1.5v.9h2.2v-2.3h-.3z"> </path> <path d="M39.7 44.3h1v.6h-1.5v-1H37v1.4h.3v-1h1.5v.9H41v-1.3h-1.3z"> </path> <path d="M37.8 44.9h.5v.3h-.5z"> </path> <path d="M50.4 21v-1.3H49v.4h1v.6h-1.5v-1h-2.2v1.4h.3v-1h1.6v.9z"> </path> <path d="M47.2 20.7h.5v.3h-.5z"> </path> <path d="M46.2 18.8h6.1v.3h-6.1z"> </path> <path d="M51 21h1.3v-.3h-1v-.6h1.5v.9H55v-2.3h-.3v2h-.6v-2h-.3v2h-.6v-2h-.4v1H51z"> </path> <path d="M47.2 44.9h.5v.3h-.5z"> </path> <path d="M49 44.3h1v.6h-1.5v-1h-2.2v1.4h.3v-1h1.6v.9h2.2v-1.3H49z"> </path> <path d="M46.2 43h6.1v.3h-6.1z"> </path> <path d="M54.7 44.9h-.6v-2h-.3v2h-.6v-2h-.4v1H51v1.3h1.3v-.3h-1v-.6h1.5v.9H55v-2.3h-.3z"> </path> <path d="M55.6 19.1h3.5c-.1-.1-.1-.2-.2-.3h-3.4c.1 0 .1.3.1.3"> </path> <path d="M58.4 20.1h1v.6h-1.5v-.9h-2.2v1.3h.3v-1h1.5v.9h2.2v-.5c-.1-.2-.2-.5-.3-.7h-1v.3"> </path> <path d="M56.5 20.7h.5v.3h-.5z"> </path> <path d="M56.5 44.9h.5v.3h-.5z"> </path> <path d="M55.6 43v.3h4.2c0-.1.1-.2.1-.3h-4.3"> </path> <path d="M58.4 44.3h1c.1-.1.1-.2.2-.4h-1.2v.4"> </path> <path d="M57.8 44.9V44h-2.2v1.3h.4v-1h1.5v.9h1.4c.1-.1.1-.2.2-.3h-1.3"> </path> </g> <g fill="#ed4c5c"> <path d="M36.5 33.9c.9-2.6 0-5.5-2-7.3c2.3 3.4 1.4 7.9-1.8 10.3l.2-5.6v-4.4c-.4-.2-.7-.4-.9-.7c-.2.3-.5.6-.9.7v4.4l.2 5.6c-3.3-2.4-4.1-6.9-1.8-10.3c-2.1 1.8-2.9 4.7-2 7.3c.6 1.8 1.8 3.1 3.3 3.9c-.9.3-1.9.5-2.9.5c1.2.4 2.4.4 3.5.2v.2l.6.8l.6-.8v-.2c1.1.2 2.3.2 3.5-.2c-1 0-2-.1-2.9-.5c1.5-.8 2.7-2.2 3.3-3.9"> </path> <path d="M38.7 29.1c-.8-1.3-2.1-2.3-3.6-2.7c3.3 2.5 4 7.2 1.5 10.5c2.8-1.5 3.7-5 2.1-7.8"> </path> <path d="M28.8 26.4c-1.5.4-2.8 1.3-3.6 2.7c-1.6 2.7-.6 6.2 2.1 7.8c-2.4-3.3-1.8-8 1.5-10.5"> </path> <path d="M30.5 26c.5.3 1.2.2 1.5-.3c.3.5 1 .6 1.5.3c.4-.3.6-.8.4-1.3c-.1.6-.6.9-1.2.8c-.3-.1-.5-.2-.7-.5c-.1.3-.4.4-.7.5c-.6.1-1.1-.3-1.2-.8c-.2.5 0 1 .4 1.3"> </path> </g> </g></svg>`;

  // HTML TAG & TEXT ALIGNMENT
  document.querySelector("html").lang = "fa";
  document.querySelector(".nav-ul").style.direction = "rtl";
  let infoBoxContent = document.querySelectorAll(".info-box-content");
  infoBoxContent.forEach((el) => {
    el.style.direction = "rtl";
  });

  // HEADER
  let nav = document.querySelectorAll(".nav-li");
  nav[0].textContent = language.fa.header.home;
  nav[1].textContent = language.fa.header.service;
  nav[2].textContent = language.fa.header.contact;

  //SERVICES
  let infoBoxTitle = document.querySelectorAll(".info-box-title");
  let infoBoxBody = document.querySelectorAll(".info-box-text");

  infoBoxTitle[0].textContent = language.fa.services.serviceOne.title;
  infoBoxBody[0].textContent = language.fa.services.serviceOne.body;

  infoBoxTitle[1].textContent = language.fa.services.serviceTwo.title;
  infoBoxBody[1].textContent = language.fa.services.serviceTwo.body;

  infoBoxTitle[2].textContent = language.fa.services.serviceThree.title;
  infoBoxBody[2].textContent = language.fa.services.serviceThree.body;

  infoBoxTitle[3].textContent = language.fa.services.serviceFour.title;
  infoBoxBody[3].textContent = language.fa.services.serviceFour.body;
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
