import cafeProject from "../img/Screenshot 2026-04-21 132033.png"
import hotelProject from "../img/Screenshot 2026-05-16 232242.png"

export const projectData = [
    {
        id: 1,
        title: "Web Cafe Project",
        desc: "เว็บไซต์ร้านกาแฟ Full-stack สร้างด้วย React และ FastAPI มีฟีเจอร์แสดงเมนูและหมวดหมู่ เมนูแนะนำ แดชบอร์ดสำหรับแอดมิน ระบบจัดการผู้ใช้ และแผนที่ร้าน รองรับการล็อกอินพร้อมกำหนดสิทธิ์การเข้าถึงตามบทบาท",
        img: cafeProject,
        url: "https://cafe-fronend.vercel.app/"
    },
    {
        id: 2,
        title: "Web Hotel Project",
        desc: "เว็บระบบจองห้องพักโรงแรม พัฒนาด้วย Next.js, FastAPI, Tailwind CSS และ MySQL แยกส่วน Frontend และ Backend อย่างชัดเจน เพื่อให้ระบบยืดหยุ่นและรองรับการขยายในอนาคตระบบรองรับการจองห้องพัก, จัดการประเภทห้อง, อัปโหลดรูปภาพ, ชำระเงิน และ Dashboard สำหรับผู้ดูแลระบบ พร้อมการจัดการข้อมูลแบบเรียลไทม์ผ่าน API",
        img: hotelProject,
        url: "https://hotel-frontend-vewh.vercel.app/"
    }
]