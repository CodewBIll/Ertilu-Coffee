import type { IconType } from "react-icons";
import { FaFacebookF, FaStore, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdDeliveryDining, MdRestaurantMenu } from "react-icons/md";
import { SiGrab, SiShopee } from "react-icons/si";

export type BusinessInfo = {
  name: string;
  tagline: string;
  summary: string;
  address: string;
  mapsUrl: string;
  whatsappUrl: string;
  hours: string;
};

export type ActionLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type AccessLink = {
  label: string;
  href: string;
  icon: IconType;
  note: string;
  iconShellClassName?: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type ValuePoint = {
  title: string;
  description: string;
};

export type VisualStory = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export const businessInfo: BusinessInfo = {
  name: "Ertilu",
  tagline: "Coffee shop hangat untuk kopi yang clean, nyaman, dan mudah dinikmati.",
  summary:
    "Dibuat untuk menikmati kopi tanpa terburu-buru.",
  address:
    "Jl. Bagusrangin No.14, Lebakgede, Coblong, Bandung.",
  mapsUrl: "https://maps.app.goo.gl/H3phVS7D8SJC6peK7",
  whatsappUrl: "https://wa.me/6282219594616",
  hours: "Setiap hari, 09.00 - 22.00 WIB"
};

export const heroStats: StatItem[] = [
  {
    label: "Kualitas Rasa",
    value: "Comforting, clean, dan approachable"
  },
  {
    label: "Open Daily",
    value: businessInfo.hours
  },
  {
    label: "Harga",
    value: "Low cost, high value"
  }
];

export const primaryActions: ActionLink[] = [
  {
    label: "Reservasi via WhatsApp",
    href: businessInfo.whatsappUrl,
    icon: FaWhatsapp
  },
  {
    label: "Lihat Lokasi",
    href: businessInfo.mapsUrl,
    icon: HiOutlineMapPin
  }
];

export const quickAccessLinks: AccessLink[] = [
  {
    label: "Menu",
    href: "https://drive.google.com/file/d/1VBR3gmu6q_aJnFDVu9E7HWtKxsw2Sdec/view?usp=drive_link",
    icon: MdRestaurantMenu,
    note: "Lihat minuman & snack",
    iconShellClassName: "bg-[#f9f2e6] text-[#b87c22]"
  },
  {
    label: "RSV & Contact",
    href: "https://wa.me/6282219594616",
    icon: FaWhatsapp,
    note: "Reservasi & tanya meja",
    iconShellClassName: "bg-[#25d366] text-white"
  },
  {
    label: "GoFood",
    href: "https://gofood.link/u/DM2Or",
    icon: MdDeliveryDining,
    note: "Order cepat dari mobile",
    iconShellClassName: "bg-[#dc2626] text-white"
  },
  {
    label: "GrabFood",
    href: "https://grab.onelink.me/2695613898?pid=inappsharing&c=6-CYXTRJ5WG333GN&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-CYXTRJ5WG333GN&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com",
    icon: SiGrab,
    note: "Alternatif delivery harian",
    iconShellClassName: "bg-[#00b14f] text-white"
  },
  {
    label: "ShopeeFood",
    href: "https://shopee.co.id/universal-link/now-food/shop/885384?deep_and_deferred=1&share",
    icon: SiShopee,
    note: "Akses pesan dari Shopee",
    iconShellClassName: "bg-[#f97316] text-white"
  },
  {
    label: "Tokopedia",
    href: "https://tokopedia.link/Dtqlixw2Ulb",
    icon: FaStore,
    note: "Produk retail",
    iconShellClassName: "bg-[#16a34a] text-white"
  }
];

export const valuePoints: ValuePoint[] = [
  {
    title: "Rasa yang mudah disukai",
    description: "Kopi dibuat supaya tetap punya karakter, tapi tetap nyaman untuk banyak orang."
  },
  {
    title: "Tempat yang enak untuk singgah",
    description: "Hangat, clean, dan cocok untuk ngobrol, kerja ringan, atau rehat sebentar."
  }
];

export const visualStories: VisualStory[] = [
  {
    src: "/images/lounge-scene.svg",
    alt: "Ilustrasi sudut coffee shop Ertilu dengan meja, kursi, dan secangkir kopi.",
    title: "Warm corner, slow coffee",
    caption: "Dibuat untuk duduk lebih lama."
  },
  {
    src: "/images/pour-scene.svg",
    alt: "Ilustrasi setup kopi Ertilu dengan dripper, kettle, dan biji kopi.",
    title: "Quality in every cup",
    caption: "Menonjolkan kualitas seduhan dan pengalaman yang sederhana."
  }
];

export const socialLinks: AccessLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AwmuJUMYr/",
    icon: FaFacebookF,
    note: "Update informasi dan kehadiran brand",
    iconShellClassName: "bg-[#1877f2] text-white"
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@ertilu",
    icon: FaTiktok,
    note: "Daily vibe",
    iconShellClassName: "bg-[#111111] text-white"
  }
];
