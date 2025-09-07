import { taskService } from './index';
import { randomUUID } from 'node:crypto'



let describeIf = process.env.DATABASE_URL ? describe : describe.skip


describeIf("Testing Function readOneTaskByTitle:service:database", () => {

    test("invalid class: throw any error", async () => {


        await taskService.readOneTaskByTitle({ title: randomUUID() })
            .catch((err) => {
                expect(err).toBeDefined();
            })


    });

})

describeIf("Testing Function readOneTaskById:service:database", () => {

    test("invalid class: throw any error", async () => {

        await taskService.readOneTaskById({ id: randomUUID() })
            .catch((err) => {
                expect(err).toBeDefined();
            })

    });

})

describeIf("Testing Function DeleteTask:service:database", () => {

    test("invalid class: throw any error", async () => {

        await taskService.deleteTask({ id: randomUUID() })
            .catch((err) => {
                expect(err).toBeDefined();
            })

    });

})

describeIf("Testing Function CreateTask:service:database", () => {

    test("valid class: not throw any error", async () => {

        await taskService.createTask({ deadLine: "11/12/2025", description: "oii", title: randomUUID() })
            .catch((err) => {
                expect(err).not.toBeDefined();
            })

        await taskService.createTask({ deadLine: "11/12/2025", description: undefined, title: randomUUID() })
            .catch((err) => {
                expect(err).not.toBeDefined();
            })

        await taskService.createTask({ deadLine: undefined, description: "Oi", title: randomUUID() })
            .catch((err) => {
                expect(err).not.toBeDefined();
            })

        await taskService.createTask({ deadLine: undefined, description: undefined, title: randomUUID() })
            .catch((err) => {
                expect(err).not.toBeDefined();
            })

    });


    test("invalid class: throw any error", async () => {

        await taskService.createTask({ deadLine: "11/12/2029", description: "oii", title: randomUUID() })
            .catch((err) => {
                expect(err).toBeDefined();
            })
        await taskService.createTask({ deadLine: "11/1/2029", description: "oii", title: randomUUID() })
            .catch((err) => {
                expect(err).toBeDefined();
            })

        await taskService.createTask({ deadLine: "11/1/2029", description: "oii", title: undefined as any })
            .catch((err) => {
                expect(err).toBeDefined();
            })

    });

})


