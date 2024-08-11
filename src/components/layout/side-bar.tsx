import "@mantine/core/styles.css";
import { useState, useEffect } from "react";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import {
  IconHome2,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";
import { useRouter } from "@/hooks";

const mainLinksMockData = [
  { icon: IconHome2, label: "Home", path: "/" },
  // { icon: IconGauge, label: "Dashboard", path: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", path: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", path: "/releases" },
  { icon: IconUser, label: "Account", path: "/account" },
  { icon: IconFingerprint, label: "Security", path: "/security" },
  { icon: IconSettings, label: "Settings", path: "/settings" },
];

const sideLinksMap: Record<string, string[]> = {
  Home: ["Overview", "Updates", "Analytics", "Goals"],
  Analytics: ["Sales", "Traffic", "Engagement"],
  Releases: ["Upcoming", "Past", "Roadmap"],
  Account: ["Profile", "Settings", "Security"],
  Security: ["Logs", "Alerts", "Permissions"],
  Settings: ["General", "Notifications", "Privacy"],
};

function SideBar() {
  const [active, setActive] = useState("Home");
  const [activeLink, setActiveLink] = useState("Overview");
  const [sideLinks, setSideLinks] = useState<string[]>(sideLinksMap["Home"]); // Initialize with the first set of links
  const location = useLocation();
  const router = useRouter();

  console.log(location.pathname);

  type MainLink = keyof typeof sideLinksMap;

  useEffect(() => {
    // Update activeLink to the first item of the updated sideLinks
    if (sideLinks.length > 0) {
      setActiveLink(sideLinks[0]);
    }
  }, [sideLinks]);

  const handleMainLinkClick = (label: MainLink, path: string) => {
    router.push(path);
    setActive(label);
    const newSideLinks = sideLinksMap[label] || [];
    setSideLinks(newSideLinks);
  };

  const mainLinks = mainLinksMockData.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => handleMainLinkClick(link.label as MainLink, link.path)}
        className="mainLink"
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = sideLinks.map((link) => (
    <Link
      className="link"
      to={`/${active.toLowerCase()}/${link.toLowerCase()}`}
      data-active={activeLink === link || undefined}
      key={link}
      onClick={() => setActiveLink(link)}
    >
      {link}
    </Link>
  ));

  console.log(links);
  return (
    <section>
      <nav className="navbar">
        <div className="wrapper">
          <div className="aside">
            <div className="logo"></div>
            {mainLinks}
          </div>
          <div className="main">
            <Title order={4} className="title">
              {active}
            </Title>
            {links}
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SideBar;
