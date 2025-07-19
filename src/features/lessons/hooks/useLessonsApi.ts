import { useState, useEffect, useCallback } from "react";
import { lessonService } from "../api/LessonService";
import type { Lesson } from "../models/Lesson";
import type { ApiOptions } from "../../../core/models/ApiOptions";
import type { ApiResponse } from "../../../core/models/ApiResponse";

// Helper to serialize apiOptions for effect/deps (safe for most filter/sort objects)
function serialize(obj: unknown) {
  return JSON.stringify(obj ?? {});
}

export function useLessonsApi(apiOptions?: ApiOptions) {
  const [data, setData] = useState<Lesson[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  // fetchAll does NOT need useCallback unless you want to pass it as a prop.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    lessonService
      .findAll(apiOptions ?? {})
      .then((res: ApiResponse<Lesson[]>) => {
        if (!cancelled) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [serialize(apiOptions)]);

  const reload = useCallback(() => {
    setLoading(true);
    setError(null);
    lessonService
      .findAll(apiOptions ?? {})
      .then((res: ApiResponse<Lesson[]>) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [serialize(apiOptions)]);

  const addLesson = useCallback(
    async (lesson: Partial<Lesson>) => {
      const newItem = await lessonService.add(lesson);
      reload();
      return newItem;
    },
    [reload]
  );

  const updateLesson = useCallback(
    async (id: string, lesson: Partial<Lesson>) => {
      const updated = await lessonService.update(id, lesson);
      reload();
      return updated;
    },
    [reload]
  );

  const deleteLesson = useCallback(
    async (id: string) => {
      await lessonService.delete(id);
      reload();
    },
    [reload]
  );

  return {
    data,
    loading,
    error,
    reload,
    addLesson,
    updateLesson,
    deleteLesson,
  };
}
