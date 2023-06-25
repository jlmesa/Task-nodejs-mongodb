import { Router } from 'express';
import {renderTasks, createTask, renderTaskEdit, editTask, deleteTask, toggleDoneTask} from '../controllers/tasks.controller';

const router = Router();

router.get('/', renderTasks);

router.post('/tasks/add', createTask);

router.get('/tasks/edit/:id', renderTaskEdit);

router.post('/tasks/edit/:id', editTask);

router.get('/tasks/delete/:id', deleteTask);

router.get('/tasks/toggleDone/:id', toggleDoneTask);

export default router;