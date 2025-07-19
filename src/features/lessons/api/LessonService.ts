import { CrudService } from "../../../core/services/CrudService";
import type { Lesson } from "../models/Lesson";

export class LessonService extends CrudService<Lesson, string> {
  constructor() {
    super('lessons');
  }
}

export const lessonService = new LessonService();