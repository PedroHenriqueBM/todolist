import { TaskStrategy } from "./TaskStrategy";
import { randomUUID } from 'node:crypto';

const taskStrategy = new TaskStrategy();

describe("Testing Function checkId", () => {

    test("valid class: string whit format UUID", () => {
        expect(() => { taskStrategy.checkId(randomUUID()) }).not.toThrow()
    });

    test("invalid class: anything other than string with format UUID ", () => {

        expect(() => { taskStrategy.checkId("oi") }).toThrow("The field must be an UUID");

    });


})

describe("Testing Function checkTitle", () => {

    test("valid class: 1<=length<=100, length=[1,50,100]", () => {
        expect(() => { taskStrategy.checkTitle("1") }).not.toThrow();
        expect(() => { taskStrategy.checkTitle("12345678911234567891123456789112345678911234567891") }).not.toThrow();
        expect(() => { taskStrategy.checkTitle("1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891") }).not.toThrow();
    });

    test("invalid class: length<1 or length>100, length=[0,101]", () => {
        let messageError = "The field length is wrong";
        expect(() => { taskStrategy.checkTitle("") }).toThrow(messageError);
        expect(() => { taskStrategy.checkTitle("12345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911") }).toThrow(messageError);
    });


})

describe("Testing Function checkOptionalTitle", () => {

    test("valid class: 1<=length<=100, length=[1,50,100]", () => {
        expect(() => { taskStrategy.checkOptionalTitle(undefined) }).not.toThrow();
        expect(() => { taskStrategy.checkOptionalTitle("1") }).not.toThrow();
        expect(() => { taskStrategy.checkOptionalTitle("12345678911234567891123456789112345678911234567891") }).not.toThrow();
        expect(() => { taskStrategy.checkOptionalTitle("1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891") }).not.toThrow();
    });

    test("invalid class: length<1 or length>100, length=[0,101]", () => {
        let messageError = "The field length is wrong";
        expect(() => { taskStrategy.checkOptionalTitle("") }).toThrow(messageError);
        expect(() => { taskStrategy.checkOptionalTitle("12345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911") }).toThrow(messageError);
    });


})

describe("Testing Function checkDescription", () => {

    test("valid class: 1<=length<=200 or value=[undefined,null], length=[1,100,200], value=[undefined,null]", () => {
        expect(() => { taskStrategy.checkDescription("1") }).not.toThrow();
        expect(() => { taskStrategy.checkDescription("1234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891") }).not.toThrow();
        expect(() => { taskStrategy.checkDescription("12345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891") }).not.toThrow();
        expect(() => { taskStrategy.checkDescription(undefined) }).not.toThrow();
        expect(() => { taskStrategy.checkDescription(null) }).not.toThrow();
    });

    test("invalid class: length<1 or length>200, length=[0,201]", () => {
        let messageError = "The field length is wrong";
        expect(() => { taskStrategy.checkDescription("") }).toThrow(messageError);
        expect(() => { taskStrategy.checkDescription("123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911234567891123456789112345678911") }).toThrow(messageError);
    });


})

describe("Testing Function checkDeadLine", () => {

    test("valid class: string whit format dd/mm/yyyy", () => {
        expect(() => { taskStrategy.checkDeadLine("11/12/2005") }).not.toThrow()
    });

    test("invalid class: anything other than string with format dd/mm/yyyy ", () => {

        expect(() => { taskStrategy.checkDeadLine(true as any) }).toThrow("The field type cannot be defined");
        expect(() => { taskStrategy.checkDeadLine("1/1/2025") }).toThrow("The date is in wrong format");
    });


})

describe("Testing Function checkStatus", () => {

    test("valid class: PENDING or COMPLETED", () => {
        expect(() => { taskStrategy.checkStatus("PENDING") }).not.toThrow()
        expect(() => { taskStrategy.checkStatus("COMPLETED") }).not.toThrow()
    });

    test("invalid class: anything other than PENDING or COMPLETED ", () => {

        expect(() => { taskStrategy.checkStatus("oi") }).toThrow("The field type cannot be defined");

    });


})

describe("Testing Function checkOptionalStatus", () => {

    test("valid class: PENDING or COMPLETED", () => {
        expect(() => { taskStrategy.checkOptionalStatus("PENDING") }).not.toThrow()
        expect(() => { taskStrategy.checkOptionalStatus("COMPLETED") }).not.toThrow()
        expect(() => { taskStrategy.checkOptionalStatus(undefined) }).not.toThrow()
        expect(() => { taskStrategy.checkOptionalStatus(null) }).not.toThrow()
    });

    test("invalid class: anything other than PENDING or COMPLETED ", () => {

        expect(() => { taskStrategy.checkOptionalStatus("oi") }).toThrow("The field type cannot be defined");

    });


})

describe("Testing Function checkCreatedAt", () => {

    test("valid class: string whit format dd/mm/yyyy", () => {
        expect(() => { taskStrategy.checkCreatedAt("11/12/2005") }).not.toThrow()
    });

    test("invalid class: anything other than string with format dd/mm/yyyy ", () => {

        expect(() => { taskStrategy.checkCreatedAt(true as any) }).toThrow("The field type cannot be defined ");
        expect(() => { taskStrategy.checkCreatedAt("1/1/2025") }).toThrow("The date is in wrong format");
    });


})

describe("Testing Function checkUpdatedAt", () => {

    test("valid class: string whit format dd/mm/yyyy", () => {
        expect(() => { taskStrategy.checkUpdatedAt("11/12/2005") }).not.toThrow()
    });

    test("invalid class: anything other than string with format dd/mm/yyyy ", () => {

        expect(() => { taskStrategy.checkUpdatedAt(true as any) }).toThrow("The field type cannot be defined ");
        expect(() => { taskStrategy.checkUpdatedAt("1/1/2025") }).toThrow("The date is in wrong format");
    });


})