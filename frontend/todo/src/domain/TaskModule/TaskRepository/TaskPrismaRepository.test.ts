
import { taskPrismaRepository } from './index'
import { TaskFactory } from '../Task/TaskFactory/TaskFactory'


const taskRepository = taskPrismaRepository;

let describeIf = process.env.DATABASE_URL ? describe : describe.skip
const factory = new TaskFactory();


describeIf("Testing Function countTasks: database", () => {


    test("valid class: return a number", async () => {

        const testFunction = async () => {
            const tasks = await taskRepository.countTasks();
            return tasks;
        }

        expect(typeof await testFunction()).toBe("number");
    })

})

describeIf("Testing Function readOneTaskById: database", () => {


    test("valid class: find", async () => {


        const testFunction = async () => {

            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/2023",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDING",
                title: crypto.randomUUID()
            });
            await taskRepository.createTask({
                task: task
            });
            const taskFind = await taskRepository.readOneTaskById({ id: task.getId() });

            return taskFind;

        }

        expect(await testFunction()).not.toBe(undefined);

    })

    test("invalid class: throw any error", async () => {

        const testFunction = async () => {

            const taskFind = await taskRepository.readOneTaskById({ id: crypto.randomUUID() });
            return taskFind;

        }
        expect(await testFunction()).toBe(undefined)

    });

})

describeIf("Testing Function readOneTaskByTitle: database", () => {


    test("valid class: find", async () => {


        const testFunction = async () => {

            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/2023",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDING",
                title: crypto.randomUUID()
            });
            await taskRepository.createTask({
                task: task
            });
            const taskFind = await taskRepository.readOneTaskByTitle({ title: task.getTitle() });

            return taskFind;

        }

        expect(await testFunction()).not.toBe(undefined);

    })

    test("invalid class: throw any error", async () => {

        const testFunction = async () => {

            const taskFind = await taskRepository.readOneTaskByTitle({ title: crypto.randomUUID() });
            return taskFind;

        }
        expect(await testFunction()).toBe(undefined)

    });

})

describeIf("Testing Function createTask: database", () => {


    test("valid class: not throw", async () => {


        expect(() => {
            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/2023",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDING",
                title: crypto.randomUUID()
            });
            taskRepository.createTask({ task });
        }).not.toThrow();


    })

    test("invalid class: throw any error", async () => {


        expect(() => {
            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/20",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDIN",
                title: crypto.randomUUID()
            });
            taskRepository.createTask({ task });
        }).toThrow();


    });

})

describeIf("Testing Function updateTask: database", () => {


    test("valid class: not throw", async () => {


        expect(() => {
            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/2023",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDING",
                title: crypto.randomUUID()
            });
            taskRepository.createTask({ task });
            task.setDescription("nova");
            taskRepository.updateTask({ task: task });
        }).not.toThrow();


    })

    test("invalid class: throw any error", async () => {


        expect(() => {
            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/2023",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDING",
                title: crypto.randomUUID()
            });
            taskRepository.createTask({ task });
            task.setStatus("NOVA")
            taskRepository.updateTask({ task: task });
        }).toThrow();


    });

})

describeIf("Testing Function deleteTaskById: database", () => {


    test("valid class: delete", async () => {



        expect(() => {

            const task = factory.create({
                updatedAt: undefined,
                createdAt: "11/11/2023",
                deadLine: "11/12/2023",
                description: "teste",
                id: crypto.randomUUID(),
                status: "PENDING",
                title: crypto.randomUUID()
            });
            taskRepository.createTask({
                task: task
            });
            taskRepository.deleteTask({ id: task.getId() });

        }).not.toThrow()

    })

})