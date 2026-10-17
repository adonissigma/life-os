// THÊM MODULE MỚI: tạo thư mục trong js/modules/, rồi thêm 2 dòng ở đây (import + vào danh sách).
import dashboard from './modules/dashboard/index.js';
import tasks from './modules/tasks/index.js';
import habits from './modules/habits/index.js';
import journal from './modules/journal/index.js';
import settings from './modules/settings/index.js';
export const modules=[dashboard,tasks,habits,journal,settings];
