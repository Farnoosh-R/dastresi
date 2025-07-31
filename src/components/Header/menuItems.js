import { lazy } from "react";

export const menuItems = [
  {label: "خانه", path: "/"},
  { label: "لوازم جانبی موبایل و کامپیوتر", path: "/a",
    subMenu: [
        {label: "هولدر و نگهدارنده", path: "/a"},
        {label: "تجهیزات ذخیره سازی", path: "/a",
            subMenu: [
                {label: "فلش مموری", path: "/a"},
                {label: "کارت حافظه", path: "/a"},
                {label: "هارد اکسترنال", path: "/a"}
            ]
        },
        {label: "اسپیکر", path: "/a"},
        {label: "ماوس و کیبورد و پدموس", path: "/a"},
        {label: "هندزفری و هدست، میکروفون", path: "/a",
            subMenu: [
                {label: "میکروفون", path: "/a"},
                {label: "هندزفری سیم دار", path: "/a"},
                {label: "هدست سیم دار", path: "/a"},
                {label: "هدفون بلوتوث", path: "/a"},
                {label: "هندزفری بلوتوث دو گوش", path: "/a"},
                {label: "هندزفری بلوتوث دورگردنی", path: "/a"},
                {label: "هندزفری بلوتوث تک گوش", path: "/a"}
            ]
        },
        {label: "پاوربانک و جامپ استارتر", path: "/a"},
        {label: "کابل شارژ", path: "/a", 
            subMenu: [
                {label: "کابل شارژ  میکرو یو اس بی", path: "/a"},
                {label: "کابل شارژ تایپ سی", path: "/a"},
                {label: "کابل شارژ لایتنینگ", path: "/a"},
                {label: "کابل شارژ  دو سر تایپ سی", path: "/a"},
                {label: "کابل شارژ  تایپ سی به لایتنینگ", path: "/a"},
                {label: "کابل شارژ  سه کاره", path: "/a"},
                {label: "کابل شارژ سامسونگ", path: "/a"},
                {label: "کابل شارژ آیفون", path: "/a"}
            ]
        },
        {label: "آداپتور و شارژر", path: "/a",
            subMenu: [
                {label: "شارژر دیواری", path: "/a"},
                {label: "شارژر وایرلس", path: "/a"},
                {label: "شارژر رومیزی", path: "/a"},
                {label: "شارژر فندکی", path: "/a"},
                {label: "شارژر سامسونگ", path: "/a"},
                {label: "شارژر آیفون", path: "/a"}
            ]
        },
        {label: "دسته بازی و خنک کننده موبایل", path: "/a"},
        {label: "انواع تبدیل برق", path: "/a"},
        {label: "کابل و دانگل انتقال تصویر", path: "/a"},
        {label: "انواع هاب", path: "/a"},
        {label: "فن خنک کننده کامپیوتر", path: "/a"},
        {label: "قاب و گلس", path: "/a"}
    ]
   },
   {label: "کابل - مبدل - رابط", path: "/a",
    subMenu: [
        {label: "کابل HDMI", path: "/a"},
        {label: "کابل پرینتر", path: "/a"},
        {label: "کابل هارد اکسترنال", path: "/a"},
        {label: "انواع رابط و تبدیل", path: "/a"},
        {label: "کابل AUX", path: "/a"},
        {label: "کابل 2 به 1 صدا", path: "/a"},
        {label: "کابل اپتیکال", path: "/a"},
        {label: "کابل و فیش OTG", path: "/a"}
    ]
   },
  { label: "لوازم تولید محتوا", path: "/a",
    subMenu: [
        {label: "میکروفون", path: "/a"},
        {label: "رینگ لایت و پایه", path: "/a"},
    ]
  },
  { label: "لوازم شبکه", path: "/a",
    subMenu: [
        {label: "مودم - روتر", path: "/a"},
        {label: "هاب شبکه", path: "/a"},
        {label: "مودم همراه", path: "/a"},
        {label: "لوازم  جانبی", path: "/a"}
    ]
   },
  { label: "کنسول بازی و لوازم جانبی", path: "/a",
    subMenu: [
        {label: "هندزفری و هدست", path: "/a"},
        {label: "دسته بازی", path: "/a"},
        {label: "موس و کیبورد", path: "/a"},
        {label: "کیف", path: "/a"},
        {label: "کنسول", path: "/a"},
        {label: "شارژر دسته بازی", path: "/a"},
    ]
   },
  {label: "لوازم خانگی و شخصی", path: "/a",
    subMenu: [
        {label: "انواع گجت های جذاب", path: "/a"},
        {label: "باتری و شارژر", path: "/a"},
        {label: "اندروید باکس و گیرنده دیجیتال", path: "/a"},
        {label: "آنتن رومیزی", path: "/a"},
        {label: "مچ بند و ساعت هوشمند", path: "/a"},
        {label: "محصولات کمبو", path: "/a"},
        {label: "رابط برق و USB", path: "/a"},
        {label: "اف ام پلیر", path: "/a"},
    ]
  },
  {label: "برند‌ها", path: "/a"}
];
