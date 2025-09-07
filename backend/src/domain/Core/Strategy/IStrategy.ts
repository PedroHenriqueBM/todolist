

export interface IStrategy {

    isNull(field: any): this;
    isUndefined(field: any): this;
    isString(field: any): this;
    isDate(field: any, language: string): this;
    isNumber(field: any): this;
    isInt(field: any): this


    checkMaxLengthString(max: number, field: any): this;
    checkMinLengthString(min: number, field: any): this;

    checkMaxLengthNumber(max: number, field: any): this;
    checkMinLengthNumber(min: number, field: any): this;

    isUUID(field: any): this;

    build(): Boolean | undefined;
    not(): this;


}