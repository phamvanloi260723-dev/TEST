
import QR_Vu from "@/assets/imageVu_Giang/vu.jpg";
import QR_Giang from "@/assets/imageVu_Giang/giang.jpg";
import bg_bia from "@/assets/imageVu_Giang/bìa.jpg";
// Wedding site configuration - change these values to customize
export const siteConfig = {
  // Couple info
  groomName: "Hoàng Vũ",
  brideName: "Hương Giang",
  // groomFatherName: "Nguyễn Văn Hiền ",
  groomMotherName: "Nguyễn Thị Nguyệt",
  brideFatherName: "Nguyễn Văn Hiền",
  brideMotherName: "Đào Thị Hoan",

  // Dates
  engagementDate: "2026-03-13T07:00:00.000+07:00",
  weddingDate: "2026-03-14T11:00:00.000+07:00", // Cập nhật giờ thành 11:00
  calendarYear: 2026,
  calendarMonth: 2, // tháng 3 (0-indexed)

  // Venue & Location (Groom)
  venueName: "Tại tư gia nhà trai",
  address: "Hoàng Hanh, Tiên Lữ, Hưng Yên, Việt Nam",
  address2: "Nhà Trai",
  eventTime: "17:00",
  eventDate: "2026-03-13T11:00:00.000+07:00",
  
  // Venue & Location (Bride)
  brideVenueName: "Tại tư gia nhà gái",
  brideAddress: "Phố Hiến, Hồng Nam, Hưng Yên, Việt Nam",
  brideAddress2: "Nhà Gái",
  brideEventTime: "16:30",
  brideEventDate: "2026-03-13T11:00:00.000+07:00",
  // Audio
  audioUrl: "/assets/music/i_do-duc_phuc.mp3",

  // API
  dataKey: "d9faced3377732b0edf19e90d1bde0cd5de04801c75eb41743",
  apiUrl: "/api/",

  // Settings
  confetti: true,

  // Maps
  groomMapUrl: "https://maps.app.goo.gl/Fid5EnZZQv4QtKJk8",
  brideMapUrl: "https://maps.app.goo.gl/CjEW5b1QZKVDzQKy9",

  // SEO
  siteUrl: bg_bia,
  title: "Hoàng Vũ & Hương Giang - JunoWed",
  description:
    "Hoàng Vũ & Hương Giang - JunoWed. Trải qua bao nhiêu chuyện thì chúng tôi đã tìm thấy nhau 1 mảnh ghép tình yêu.",

  // Images
  ogImage: bg_bia,

  donationAccounts: [
  {
    id: "groom",
    label: "Chú rể",
    phone: "0847963269",
    qrImage: QR_Vu,
  },
  {
    id: "bride",
    label: "Cô dâu",
    phone: "0339427677",
    qrImage: QR_Giang,
  },
]

};
