// Pages Admin
import AdminPage from "./pages/Admin/Index";
import Dosen from "./pages/Admin/Dosen";
import Mahasiswa from "./pages/Admin/Mahasiswa";
import CreateEvent from "./pages/Admin/CreateEvent";

// Pages Mahasiswa
import MahasiswaPage from "./pages/Mahasiswa/Index";
import Jadwal from "./pages/Mahasiswa/Jadwal";
import Penugasan from "./pages/Mahasiswa/Penugasan/Index";
import ListTugas from "./pages/Mahasiswa/Penugasan/ListTugas";
import DetailTugas from "./pages/Mahasiswa/Penugasan/DetailTugas";
import TopikTugas from "./pages/Mahasiswa/Penugasan/TopikTugas";

// Pages Dosen
import DosenPage from "./pages/Dosen/Index";
import Absensi from "./pages/Dosen/Absensi";
import BeritaAcara from "./pages/Dosen/BeritaAcara";
import Tugas from "./pages/Dosen/Tugas/Tugas";
import ListSiswa from "./pages/Dosen/Tugas/ListSiswa";

// Icons
import scheduleIcon from "@iconify/icons-akar-icons/schedule";
import homeIcon from "@iconify/icons-tabler/home";
import dashboardLine from "@iconify/icons-ri/dashboard-line";
import chalkboardTeacher from "@iconify/icons-la/chalkboard-teacher";
import collegeOutline from "@iconify/icons-mdi/college-outline";
import calendarLinear from "@iconify/icons-solar/calendar-linear";
import news16Regular from "@iconify/icons-fluent/news-16-regular";

var routes = [
	// Layout Mahasiswa
	{
		path: "/beranda",
		name: "Beranda",
		icon: dashboardLine,
		component: <MahasiswaPage />,
		layout: "/mahasiswa",
		allow: true,
		role: "Mahasiswa",
	},
	// {
	//   path: "/jadwal",
	//   name: "Jadwal",
	//   icon: scheduleIcon,
	//   component: <Jadwal />,
	//   layout: "/mahasiswa",
	//   allow: true,
	//   role: "Mahasiswa",
	// },
	{
		path: "/penugasan",
		name: "Penugasan",
		icon: homeIcon,
		component: <Penugasan />,
		layout: "/mahasiswa",
		allow: true,
		role: "Mahasiswa",
	},
	{
		path: "/penugasan/:id",
		name: "Penugasan",
		icon: homeIcon,
		component: <TopikTugas />,
		layout: "/mahasiswa",
		allow: false,
		role: "Mahasiswa",
	},
	{
		path: "/penugasan/:id/:topik",
		name: "List Tugas",
		component: <ListTugas />,
		layout: "/mahasiswa",
		allow: false,
	},
	{
		path: "/penugasan/:id/:topik/:id",
		name: "Detail Tugas",
		component: <DetailTugas />,
		layout: "/mahasiswa",
		allow: false,
	},

	// Layout Admin
	{
		path: "/beranda",
		name: "Beranda",
		icon: dashboardLine,
		component: <AdminPage />,
		layout: "/admin",
		allow: true,
		role: "Admin",
	},
	{
		path: "/dosen",
		name: "Dosen",
		icon: chalkboardTeacher,
		component: <Dosen />,
		layout: "/admin",
		allow: true,
		role: "Admin",
	},
	{
		path: "/mahasiswa",
		name: "Mahasiswa",
		icon: collegeOutline,
		component: <Mahasiswa />,
		layout: "/admin",
		allow: true,
		role: "Admin",
	},
	{
		path: "/create-acara",
		name: "Buat Acara",
		icon: collegeOutline,
		component: <CreateEvent />,
		layout: "/admin",
		allow: true,
		role: "Admin",
	},

	// Layout Dosen
	{
		path: "/beranda",
		name: "Beranda",
		icon: dashboardLine,
		component: <DosenPage />,
		layout: "/dosen",
		allow: true,
		role: "Dosen",
	},
	{
		path: "/tugas/:id",
		name: "Tugas",
		icon: scheduleIcon,
		component: <Tugas />,
		layout: "/dosen",
		allow: false,
		role: "Dosen",
	},
	{
		path: "/tugas/siswa-tugas/:id",
		component: <ListSiswa />,
		layout: "/dosen",
		allow: false,
		role: "Dosen",
	},
	{
		path: "/absensi",
		name: "Absensi",
		icon: calendarLinear,
		component: <Absensi />,
		layout: "/dosen",
		allow: true,
		role: "Dosen",
	},
	{
		path: "/berita-acara",
		name: "Berita Acara",
		icon: news16Regular,
		component: <BeritaAcara />,
		layout: "/dosen",
		allow: true,
		role: "Dosen",
	},
];
export default routes;
