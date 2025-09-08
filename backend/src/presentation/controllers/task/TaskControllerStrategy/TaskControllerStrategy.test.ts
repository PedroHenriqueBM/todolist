
import { TaskControllerStrategy } from './TaskControllerStrategy';
import { randomUUID } from 'node:crypto';

const taskControllerStrategy = new TaskControllerStrategy()

describe("Testing Function CheckLimit", () => {


    test("valid class: int with 1<=length<=100", () => {


        expect(() => { taskControllerStrategy.checkLimit(1) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkLimit(2) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkLimit(50) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkLimit(99) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkLimit(100) }).not.toThrow();

    })

    test("invalid class: anything other than int with 1<=length<=100", () => {


        expect(() => { taskControllerStrategy.checkLimit("oii") }).toThrow();
        expect(() => { taskControllerStrategy.checkLimit(true) }).toThrow();
        expect(() => { taskControllerStrategy.checkLimit(undefined) }).toThrow();
        expect(() => { taskControllerStrategy.checkLimit(0) }).toThrow();
        expect(() => { taskControllerStrategy.checkLimit(101) }).toThrow();

    })


})

describe("Testing Function CheckOffset", () => {


    test("valid class: int with 0<=length", () => {

        expect(() => { taskControllerStrategy.checkOffset(0) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkOffset(1) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkOffset(50) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkOffset(99) }).not.toThrow();
        expect(() => { taskControllerStrategy.checkOffset(100) }).not.toThrow();

    })

    test("invalid class: anything other than int with 0<=length", () => {


        expect(() => { taskControllerStrategy.checkOffset("oii") }).toThrow();
        expect(() => { taskControllerStrategy.checkOffset(true) }).toThrow();
        expect(() => { taskControllerStrategy.checkOffset(undefined) }).toThrow();
        expect(() => { taskControllerStrategy.checkOffset(-1) }).toThrow();



    })


})

