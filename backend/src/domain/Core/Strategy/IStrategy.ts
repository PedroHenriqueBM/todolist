

export interface IStrategy {

    isNull(field: any): this;
    isUndefined(field: any): this;
    isString(field: any): this;
    isDate(field: any, language: String): this;

    checkMaxLengthString(max: number, field: any): this;
    checkMinLengthString(min: number, field: any): this;

    checkMaxLengthNumber(max: number, field: any): this;
    checkMinLengthNumber(min: number, field: any): this;

    build(): Boolean | undefined;
    not(): this;

}