import men1 from "../assets/images/mepo-image-men1.jpg";
import men2 from "../assets/images/mepo-image-men2.jpg";
import men3 from "../assets/images/mepo-image-men6.jpg";
import men4 from "../assets/images/mepo-image-men3.jpg";
import men5 from "../assets/images/mepo-image-men4.jpg";
import khangal from "../assets/images/khangal.png";
import riaaan from "../assets/images/riaaan.png";
import kris from "../assets/images/kris.png";
import slide from "../assets/images/slide.jpg";

export const homeImgArr = [slide, men1, men5];
export const langTextLeft = {
  en: [
    { name: "all", path: "/all" },
    { name: "women's", path: "/women" },
    { name: "men's", path: "/men" },
  ],
  mn: [
    { name: "Бүгд", path: "/all" },
    { name: "Эмэгтэй", path: "/women" },
    { name: "Эрэгтэй", path: "/men" },
  ],
};
export const langFooterArr = {
  en: {
    MENU: [
      { name: "About us", path: "/" },
      { name: "Products", path: "/all" },
      { name: "Account", path: "/account" },
      { name: "Log out", path: "#" },
    ],
    NEWSLETTER: [
      {
        name: "Carefully curated online store. Featuring simple. Beautifully and thoughtfully designed products.",
        path: "#",
      },
    ],
    LOCATION: [{ name: "Street 120, apartment 35, Ulaanbaatar, Mongolia", path: "#" }],
  },
  mn: {
    МЕНЮ: [
      { name: "Бидний тухай", path: "/" },
      { name: "Бүтээгдэхүүн", path: "/all" },
      { name: "Аккаунт", path: "/account" },
      { name: "Гарах", path: "#" },
    ],
    МЭДЭЭ: [
      {
        name: "онлайн дэлгүүр. Чамин, эрхэмсэг бөгөөд загварлаг.",
        path: "#",
      },
    ],
    ХАЯГ: [{ name: "Монгол улс, Улаанбаатар хот, 120-р гудамж, 35-р байр", path: "#" }],
  },
};
export const langNavbarMobile = {
  en: [
    { name: "all", path: "/all" },
    { name: "men's", path: "/men" },
    { name: "women's", path: "/women" },
  ],
  mn: [
    { name: "Бүгд", path: "/all" },
    { name: "Эрэгтэй", path: "/men" },
    { name: "Эмэгтэй", path: "/women" },
  ],
};

export const specialImges = [
  { url: men1 },
  { url: men2 },
  { url: men3 },
  { url: men4 },
  { url: men5 },
];
export const specialProductDetail = [
  {
    descriptionName: "About collection",
    detail: [
      "We collect beautiful classic men’s design artifacts from the 20th & 21st century..",
      "We collect beautiful classic uniq clothes ever. Our collections all hand made. ",
      "We collect beautiful classic men’s design artifacts from the 20th & 21st century. You can make your own lookbook with mepo af.",
    ],
  },
];

export const ArtistItems = [
  {
    url: khangal,
    type: "Fashion designer",
    name: "Khangal .T",
  },
  {
    url: riaaan,
    type: "Fashion designer",
    name: "Riaann .N",
  },
  {
    url: kris,
    type: "Fashion designer",
    name: "Kris PInkstart",
  },
];
