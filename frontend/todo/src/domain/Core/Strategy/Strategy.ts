import { DateFormatError } from "../Error/ErrorTypes/Strategy/DateFormatError/DateFormatError";
import { IStrategy } from "./IStrategy";


const regex = {
    ptBr: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
    iso: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
}

export class Strategy implements IStrategy {

    private response: Boolean | undefined = undefined;

    parseBRDate(str: string): Date {
        const [day, month, year] = str.split("/")
        return new Date(`${year}-${month}-${day}`)
    }

    isNumber(field: any): this {
        this.response = (typeof field === "number");
        return this;
    }

    isInt(field: any): this {
        this.response = Number.isInteger(field);
        return this;
    }

    isNull(field: any): this {

        this.response = (field === null)
        return this;
    }
    isUndefined(field: any): this {
        this.response = (typeof field === "undefined");
        return this;
    }
    isString(field: any): this {
        this.response = (typeof field === "string");
        return this;
    }

    isDate(field: any, language: string): this {

        let ln = language as keyof typeof regex
        let format = regex[ln];

        if (this.isUndefined(format).build()) {
            throw new DateFormatError({ cause: `The language not was found -> ${language}`, module: "Strategy/IsDate", status: 400 });
        }

        this.response = format.test(field)
        return this;
    }


    checkMaxLengthString(max: number, field: any): this {
        this.response = (field.trim().length <= max);
        return this;
    }
    checkMinLengthString(min: number, field: any): this {
        this.response = (field.trim().length >= min);
        return this;
    }

    checkMaxLengthNumber(max: number, field: any): this {
        this.response = (field <= max);
        return this;
    }
    checkMinLengthNumber(min: number, field: any): this {
        this.response = (field >= min);
        return this;
    }

    isUUID(field: any): this {
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        this.response = regex.test(field);
        return this
    }

    not(): this {
        this.response = !this.response;
        return this;
    }

    build(): Boolean | undefined {
        const finalResponse = this.response;
        this.response = undefined;
        return finalResponse;
    }


}