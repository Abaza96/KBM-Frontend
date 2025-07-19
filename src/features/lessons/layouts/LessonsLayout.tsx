import { Outlet } from "react-router-dom";

const LessonLayout = () => {
  return (
    <div>
      <h2>Lessons</h2>
      <Outlet />
    </div>
  );
};

export default LessonLayout;
