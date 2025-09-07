import { Router } from "express";
import { TaskController } from "../../controllers/task/TaskController";
import { proxy } from "../../../domain/Core/Proxy";
import { taskService } from "../../../application/TaskService";
import { taskControllerStrategy } from "../../controllers/task/TaskControllerStrategy";



const taskRouter = Router();

const hateoas = {

    docs: {
        method: "GET",
        url: "docs"
    },

    countAllTasks: {
        method: "GET",
        url: "tasks?quantity"
    },

    readAllTasks: {
        method: "GET",
        query: {
            limit: "int",
            offset: "int"
        },
        url: "tasks?limit=1,offset=10"
    },

    readTaskById: {
        method: "GET",
        params: {
            id: "string uuid"
        },
        url: "task/:id"
    },

    readTaskByTitle: {
        method: "GET",
        query: {
            title: "string"
        },
        url: "task?title=text"
    },

    createTask: {
        method: "POST",
        body: {
            title: "string",
            description: "optional string",
            deadLine: "optional string date"
        },
        url: "task"
    },

    updateTask: {
        method: "PUT",
        body: {
            title: "string",
            description: "optional string",
            deadLine: "optional string date",
            status: "string PENDING or COMPLETED"
        },
        params: {
            id: "int"
        },
        url: "task/:id"
    },

    deleteTask: {
        method: "DELETE",
        params: {
            id: "int"
        },
        url: "task/:id"
    },

}


const taskControler = new TaskController(taskService, proxy, hateoas, taskControllerStrategy);


/**
 * @swagger
 * components:
 *   schemas:
 * 
 *     HateoasDocs:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [GET]
 *         url:
 *           type: string
 *           example: "docs"
 * 
 *     HateoasCountAllTasks:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [GET]
 *         url:
 *           type: string
 *           example: "tasks?quantity"
 *
 *     HateoasReadAllTasks:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [GET]
 *         query:
 *           type: object
 *           properties:
 *             limit:
 *               type: integer
 *             offset:
 *               type: integer
 *         url:
 *           type: string
 *           example: "tasks?limit=1,offset=10"
 *
 *     HateoasReadTaskById:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [GET]
 *         params:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               format: uuid
 *         url:
 *           type: string
 *           example: "task/:id"
 *
 *     HateoasReadTaskByTitle:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [GET]
 *         query:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *         url:
 *           type: string
 *           example: "task?title=text"
 *
 *     HateoasCreateTask:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [POST]
 *         body:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             deadLine:
 *               type: string
 *               format: date-time
 *           required: [title]
 *         url:
 *           type: string
 *           example: "task"
 *
 *     HateoasUpdateTask:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [PUT]
 *         body:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             deadLine:
 *               type: string
 *               format: date-time
 *             status:
 *               type: string
 *               enum: [PENDING, COMPLETED]
 *           required: [title, status]
 *         params:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *         url:
 *           type: string
 *           example: "task/:id"
 *
 *     HateoasDeleteTask:
 *       type: object
 *       properties:
 *         method:
 *           type: string
 *           enum: [DELETE]
 *         params:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *         url:
 *           type: string
 *           example: "task/:id"
 *
 *     Hateoas:
 *       type: object
 *       properties:
 *         docs:
 *           $ref: '#/components/schemas/HateoasDocs'
 *         countAllTasks:
 *           $ref: '#/components/schemas/HateoasCountAllTasks'
 *         readAllTasks:
 *           $ref: '#/components/schemas/HateoasReadAllTasks'
 *         readTaskById:
 *           $ref: '#/components/schemas/HateoasReadTaskById'
 *         readTaskByTitle:
 *           $ref: '#/components/schemas/HateoasReadTaskByTitle'
 *         createTask:
 *           $ref: '#/components/schemas/HateoasCreateTask'
 *         updateTask:
 *           $ref: '#/components/schemas/HateoasUpdateTask'
 *         deleteTask:
 *           $ref: '#/components/schemas/HateoasDeleteTask'
 * 
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         status:
 *           type: string
 *           enum: [PENDING, COMPLETED]
 *           example: "PENDING"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         deadLine:
 *           type: string
 *           format: date-time
 *
 *     ResponseGetAllTasks:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *
 * 
 *     ResponseGetTaskById:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: object
 *           $ref: '#/components/schemas/Task'
 * 
 *     ResponseGetTaskByTitle:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: object
 *           $ref: '#/components/schemas/Task'
 * 
 *     ResponseCreateTask:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: string
 * 
 *     ResponseUpdateTask:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: string
 * 
 *     ResponseDeleteTask:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: string
 * 
 *     ResponseCountTask:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: number
 * 
 *     Error:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *         hateoas:
 *           type: object
 *           $ref: '#/components/schemas/Hateoas'
 *         name: 
 *           type: string
 *         data: 
 *           type: object
 */

/**
 * @swagger
 * /tasks/quantity:
 *   get:
 *     summary: Count tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ResponseCountTask'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.get("/tasks/quantity", taskControler.countAllTasks);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: List all tasks
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: salt by task number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Tasks per page
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ResponseGetAllTasks'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.get("/tasks", taskControler.readAllTasks);

/**
 * @swagger
 * /task/{id}:
 *   get:
 *     summary: Get task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ResponseGetTaskById'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.get("/task/:id", taskControler.readTaskById);

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Get task by title
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *         description: Task title
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ResponseGetTaskByTitle'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.get("/task", taskControler.readTaskByTitle);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Create task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 required: true
 *               description:
 *                 type: string
 *                 require: false
 *               deadLine:
 *                 type: string
 *                 require: false
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ResponseCreateTask'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.post("/task", taskControler.createTask);


/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Update task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 required: true
 *               description:
 *                 type: string
 *                 require: false
 *               deadLine:
 *                 type: string
 *                 require: false
 *               status:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ResponseUpdateTask'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.put("/task/:id", taskControler.updateTask);


/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Delete task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/ResponseDeleteTask'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 *       500:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Error'
 */
taskRouter.delete("/task/:id", taskControler.deleteTask);


export { taskRouter };