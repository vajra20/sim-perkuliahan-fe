// Pages
import Penugasan from "./pages/Mahasiswa/Penugasan";
import Jadwal from "./pages/Mahasiswa/Jadwal";
import Index from "./pages/Mahasiswa/Index";

// Icons
import scheduleIcon from "@iconify/icons-akar-icons/schedule";
import homeIcon from "@iconify/icons-tabler/home";
import dashboardLine from "@iconify/icons-ri/dashboard-line";

var routes = [
  {
    path: "/beranda",
    name: "Beranda",
    icon: dashboardLine,
    component: <Index />,
    layout: "/mahasiswa",
  },
  {
    path: "/jadwal",
    name: "Jadwal",
    icon: scheduleIcon,
    component: <Jadwal />,
    layout: "/mahasiswa",
  },
  {
    path: "/penugasan",
    name: "Penugasan",
    icon: homeIcon,
    component: <Penugasan />,
    layout: "/mahasiswa",
  },
];
export default routes;
