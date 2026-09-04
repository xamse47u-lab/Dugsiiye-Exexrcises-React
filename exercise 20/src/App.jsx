import Announcements from "./components/Announcements";
import CourseSection from "./components/CourseSection";
import Header from "./components/Header";
import StatsGrid from "./components/StatsGrid";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Header />
        <StatsGrid />

        <CourseSection />
      </div>
    </div>
  );
}

export default App;