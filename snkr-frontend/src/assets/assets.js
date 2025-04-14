// import { v4 as uuidv4 } from "uuid";

import img_1 from "./amiri-arts-district-white-t-shirt.png";
import img_2 from "./Burberry-Short-Sleeve-Poplin-Check-Shirt.png";
import img_3 from "./chrome-hearts-stadium-mesh-red-tshirt.png";
import img_4 from "./Dior-Oblique-Beige-Navy-Blue-overshirt.png";
import img_5 from "./dior-oblique-blouson-black-gilet-jacket.png";
import img_6 from "./dior-oblique-blouson-navy-blue-jacket.png";
import img_7 from "./loewe-anagram-cotton-black-sweatshirt.png";
import img_8 from "./louis-vuitton-2054-planes-black-tshirt.png";
import img_9 from "./Louis-Vuitton-LV-Monogram-Hoodie.png";
import img_10 from "./louis-vuitton-monogram-bandana-shirt.png";
import img_11 from "./louis-vuitton-monogram-denim-shirt.png";
import img_12 from "./prada-padded-re-nylon-black-gilet-jacket.png";

// sneakers
import img_13 from "./louis-vuitton-x-nike-air-force-1.png"
import img_14 from "./preloved---air-jordan-1-x-off-wh.png"
import img_15 from "./air-jordan-1-x-off-white-retro-h.png"

import logo from "./logo.jpg";
import hero_img from "./hero_img.png";
import hero_img_mobile_screen from "./hero_img_mobile_screen.png";
import cart_icon from "./cart.svg";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import fast_delivery_icon from "./fast_delivery_icon.png";
import user_icon from "./user.svg";
import free_shipping_icon from "./free_shipping_icon.png";
import search_icon from "./search.svg";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import secure_payment_icon from "./secure_payment_icon.png";
import menu_icon from "./menu.svg";
import about_img1 from "./about_store.jpg";
import contact_img from "./contact_img.png";
import razorpay_logo from "./razorpay_logo.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";
import filter_icon from './filter.svg'
import down_arrow_icon from './down-arrow.svg'
import close_icon from './close.svg'
export const assets = {
  logo,
  hero_img,
  hero_img_mobile_screen,
  cart_icon,
  dropdown_icon,
  fast_delivery_icon,
  secure_payment_icon,
  free_shipping_icon,
  user_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  menu_icon,
  about_img1,
  contact_img,
  razorpay_logo,
  stripe_logo,
  cross_icon,
  filter_icon,
  down_arrow_icon,
  close_icon
};

export const products = [
  {
    _id: "aaaaa",
    name: "amiri",
    sub_name: "amiri arts district white t-shirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 13999,
    image: [img_1],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaab",
    name: "burberry",
    sub_name: "burberry short sleeve checks shirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_2],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaac",
    name: "chrome hearts",
    sub_name: "chrome hearts mesh red jearsy",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_3],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaad",
    name: "dior",
    sub_name: "dior oblique navy blue oveshirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_4],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaae",
    name: "dior",
    sub_name: "dior oblique blouson black gilet",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_5],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaaf",
    name: "dior",
    sub_name: "dior obliuqe navy blue jacket",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_6],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaag",
    name: "loewe",
    sub_name: "loewe anagram black sweatshirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_7],
    category: "Womens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaah",
    name: "louis vuitton",
    sub_name: "louis vuitton 2054 planes tshirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_8],
    category: "Womens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaai",
    name: "louis vuitton",
    sub_name: "louis vuitton monogram hoodie",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_9],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaaj",
    name: "louis vuitton",
    sub_name: "lv monogram denim shirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_10],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaak",
    name: "louis vuitton",
    sub_name: "louis vuitton monogram denim shirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_11],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaal",
    name: "louis vuitton",
    sub_name: "louis vuitton monogram denim shirt",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 10999,
    image: [img_12],
    category: "Mens",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: Date.now(),
    bestseller: true,
  },
];

export const productsf = [
  {
    _id: "aaaam",
    name: "louis vuitton x nike",
    sub_name: "amiri Louis Vuitton x Nike Air Force 1 Low Metallic Gold",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 13999,
    image: [img_13],
    category: "Mens",
    subCategory: "Footwear",
    sizes: ["UK7", "UK8", "UK9", "UK10", "UK10.5"],
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaan",
    name: "air jordan",
    sub_name: "Air Jordan 1 x Off-White 1 Retro High OG Chicago ",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 13999,
    image: [img_14],
    category: "Mens",
    subCategory: "Footwear",
    sizes: ["UK7", "UK8", "UK9", "UK10", "UK10.5"],
    type: "new",
    date: Date.now(),
    bestseller: true,
  },
  {
    _id: "aaaao",
    name: "air jordan",
    sub_name: "Air Jordan 1 X Off-White Retro High UNC University Blue",
    // description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt.",
    price: 13999,
    image: [img_15],
    category: "Mens",
    subCategory: "Footwear",
    sizes: ["UK7", "UK8", "UK9", "UK10", "UK10.5"],
    date: Date.now(),
    bestseller: true,
  },
];
