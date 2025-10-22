import React, { useState } from "react";

// Test component to demonstrate deduplication functionality
const DeduplicationTest = () => {
  const [testData, setTestData] = useState([
    // Baby Naming duplicates
    {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      babyName: "Baby John",
      _id: "1",
    },
    {
      fullName: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      babyName: "Baby John",
      _id: "2",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "0987654321",
      babyName: "Baby Jane",
      _id: "3",
    },

    // Couple duplicates
    {
      partner1Name: "Alice",
      partner2Name: "Bob",
      email: "alice@example.com",
      phone: "1111111111",
      _id: "4",
    },
    {
      partner1Name: "Alice",
      partner2Name: "Bob",
      email: "alice@example.com",
      phone: "1111111111",
      _id: "5",
    },

    // Testimonies duplicates
    { fullName: "Test User", message: "Great experience", _id: "6" },
    { fullName: "Test User", message: "Great experience", _id: "7" },

    // Unique entries
    {
      fullName: "Unique User",
      email: "unique@example.com",
      phone: "9999999999",
      _id: "8",
    },
  ]);

  // Deduplication logic (same as in Dashboard)
  const deduplicateData = (rawData) => {
    if (!rawData || rawData.length === 0)
      return { unique: [], duplicates: [], duplicateMap: new Map() };

    const duplicateMap = new Map();
    const duplicates = [];
    const unique = [];

    rawData.forEach((item, index) => {
      const email = (item.email || "").toLowerCase().trim();
      const phone = (item.phone || "").replace(/\D/g, "");
      const name = (item.fullName || item.partner1Name || "")
        .toLowerCase()
        .trim();
      const partner2Name = (item.partner2Name || "").toLowerCase().trim();

      let key = `${email}-${phone}-${name}`;
      if (partner2Name) {
        key += `-${partner2Name}`;
      }

      if (key === "--" || key === "---") {
        unique.push({ ...item, _isDuplicate: false, _duplicateGroup: null });
        return;
      }

      if (duplicateMap.has(key)) {
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

  const { unique, duplicates, duplicateMap } = deduplicateData(testData);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Deduplication Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Total Records</h3>
          <p className="text-2xl font-bold text-blue-600">{testData.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Unique Records</h3>
          <p className="text-2xl font-bold text-green-600">{unique.length}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Duplicates Found</h3>
          <p className="text-2xl font-bold text-red-600">{duplicates.length}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Duplicate Groups</h2>
        {duplicateMap.size > 0 ? (
          <div className="space-y-4">
            {Array.from(duplicateMap.entries()).map(([key, group]) => (
              <div key={key} className="border border-gray-300 rounded-lg p-4">
                <h4 className="font-semibold mb-2">
                  Group: {key.substring(0, 30)}...
                </h4>
                <div className="space-y-2">
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded ${
                        item._isDuplicate ? "bg-red-100" : "bg-green-100"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          item._isDuplicate ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {item._isDuplicate ? "DUPLICATE" : "ORIGINAL"}
                      </span>
                      <div className="text-sm">
                        {item.fullName || item.partner1Name}
                        {item.partner2Name && ` & ${item.partner2Name}`}
                        {item.email && ` (${item.email})`}
                        {item.babyName && ` - Baby: ${item.babyName}`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No duplicates found!</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">All Records</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-center">Status</th>
                <th className="border px-4 py-2 text-center">Name</th>
                <th className="border px-4 py-2 text-center">Email</th>
                <th className="border px-4 py-2 text-center">Phone</th>
                <th className="border px-4 py-2 text-center">
                  Additional Info
                </th>
              </tr>
            </thead>
            <tbody>
              {testData.map((item, idx) => {
                const isDuplicate = duplicates.some((d) => d._id === item._id);
                return (
                  <tr key={idx} className={isDuplicate ? "bg-red-50" : ""}>
                    <td className="border px-4 py-2 text-center">
                      <span
                        className={`font-semibold text-xs ${
                          isDuplicate ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {isDuplicate ? "DUPLICATE" : "UNIQUE"}
                      </span>
                    </td>
                    <td className="border px-4 py-2">
                      {item.fullName || item.partner1Name}
                    </td>
                    <td className="border px-4 py-2">{item.email || "N/A"}</td>
                    <td className="border px-4 py-2">{item.phone || "N/A"}</td>
                    <td className="border px-4 py-2">
                      {item.babyName && `Baby: ${item.babyName}`}
                      {item.partner2Name && `Partner: ${item.partner2Name}`}
                      {item.message &&
                        `Message: ${item.message.substring(0, 20)}...`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeduplicationTest;
