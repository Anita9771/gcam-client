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
import { Button } from "../../components";
import API from "../../context/api";

const tabs = [
  { key: "naming", label: "Naming", icon: Home },
  { key: "dedication", label: "Dedication", icon: Users },
  { key: "couples", label: "Couples", icon: ImageIcon },
  { key: "testimonies", label: "Testimonies", icon: Calendar },
  { key: "contacts", label: "Contacts", icon: Mail },
  { key: "partnerships", label: "Partnerships", icon: MessageSquare },
  { key: "pledge", label: "Pledge Posts", icon: FileText },
  { key: "enquiries", label: "Enquiries", icon: FolderOpen },
  // { key: "subscriptions", label: "Subscriptions", icon: FolderOpen },
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
    window.location.href = "/join-us/admin-login";
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
        return <DataTable endpoint="/api/welfare" title="Welfare" />;
      // case "subscriptions":
      //   return (
      //     <DataTable
      //       endpoint="/api/subscribe"
      //       title="Newsletter Subscriptions"
      //     />
      //   );
      case "contacts":
        return <DataTable endpoint="/api/contacts" title="Contact Messages" />;
      case "pledge":
        return <DataTable endpoint="/api/pledge" title="Pledge Posts" />;
      case "enquiries":
        return <DataTable endpoint="/api/enquiries" title="Enquiries" />;
      case "requests":
        return (
          <DataTable endpoint="/api/requests" title="Prayer/General Requests" />
        );
      case "naming":
        return (
          <DataTable endpoint="/api/baby-naming" title="Naming Submissions" />
        );
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
        return (
          <DataTable
            endpoint="/api/program-attendance"
            title="Program Attendance"
            splitByProgram
          />
        );
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
            onClick={() =>
              window.open(
                "/assets/forms/Ministry_Remittance_Form.pdf",
                "_blank"
              )
            }
            className="mt-4 bg-green-600 text-white"
          >
            <DownloadCloud className="w-5 h-5 mr-2" /> Download Remittance Form
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

const DataTable = ({ endpoint, title, splitByProgram = false }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [programFilter, setProgramFilter] = useState("ALL"); // ALL | PRAISE | AWAKENING | UNKNOWN
  const [showDuplicates, setShowDuplicates] = useState(false);
  const [deduplicatedData, setDeduplicatedData] = useState([]);
  const [showDuplicateGroups, setShowDuplicateGroups] = useState(false);

  useEffect(() => {
    setLoading(true);
    API.get(endpoint)
      .then((res) => setData(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error(`Error loading ${title}:`, err))
      .finally(() => setLoading(false));
  }, [endpoint, title]);

  // Deduplication logic
  const deduplicateData = (rawData) => {
    if (!rawData || rawData?.length === 0) return [];

    // Create a map to track duplicates
    const duplicateMap = new Map();
    const duplicates = [];
    const unique = [];

    rawData.forEach((item, index) => {
      // Create a unique key based on email, phone, and name fields
      const email = (item.email || item.contactEmail || "")
        .toLowerCase()
        .trim();
      const phone = (item.phone || "").replace(/\D/g, ""); // Remove non-digits
      const name = (
        item.fullName ||
        item.name ||
        item.childName ||
        item.partner1Name ||
        ""
      )
        .toLowerCase()
        .trim();

      // For couples, also check partner2Name
      const partner2Name = (item.partner2Name || "").toLowerCase().trim();

      // Create composite key for deduplication
      let key = `${email}-${phone}-${name}`;
      if (partner2Name) {
        key += `-${partner2Name}`;
      }

      if (key === "--" || key === "---") {
        // Skip items with no identifying information
        unique.push({ ...item, _isDuplicate: false, _duplicateGroup: null });
        return;
      }

      if (duplicateMap.has(key)) {
        // This is a duplicate
        const duplicateGroup = duplicateMap.get(key);
        duplicateGroup.push({
          ...item,
          _isDuplicate: true,
          _duplicateGroup: key,
          _originalIndex: index,
        });
        duplicates.push({
          ...item,
          _isDuplicate: true,
          _duplicateGroup: key,
          _originalIndex: index,
        });
      } else {
        // First occurrence - mark as original
        duplicateMap.set(key, [
          {
            ...item,
            _isDuplicate: false,
            _duplicateGroup: key,
            _originalIndex: index,
          },
        ]);
        unique.push({
          ...item,
          _isDuplicate: false,
          _duplicateGroup: key,
          _originalIndex: index,
        });
      }
    });

    return { unique, duplicates, duplicateMap };
  };

  // Update deduplicated data when raw data changes
  useEffect(() => {
    const { unique } = deduplicateData(data);
    setDeduplicatedData(unique);
  }, [data]);

  // Render duplicate groups for management
  const renderDuplicateGroups = (duplicateMap) => {
    if (!duplicateMap || duplicateMap.size === 0) return null;

    return (
      <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="text-lg font-semibold mb-3 text-yellow-800 dark:text-yellow-200">
          Duplicate Groups ({duplicateMap.size})
        </h3>
        <div className="space-y-3">
          {Array.from(duplicateMap.entries()).map(([key, group]) => (
            <div
              key={key}
              className="p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700"
            >
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Group ID: {key.substring(0, 20)}...
              </div>
              <div className="space-y-2">
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded text-sm ${
                      item._isDuplicate
                        ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                        : "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-semibold ${
                          item._isDuplicate
                            ? "text-red-700 dark:text-red-300"
                            : "text-green-700 dark:text-green-300"
                        }`}
                      >
                        {item._isDuplicate ? "DUPLICATE" : "ORIGINAL"}
                      </span>
                      <span className="text-xs text-gray-500">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "No date"}
                      </span>
                    </div>
                    <div className="mt-1 text-gray-700 dark:text-gray-300">
                      {item.fullName ||
                        item.name ||
                        item.childName ||
                        item.partner1Name}
                      {item.partner2Name && ` & ${item.partner2Name}`}
                      {item.email && ` (${item.email})`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Fields we don't show
  const hiddenFields = [
    "_id",
    "__v",
    "createdAt",
    "updatedAt",
    "isAdmin",
    "image",
    "_isDuplicate",
    "_duplicateGroup",
    "_originalIndex",
  ];

  // --- NEW: alias map (index-based) -----------------------------------------
  // Index 0 => PRAISE, Index 1 => AWAKENING
  const PROGRAM_ALIASES = [
    // PRAISE aliases (English + German + common variations)
    [
      "innsbruck city praise",
      "city praise innsbruck",
      "innsbruck stadt lobpreis",
      "stadt lobpreis innsbruck",
      "lobpreis innsbruck",
      "elogios à cidade de innsbruck",
    ],
    // AWAKENING aliases
    [
      "innsbruck spiritual awakening",
      "spiritual awakening innsbruck",
      "innsbruck geistliches erwachen",
      "geistliches erwachen innsbruck",
      "geistliches erwachen",
      "despertar espiritual de innsbruck",
      "innsbruck spirituelles erwachen.",
      "innsbruck spirituelles erwachen",
    ],
  ];

  const PRAISE_LABEL = "Innsbruck City Praise";
  const AWAKENING_LABEL = "Innsbruck Spiritual Awakening";

  // Robust normalizer (trim, collapse spaces, lowercase)
  const normalize = (s) =>
    (s ?? "")
      .toString()
      .normalize("NFKD") // handles diacritics
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  // Map any translated/synonym label to canonical bucket via index-based aliases
  const canonicalizeProgram = (programRaw) => {
    const n = normalize(programRaw);
    const idx = PROGRAM_ALIASES.findIndex((aliasList) =>
      aliasList.some((a) => a === n)
    );
    if (idx === 0) return "PRAISE";
    if (idx === 1) return "AWAKENING";
    return "UNKNOWN";
  };
  // --------------------------------------------------------------------------

  // Utility: get visible headers for a given dataset
  const getHeaders = (rows) => {
    if (!rows || rows?.length === 0) return [];
    return Object.keys(rows[0])?.filter((key) => !hiddenFields.includes(key));
  };

  // Utility: render a single table for a dataset
  const renderTable = (rows, tableTitle) => {
    const tableHeaders = getHeaders(rows?.length ? rows : data);

    if (loading) return <p>Loading...</p>;
    if (!rows || rows?.length === 0) return <p>No data found.</p>;

    return (
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">
          {tableTitle}{" "}
          <span className="text-sm text-gray-400">({rows?.length})</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-center text-black">
                  Status
                </th>
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
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    row._isDuplicate ? "bg-red-100 dark:bg-red-900/20" : ""
                  }
                >
                  <td className="border px-4 py-2 text-center">
                    {row._isDuplicate ? (
                      <span className="text-red-600 font-semibold text-xs">
                        DUPLICATE
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold text-xs">
                        UNIQUE
                      </span>
                    )}
                  </td>
                  {tableHeaders.map((key) => (
                    <td key={key} className="border px-4 py-2">
                      {row[key] !== null && row[key] !== undefined
                        ? String(row[key])
                        : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Default single table (for other endpoints)
  if (!splitByProgram) {
    const { unique, duplicates, duplicateMap } = deduplicateData(data);
    const displayData = showDuplicates ? data : deduplicatedData;
    const duplicateCount = duplicates?.length;
    const uniqueCount = unique?.length;

    return (
      <div>
        <div className="w-max overflow-x-hidden">
          <div className="flex items-center justify-between mb-4 gap-4">
            <h1 className="text-xl font-semibold">{title}</h1>

            {/* Duplicate Controls */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="text-green-600 font-semibold">
                  {uniqueCount} Unique
                </span>
                {duplicateCount > 0 && (
                  <span className="ml-2 text-red-600 font-semibold">
                    {duplicateCount} Duplicates
                  </span>
                )}
              </div>

              {duplicateCount > 0 && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Show duplicates:
                    </label>
                    <input
                      type="checkbox"
                      checked={showDuplicates}
                      onChange={(e) => setShowDuplicates(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-sm text-gray-600 dark:text-gray-400">
                      Manage groups:
                    </label>
                    <input
                      type="checkbox"
                      checked={showDuplicateGroups}
                      onChange={(e) => setShowDuplicateGroups(e.target.checked)}
                      className="rounded border-gray-300"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {showDuplicateGroups && renderDuplicateGroups(duplicateMap)}
          {renderTable(displayData, title)}
        </div>
      </div>
    );
  }

  // Split view (for /api/program-attendance) using canonical buckets
  const {
    unique: allUnique,
    duplicates: allDuplicates,
    duplicateMap: allDuplicateMap,
  } = deduplicateData(data);
  const displayData = showDuplicates ? data : allUnique;

  const praiseRows = displayData?.filter(
    (r) => canonicalizeProgram(r?.program) === "PRAISE"
  );
  const awakeningRows = displayData?.filter(
    (r) => canonicalizeProgram(r?.program) === "AWAKENING"
  );
  const unknownRows = displayData?.filter(
    (r) => canonicalizeProgram(r?.program) === "UNKNOWN"
  );

  const counts = {
    PRAISE: praiseRows?.length,
    AWAKENING: awakeningRows?.length,
    UNKNOWN: unknownRows?.length,
    ALL: displayData?.length,
  };

  const duplicateCount = allDuplicates?.length;
  const uniqueCount = allUnique?.length;

  const showPraise = programFilter === "ALL" || programFilter === "PRAISE";
  const showAwakening =
    programFilter === "ALL" || programFilter === "AWAKENING";
  const showUnknown = programFilter === "ALL" || programFilter === "UNKNOWN";

  return (
    <div>
      <div className="flex items-center justify-between mb-4 gap-4">
        <h1 className="text-xl font-semibold">{title}</h1>

        <div className="flex items-center gap-4">
          {/* Duplicate Controls */}
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <span className="text-green-600 font-semibold">
                {uniqueCount} Unique
              </span>
              {duplicateCount > 0 && (
                <span className="ml-2 text-red-600 font-semibold">
                  {duplicateCount} Duplicates
                </span>
              )}
            </div>

            {duplicateCount > 0 && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Show duplicates:
                  </label>
                  <input
                    type="checkbox"
                    checked={showDuplicates}
                    onChange={(e) => setShowDuplicates(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600 dark:text-gray-400">
                    Manage groups:
                  </label>
                  <input
                    type="checkbox"
                    checked={showDuplicateGroups}
                    onChange={(e) => setShowDuplicateGroups(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Program Filter (with live counts) */}
          <div className="flex items-center gap-2">
            <label htmlFor="programFilter" className="text-sm text-gray-400">
              Filter:
            </label>
            <select
              id="programFilter"
              value={programFilter}
              onChange={(e) => setProgramFilter(e.target.value)}
              className="px-3 py-2 rounded-md border border-gray-300 text-black"
            >
              <option value="ALL">All Programs ({counts.ALL})</option>
              <option value="PRAISE">
                {PRAISE_LABEL} ({counts.PRAISE})
              </option>
              <option value="AWAKENING">
                {AWAKENING_LABEL} ({counts.AWAKENING})
              </option>
              <option value="UNKNOWN">
                Other / Unknown ({counts.UNKNOWN})
              </option>
            </select>
          </div>
        </div>
      </div>

      {showDuplicateGroups && renderDuplicateGroups(allDuplicateMap)}

      <div className={` ${programFilter === "ALL" ? "xl:grid-cols-2" : ""}`}>
        {showPraise && renderTable(praiseRows, PRAISE_LABEL)}
      </div>
      {showAwakening && renderTable(awakeningRows, AWAKENING_LABEL)}

      {showUnknown && renderTable(unknownRows, "Other / Unknown Program")}
    </div>
  );
};
