// Pages Admin
import AdminPage from "./pages/Admin/Index";
import Dosen from "./pages/Admin/Dosen";
import Mahasiswa from "./pages/Admin/Mahasiswa";

// Pages Mahasiswa
import MahasiswaPage from "./pages/Mahasiswa/Index";
import Jadwal from "./pages/Mahasiswa/Jadwal";
import Penugasan from "./pages/Mahasiswa/Penugasan/Index";
import ListTugas from "./pages/Mahasiswa/Penugasan/ListTugas";
import DetailTugas from "./pages/Mahasiswa/Penugasan/DetailTugas";

// Pages Dosen
import DosenPage from "./pages/Dosen/Index";

// Icons
import scheduleIcon from "@iconify/icons-akar-icons/schedule";
import homeIcon from "@iconify/icons-tabler/home";
import dashboardLine from "@iconify/icons-ri/dashboard-line";
import chalkboardTeacher from "@iconify/icons-la/chalkboard-teacher";
import collegeOutline from "@iconify/icons-mdi/college-outline";
import calendarLinear from "@iconify/icons-solar/calendar-linear";
import Tugas from "./pages/Dosen/Tugas";
import Absensi from "./pages/Dosen/Absensi";
import news16Regular from "@iconify/icons-fluent/news-16-regular";
import BeritaAcara from "./pages/Dosen/BeritaAcara";

var routes = [
  // Layout Mahasiswa
  {
    path: "/beranda",
    name: "Beranda",
    icon: dashboardLine,
    component: <MahasiswaPage />,
    layout: "/mahasiswa",
    allow: true,
    role: "mahasiswa",
  },
  {
    path: "/jadwal",
    name: "Jadwal",
    icon: scheduleIcon,
    component: <Jadwal />,
    layout: "/mahasiswa",
    allow: true,
    role: "mahasiswa",
  },
  {
    path: "/penugasan",
    name: "Penugasan",
    icon: homeIcon,
    component: <Penugasan />,
    layout: "/mahasiswa",
    allow: true,
    role: "mahasiswa",
  },
  {
    path: "/penugasan/list-tugas",
    name: "List Tugas",
    component: <ListTugas />,
    layout: "/mahasiswa",
    allow: false,
  },
  {
    path: "/penugasan/list-tugas/detail-tugas",
    name: "Detail Tugas",
    component: <DetailTugas />,
    layout: "/mahasiswa",
    allow: false,
  },

  // Layout Admin
  {
    path: "/beranda-admin",
    name: "Beranda",
    icon: dashboardLine,
    component: <AdminPage />,
    layout: "/admin",
    allow: true,
    role: "admin",
  },
  {
    path: "/dosen",
    name: "Dosen",
    icon: chalkboardTeacher,
    component: <Dosen />,
    layout: "/admin",
    allow: true,
    role: "admin",
  },
  {
    path: "/mahasiswa",
    name: "Mahasiswa",
    icon: collegeOutline,
    component: <Mahasiswa />,
    layout: "/admin",
    allow: true,
    role: "admin",
  },

  // Layout Dosen
  {
    path: "/beranda-dosen",
    name: "Beranda",
    icon: dashboardLine,
    component: <DosenPage />,
    layout: "/dosen",
    allow: true,
    role: "dosen",
  },
  {
    path: "/tugas",
    name: "Tugas",
    icon: scheduleIcon,
    component: <Tugas />,
    layout: "/dosen",
    allow: true,
    role: "dosen",
  },
  {
    path: "/absensi",
    name: "Absensi",
    icon: calendarLinear,
    component: <Absensi />,
    layout: "/dosen",
    allow: true,
    role: "dosen",
  },
  {
    path: "/berita-acara",
    name: "Berita Acara",
    icon: news16Regular,
    component: <BeritaAcara />,
    layout: "/dosen",
    allow: true,
    role: "dosen",
  },
];
export default routes;
