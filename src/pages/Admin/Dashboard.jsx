import React, { useState, useEffect } from "react";
import {
  Home,
  Users,
  Image as ImageIcon,
  Calendar,
  Mail,
  MessageSquare,
  FileText,
  FolderOpen,
  LogOut,
  DownloadCloud,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent, Button } from "../../components";
import API from "../../context/api";

const tabs = [
  { key: "naming", label: "Naming", icon: Home },
  { key: "dedication", label: "Dedication", icon: Users },
  { key: "couples", label: "Couples", icon: ImageIcon },
  { key: "testimonies", label: "Testimonies", icon: Calendar },
  { key: "contacts", label: "Contacts", icon: Mail },
  { key: "partnerships", label: "Partnerships", icon: MessageSquare },
  { key: "pledge", label: "Pledge Posts", icon: FileText },
  { key: "enquiries", label: "Service Requests", icon: FolderOpen },
  { key: "subscriptions", label: "Subscriptions", icon: FolderOpen },
  { key: "welfare", label: "Welfare", icon: Users },
  { key: "requests", label: "Requests", icon: FolderOpen },
  { key: "firstTimers", label: "First Timers", icon: Users },
  { key: "secondTimers", label: "Second Timers", icon: Users },
  { key: "newBelievers", label: "New Believers", icon: Users },
  { key: "churchMembers", label: "Church Members", icon: Users },
  { key: "programAttendance", label: "Program Attendance", icon: Users },
  { key: "profiles", label: "User Profiles", icon: Users },
];

export default function AdminDashboard() {
  const [active, setActive] = useState("naming");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  const handleTabClick = (key) => {
    setActive(key);
    setMenuOpen(false);
  };

  const renderContent = () => {
    switch (active) {
      case "firstTimers":
        return <DataTable endpoint="/api/first-timer" title="First Timers" />;
      case "secondTimers":
        return <DataTable endpoint="/api/second-timer" title="Second Timers" />;
      case "newBelievers":
        return <DataTable endpoint="/api/new-believer" title="New Believers" />;
      case "churchMembers":
        return (
          <DataTable endpoint="/api/church-member" title="Church Members" />
        );
        case "profiles":
        return <DataTable endpoint="/api/profiles" title="User Profiles" />;
      case "welfare":
        return <DataTable endpoint="/api/welfare" title="Welfare Requests" />;
      case "subscriptions":
        return (
          <DataTable
            endpoint="/api/subscribe"
            title="Newsletter Subscriptions"
          />
        );
      case "contacts":
        return <DataTable endpoint="/api/contact" title="Contact Messages" />;
      case "pledge":
        return <DataTable endpoint="/api/pledge" title="Pledge Posts" />;
      case "enquiries":
        return (
          <DataTable endpoint="/api/enquiries" title="Service Enquiries" />
        );
      case "requests":
        return (
          <DataTable endpoint="/api/requests" title="Prayer/General Requests" />
        );
      case "naming":
        return <DataTable endpoint="/api/baby-naming" title="Naming Submissions" />;
      case "dedication":
        return (
          <DataTable
            endpoint="/api/dedications"
            title="Dedication Submissions"
          />
        );
      case "couples":
        return (
          <DataTable endpoint="/api/couples" title="Couples Submissions" />
        );
      case "testimonies":
        return <DataTable endpoint="/api/testimonies" title="Testimonies" />;
      
      case "partnerships":
        return <DataTable endpoint="/api/partnership" title="Partnerships" />;
        case "programAttendance":
          return <DataTable endpoint="/api/program-attendance" title="Program Attendance" />;
      default:
        return <PlaceholderCard title="Coming Soon" />;
    }
  };

  return (
    <div className="flex mt-20 h-screen dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-40  dark:bg-gray-900 w-64 shrink-0 border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Admin</h2>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
        <nav className="flex flex-col gap-2">
          {tabs.map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              variant="ghost"
              className={`flex items-center gap-3 w-full justify-start rounded-lg transition text-sm font-medium px-3 py-2 ${
                active === key
                  ? "bg-indigo-600 text-white hover:bg-indigo-600/90"
                  : "hover:bg-indigo-100 dark:hover:bg-gray-800"
              }`}
              onClick={() => handleTabClick(key)}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 text-white p-2 rounded-full shadow-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto animate-fadeIn space-y-4">
        {renderContent()}
        <div className="flex justify-end">
          <Button
            onClick={() => window.open("/api/reports/download", "_blank")}
            className="mt-4 bg-green-600 text-white"
          >
            <DownloadCloud className="w-5 h-5 mr-2" /> Download Report PDF
          </Button>
        </div>
      </main>
    </div>
  );
}

const PlaceholderCard = ({ title, children }) => (
  <div>
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      {children || (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This section will be populated once backend integration is complete.
        </p>
      )}
    </div>
  </div>
);

const DataTable = ({ endpoint, title }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => console.error(`Error loading ${title}:`, err))
      .finally(() => setLoading(false));
  }, [endpoint, title]);

  const hiddenFields = ['_id', '__v', 'createdAt', 'updatedAt'];
  const tableHeaders = data.length > 0
    ? Object.keys(data[0]).filter((key) => !hiddenFields.includes(key))
    : [];

  return (
    <div>
      <div className="w-max overflow-x-hidden">
        <h1 className="text-xl font-semibold mb-4">{title}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : data.length > 0 ? (
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                {tableHeaders.map((key) => (
                  <th
                    key={key}
                    className="border px-4 py-2 text-center text-black capitalize"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-white">
              {data.map((row, idx) => (
                <tr key={idx}>
                  {tableHeaders.map((key) => (
                    <td key={key} className="border px-4 py-2">
                      {row[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </div>
  );
};

