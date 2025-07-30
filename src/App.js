import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute, Navbar, Footer, ForgotPassword, ResetPassword,PrivateAdminRoute } from "./components";
import {
  Home,
  Partnership,
  GiveNow,
  FirstTimer,
  SecondTimer,
  NewBeliever,
  ChurchMember,
  AdminLogin,
  CreateProfile,
  IntendingCouples,
  ChildDedication,
  BabyNaming,
  Testimonies,
  Request,
  Enquiries,
  Contact,
  Welfare,
  Gallery,
  MP3,
  Blog,
  Departments,
  Pledge,
  Login,
  AdminDashboard,
  Profile,
  ProgramAttendance,
  Awakening,
  Praise,
  NotFound
} from "./pages";

// const App = () => {
function App() {
  return (
    <div className="App">
      <Router>
        <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
          <Navbar />
          <main className="flex-grow bg-[#800020] text-[#FFF5E1 ]">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Giving Routes */}
              <Route path="/giving/pledge" element={<Pledge />} />
              <Route path="/giving/partnership" element={<Partnership />} />
              <Route path="/giving/payment" element={<GiveNow />} />

              {/* Join Us Routes */}
              <Route
                path="/join-us/register/first-timer"
                element={<FirstTimer />}
              />
              <Route
                path="/join-us/register/second-timer"
                element={<SecondTimer />}
              />
              <Route
                path="/join-us/register/new-believer"
                element={<NewBeliever />}
              />
              <Route
                path="/join-us/register/member"
                element={<ChurchMember />}
              />
              <Route path="/join-us/login" element={<PrivateRoute><Login /></PrivateRoute>} />
              <Route path="/join-us/admin-login" element={<AdminLogin />} />
              <Route
                path="/join-us/create-profile"
                element={<CreateProfile />}
              />
              <Route
                path="/join-us/register/program-attendance"
                element={<ProgramAttendance />}
              />

              {/* Forms Routes */}
              <Route
                path="/forms/child-dedication"
                element={<ChildDedication />}
              />
              <Route path="/forms/baby-naming" element={<BabyNaming />} />
              <Route path="/forms/couples" element={<IntendingCouples />} />
              <Route path="/forms/testimonies" element={<Testimonies />} />

              {/* Help Routes */}
              <Route path="/help/request" element={<Request />} />
              <Route path="/help/enquiries" element={<Enquiries />} />
              <Route path="/help/contact" element={<Contact />} />
              <Route path="/help/welfare" element={<Welfare />} />

              {/* Downloads Routes */}
              <Route path="/downloads/gallery" element={<Gallery />} />
              <Route path="/downloads/mp3" element={<MP3 />} />

              {/* More Info Routes */}
              <Route path="/more/blog" element={<Blog />} />
              <Route path="/more/departments" element={<Departments />} />
              <Route path="/more/awakening" element={<Awakening />} />
              <Route path="/more/praise" element={<Praise />} />

              {/* Admin */}
              <Route path="/admin/dashboard" element={<PrivateAdminRoute />}>
  <Route index element={<AdminDashboard />} />
</Route>{/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
              {/* Special Routes */}
              {/* <Route path="/life-class" element={<LifeClass />} /> */}
              {/* <Route path="/live" element={<LiveStream />} /> */}

            
               <Route path="/profile/:id" element={<Profile />} />

               <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
               

              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
          <Footer />
        </div>
       

      </Router>
    </div>
  );
}

export default App;
