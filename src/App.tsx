import "@mantine/core/styles.css";
import "./App.css";
import AppRouter from "./router";
import AppProvider from "./providers";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
export default App;

// import "@mantine/core/styles.css";
// import { useState } from "react";
// import {
//   UnstyledButton,
//   Tooltip,
//   Title,
//   rem,
//   MantineProvider,
// } from "@mantine/core";
// import {
//   IconHome2,
//   IconGauge,
//   IconDeviceDesktopAnalytics,
//   IconFingerprint,
//   IconCalendarStats,
//   IconUser,
//   IconSettings,
// } from "@tabler/icons-react";
// import { theme } from "./theme";
// import "./App.css";

// const mainLinksMockData = [
//   { icon: IconHome2, label: "Home" },
//   { icon: IconGauge, label: "Dashboard" },
//   { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
//   { icon: IconCalendarStats, label: "Releases" },
//   { icon: IconUser, label: "Account" },
//   { icon: IconFingerprint, label: "Security" },
//   { icon: IconSettings, label: "Settings" },
// ];

// const linksMockData = [
//   "Security",
//   "Settings",
//   "Dashboard",
//   "Releases",
//   "Account",
//   "Orders",
//   "Clients",
//   "Databases",
//   "Pull Requests",
//   "Open Issues",
//   "Wiki pages",
// ];

// function App() {
//   const [active, setActive] = useState("Releases");
//   const [activeLink, setActiveLink] = useState("Settings");
//   const mainLinks = mainLinksMockData.map((link) => (
//     <Tooltip
//       label={link.label}
//       position="right"
//       withArrow
//       transitionProps={{ duration: 0 }}
//       key={link.label}
//     >
//       <UnstyledButton
//         onClick={() => setActive(link.label)}
//         className="mainLink"
//         data-active={link.label === active || undefined}
//       >
//         <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
//       </UnstyledButton>
//     </Tooltip>
//   ));

//   const links = linksMockData.map((link) => (
//     <a
//       className="link"
//       data-active={activeLink === link || undefined}
//       href="#"
//       onClick={(event) => {
//         event.preventDefault();
//         setActiveLink(link);
//       }}
//       key={link}
//     >
//       {link}
//     </a>
//   ));
//   return (
//     <MantineProvider theme={theme}>
//       <nav className="navbar">
//         <div className="wrapper">
//           <div className="aside">
//             <div className="logo"></div>
//             {mainLinks}
//           </div>
//           <div className="main">
//             <Title order={4} className="title">
//               {active}
//             </Title>
//             {links}
//           </div>
//         </div>
//       </nav>
//     </MantineProvider>
//   );
// }

// export default App;
