import { useEffect } from "react";
import { useLessonsApi } from "../hooks/useLessonsApi";
import type { Lesson } from "../models/Lesson";

const LessonsList = () => {
  const { data, loading, error } = useLessonsApi();

  useEffect(() => {
    if (data) {
      console.log("Lessons:", data);
    }
  }, []);

  if (loading) return <div>Loading lessons...</div>;
  if (error) return <div>Error: {typeof error === "object" && error !== null && "message" in error ? (error as { message: string }).message : String(error)}</div>;

  // TODO: Finish up this component
  return (
    <ul>
      {data?.map((lesson: Lesson) => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
};

export default LessonsList;
