import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../context/api";

// Utility function to clean profile data
const cleanProfileData = (data) => {
  const { __v, updatedAt,password, createdAt, _id, isAdmin, ...cleaned } = data;
  return cleaned;
};

const Profile = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get(`/api/profiles/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const cleaned = cleanProfileData(res.data);
        setProfile(cleaned);
        setFormData(cleaned);
      } catch (err) {
        console.error(err);
        setMessage("Failed to fetch profile.");
      }
    };

    fetchProfile();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put(`/api/profiles/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const cleaned = cleanProfileData(res.data);
      setProfile(cleaned);
      setEdit(false);
      setMessage("Profile updated successfully.");
    } catch (err) {
      console.error(err);
      setMessage("Update failed.");
    }
  };

  if (!profile) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] pt-24 px-4">
      <div className="max-w-2xl mx-auto bg-[#FFF5E1]/10 p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>

        {message && <p className="text-green-300 mb-4">{message}</p>}

        {edit ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            {[
              "fullName",
              "email",
              "phone",
              "address",
              "country",
              "memberType",
              "referral",
              "localPastor",
            ].map((field) => (
              <div key={field}>
                <label className="block capitalize mb-1">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field] || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                />
              </div>
            ))}

            <button
              type="submit"
              className="bg-[#B0A8B9] text-[#800020] px-4 py-2 rounded-md font-semibold"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEdit(false)}
              className="ml-4 text-sm underline"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div className="space-y-3">
            {Object.entries(profile).map(([key, val]) =>
              key === "image" ? null : (
                <p key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
                  {val}
                </p>
              )
            )}
            <button
              onClick={() => setEdit(true)}
              className="mt-4 bg-[#B0A8B9] text-[#800020] px-4 py-2 rounded-md font-semibold"
            >
              Edit Profile
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("userProfile");
                localStorage.removeItem("token");
                navigate("/join-us/login");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
