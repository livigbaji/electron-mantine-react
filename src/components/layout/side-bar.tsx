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
import { Link, useLocation, useNavigate } from "react-router-dom";

const mainLinksMockData = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", path: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", path: "/releases" },
  { icon: IconUser, label: "Account", path: "/account" },
  { icon: IconFingerprint, label: "Security", path: "/security" },
  { icon: IconSettings, label: "Settings", path: "/settings" },
];

const sideLinksMap: Record<string, { name: string; path: string }[]> = {
  Home: [
    { name: "Overview", path: "/" },
    { name: "Updates", path: "/updates" },
    { name: "Analytics", path: "/analytics" },
  ],
  Analytics: [
    { name: "Sales", path: "/analytics" },
    { name: "Traffic", path: "/traffic" },
    { name: "Engagement", path: "/engagement" },
  ],
  Releases: [
    { name: "Upcoming", path: "/releases" },
    { name: "Past", path: "/past" },
    { name: "Roadmap", path: "/roadmap" },
  ],
  Account: [
    { name: "Profile", path: "/account" },
    { name: "Settings", path: "/settings" },
    { name: "Security", path: "/security" },
  ],
  Security: [
    { name: "Logs", path: "/security" },
    { name: "Alerts", path: "/alerts" },
    { name: "Permissions", path: "/permissions" },
  ],
  Settings: [
    { name: "General", path: "/settings" },
    { name: "Notifications", path: "/notifications" },
    { name: "Privacy", path: "/privacy" },
  ],
};

function SideBar() {
  const [active, setActive] = useState("Home");
  const [activeLink, setActiveLink] = useState(sideLinksMap["Home"][0].name);
  const [sideLinks, setSideLinks] = useState(sideLinksMap["Home"]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Update activeLink to the first item of the updated sideLinks
    if (sideLinks.length > 0) {
      setActiveLink(sideLinks[0].name);
    }
  }, [sideLinks]);

  useEffect(() => {
    // Update the active link based on the current pathname
    const currentPath = location.pathname;
    const currentLink = sideLinks.find((link) => link.path === currentPath);
    if (currentLink) {
      setActiveLink(currentLink.name);
    }
  }, [location.pathname, sideLinks]);

  const handleMainLinkClick = (label: string, path: string) => {
    navigate(path);
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
        onClick={() => handleMainLinkClick(link.label, link.path)}
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
      to={link.path}
      data-active={activeLink === link.name || undefined}
      key={link.name}
      onClick={() => setActiveLink(link.name)}
    >
      {link.name}
    </Link>
  ));

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
