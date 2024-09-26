import img1 from "assets/images/thumbnail/thumbnail-1.jpg";
import img2 from "assets/images/thumbnail/thumbnail-2.jpg";
import img3 from "assets/images/thumbnail/thumbnail-3.jpg";
import { URLS } from "shared/utils";

export const MiddleHeaderSelectPlacholder = "All Categories";
export const MiddleHeaderInputPlacholder = "Search for items";

export const middleHeaderActions = [
  { name: "compare", href: URLS.compare, iconName: "git-compare" },
  { name: "wishlist", href: URLS.wishlist, iconName: "heart" },
  { name: "cart", href: URLS.cart, iconName: "cart" },
  { name: "myAccount", href: URLS.account.dashboard, iconName: "user" },
];

export const navbarIcons = [
  { icon: "cart", link: URLS.cart },
  { icon: "heart", link: URLS.wishlist },
];

// Navigation Menu

export const websiteInfo = [
  { name: "location", link: "/", icon: "location-plus" },
  { name: "Login in / Sign up", link: URLS.auth.login, icon: "user" },
  { name: "(+01)-2345-6789", link: "/", icon: "phone" },
];

export const socialMediaLinks = [
  { name: "facebook", link: "https://www.facebook.com" },
  { name: "twitter", link: "https://www.twitter.com" },
  { name: "instagram", link: "https://www.instagram.com" },
  { name: "pinterest", link: "https://www.pinterest.com" },
  { name: "youtube", link: "https://www.youtube.com" },
];

// Account menu
export const accountMenu = [
  { name: "myAccount", link: URLS.account.dashboard },
  { name: "addresses", link: URLS.addresses },
  { name: "orders", link: URLS.orders },
  { name: "wishlist", link: URLS.wishlist },
  { name: "settings", link: URLS.settings },
  { name: "logout", link: URLS.home }, // logout action and navigate to home
];

// Cart menu
export const cartMenu = [
  { img: img1, title: "item 1", amount: 1, price: 100 },
  { img: img2, title: "item 2", amount: 1, price: 200 },
  { img: img3, title: "item 3", amount: 1, price: 400 },
];
