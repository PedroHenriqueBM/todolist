import { Strategy } from "./Strategy"
import { randomUUID } from 'node:crypto'

const strategy = new Strategy();

describe("Module: Strategy", () => {

    describe("Testing Function IsNull", () => {


        test("valid class: null", () => {

            expect(strategy.isNull(null).build()).toBe(true)

        })

        test("invalid class: string", () => {

            expect(strategy.isNull("Oi").build()).toBe(false)

        })

    })

    describe("Testing Function IsUndefined", () => {


        test("valid class: undefined", () => {

            expect(strategy.isUndefined(undefined).build()).toBe(true)

        })

        test("invalid class: string", () => {

            expect(strategy.isUndefined("Oi").build()).toBe(false)

        })



    })

    describe("Testing Function IsString", () => {


        test("valid class: String", () => {

            expect(strategy.isString("Oi").build()).toBe(true)

        })

        test("invalid class: number", () => {

            expect(strategy.isString(2).build()).toBe(false)

        })



    })

    describe("Testing Function IsDate", () => {


        test("valid class: Date", () => {

            expect(strategy.isDate("02/02/2025", "ptBr").build()).toBe(true)

        })

        test("invalid class: number", () => {

            expect(strategy.isDate(2, "ptBr").build()).toBe(false)

        })



    })

    describe("Testing Function IcheckMaxLengthString", () => {


        test("valid class: String <= max", () => {

            expect(strategy.checkMaxLengthString(5, "1").build()).toBe(true)
            expect(strategy.checkMaxLengthString(5, "12345").build()).toBe(true)
        })

        test("invalid class: String > max", () => {

            expect(strategy.checkMaxLengthString(5, "123456").build()).toBe(false)
            expect(strategy.checkMaxLengthString(5, "123457").build()).toBe(false)
        })

    })

    describe("Testing Function IcheckMinLengthString", () => {

        test("valid class: String >= min", () => {

            expect(strategy.checkMinLengthString(5, "12345").build()).toBe(true)
            expect(strategy.checkMinLengthString(5, "123456").build()).toBe(true)
        })

        test("invalid class: String < min", () => {

            expect(strategy.checkMinLengthString(5, "1234").build()).toBe(false)
            expect(strategy.checkMinLengthString(5, "123").build()).toBe(false)
        })

    })

    describe("Testing Function IcheckMaxLengthNumber", () => {


        test("valid class: Number <= max", () => {

            expect(strategy.checkMaxLengthNumber(5, 5).build()).toBe(true)
            expect(strategy.checkMaxLengthNumber(5, 4).build()).toBe(true)
        })

        test("invalid class: Number > max", () => {

            expect(strategy.checkMaxLengthNumber(5, 6).build()).toBe(false)
            expect(strategy.checkMaxLengthNumber(5, 7).build()).toBe(false)
        })

    })

    describe("Testing Function IcheckMinLengthNumber", () => {

        test("valid class: Number >= min", () => {

            expect(strategy.checkMinLengthNumber(5, 5).build()).toBe(true)
            expect(strategy.checkMinLengthNumber(5, 6).build()).toBe(true)
        })

        test("invalid class: String < min", () => {

            expect(strategy.checkMinLengthNumber(5, 4).build()).toBe(false)
            expect(strategy.checkMinLengthNumber(5, 3).build()).toBe(false)
        })

    })

    describe("Testing Function IsUUID", () => {


        test("valid class: UUID", () => {

            expect(strategy.isUUID(randomUUID().toString()).build()).toBe(true)

        })

        test("invalid class: anything other than UUID", () => {

            expect(strategy.isUUID("i").build()).toBe(false)

        })



    })


})