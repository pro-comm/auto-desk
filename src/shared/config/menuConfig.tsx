import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import HandymanIcon from "@mui/icons-material/Handyman";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import CableTwoToneIcon from "@mui/icons-material/CableTwoTone";
import TopicTwoToneIcon from "@mui/icons-material/TopicTwoTone";
import DomainVerificationTwoToneIcon from "@mui/icons-material/DomainVerificationTwoTone";
import ManageAccountsTwoToneIcon from "@mui/icons-material/ManageAccountsTwoTone";
import NotificationImportantTwoToneIcon from "@mui/icons-material/NotificationImportantTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import UpdateTwoToneIcon from "@mui/icons-material/UpdateTwoTone";
import RecentActorsTwoToneIcon from "@mui/icons-material/RecentActorsTwoTone";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import DvrTwoToneIcon from "@mui/icons-material/DvrTwoTone";
import SecurityTwoToneIcon from "@mui/icons-material/SecurityTwoTone";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import BallotTwoToneIcon from "@mui/icons-material/BallotTwoTone";
import DynamicFormTwoToneIcon from "@mui/icons-material/DynamicFormTwoTone";
import PodcastsTwoToneIcon from "@mui/icons-material/PodcastsTwoTone";
import CloudCircleTwoToneIcon from "@mui/icons-material/CloudCircleTwoTone";
import DisplaySettingsTwoToneIcon from "@mui/icons-material/DisplaySettingsTwoTone";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import CloudDoneTwoToneIcon from "@mui/icons-material/CloudDoneTwoTone";

export const prepareJsonMenuConfig = [
  {
    label: "Projects",
    icon: (isActive: boolean) => (
      <AssignmentIcon
        fontSize="medium"
        className={`${
          isActive ? "active text-xs" : "text-xs"
        } text-[#98afd3] ml-2`}
      />
    ),
    items: [
      {
        label: "Projects",
        icon: (isActive: boolean) => (
          <TableChartTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/dashboards/project",
      },
    ],
  },
  {
    label: "Assets",
    icon: (isActive: boolean) => (
      <AutoAwesomeMotionIcon
        fontSize="medium"
        className={`${
          isActive ? "active text-xs menu-sub-icons" : "text-xs"
        } text-[#98afd3] ml-2`}
      />
    ),
    items: [
      {
        label: "Asset View",
        icon: (isActive: boolean) => (
          <BallotTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/assets/assetView",
      },
      {
        label: "Volumes",
        icon: (isActive: boolean) => (
          <DynamicFormTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/assets/volumes",
      },
      {
        label: "Networks",
        icon: (isActive: boolean) => (
          <PodcastsTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            }  ml-2`}
          />
        ),
        routerLink: "/assets/networks",
      },
      {
        label: "Load Balancers",
        icon: (isActive: boolean) => (
          <CloudCircleTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/assets/loadBalancers",
      },
      {
        label: "Application Gateway",
        icon: (isActive: boolean) => (
          <DisplaySettingsTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            }  ml-2`}
          />
        ),
        routerLink: "/assets/appGateway",
      },
      {
        label: "Lambda Functions",
        icon: (isActive: boolean) => (
          <SettingsSuggestTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/assets/lambdaFunctions",
      },
      {
        label: "Storage Buckets",
        icon: (isActive: boolean) => (
          <CloudDoneTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/assets/storageBuckets",
      },
    ],
  },
  {
    label: "Configurations",
    icon: (isActive: boolean) => (
      <HandymanIcon
        fontSize="medium"
        className={`${
          isActive ? "active text-xs  menu-sub-icons" : "text-xs"
        } text-[#98afd3] ml-2`}
      />
    ),
    items: [
      {
        label: "Data flow",
        icon: (isActive: boolean) => (
          <AccessAlarmIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs  menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/configurations/data-builder",
      },
      {
        label: "Connection Vault",
        icon: (isActive: boolean) => (
          <CableTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/configurations/connection-vault",
      },
      {
        label: "Master data management",
        icon: (isActive: boolean) => (
          <TopicTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/configurations/mdm",
      },
      {
        label: "Validation configuration",
        icon: (isActive: boolean) => (
          <DomainVerificationTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs  menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/configurations/validation",
      },
    ],
  },
  {
    label: "Settings",
    icon: (isActive: boolean) => (
      <SettingsApplicationsIcon
        fontSize="medium"
        className={`${
          isActive ? "active text-xs menu-sub-icons" : "text-xs"
        } text-[#98afd3] ml-2`}
      />
    ),
    items: [
      {
        label: "Notification & Alerts",
        icon: (isActive: boolean) => (
          <NotificationImportantTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/settings/notification",
      },
      {
        label: "Account",
        icon: (isActive: boolean) => (
          <PermIdentityTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/settings/account",
      },
      {
        label: "Users",
        icon: (isActive: boolean) => (
          <ManageAccountsTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/settings/users",
      },
      {
        label: "Roles",
        icon: (isActive: boolean) => (
          <RecentActorsTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/settings/roles",
      },
      {
        label: "Jobs",
        icon: (isActive: boolean) => (
          <UpdateTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/settings/jobs",
      },
      {
        label: "Security",
        icon: (isActive: boolean) => (
          <SecurityTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        title: "Manage your password and 2-step verification preferences",
        routerLink: "/settings/security",
      },
      {
        label: "Cloud Profile",
        icon: (isActive: boolean) => (
          <FilterDramaTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/settings/cloud-profile",
      },
    ],
  },
  {
    label: "Logs",
    icon: (isActive: boolean) => (
      <ContentPasteIcon
        fontSize="medium"
        className={`${
          isActive ? "active text-xs menu-sub-icons" : "text-xs"
        } text-[#98afd3] ml-2`}
      />
    ),
    items: [
      {
        label: "Login Audit",
        icon: (isActive: boolean) => (
          <AdminPanelSettingsTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            }  ml-2`}
          />
        ),
        routerLink: "/log/login-audit",
        badge: "",
      },
      {
        label: "System Audit",
        icon: (isActive: boolean) => (
          <DvrTwoToneIcon
            fontSize="medium"
            className={`${
              isActive
                ? "active text-xs menu-sub-icons"
                : "text-xs  text-[rgba(0,0,0,0.5)]"
            } ml-2`}
          />
        ),
        routerLink: "/log/system-audit",
      },
    ],
  },
];
