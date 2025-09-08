export interface IGenericError {

    getId(): string;
    setId(newId: string): void;

    getType(): string;
    setType(newType: string): void;

    getMessage(): string;
    setMessage(newMessage: string): void;

    getDate(): string;
    setDate(newDate: string): void;

    getCause(): string | IGenericError;
    setCause(newCause: string | IGenericError): void;

    getModule(): string;
    setModule(newModule: string): void;

    getStatus(): number;
    setStatus(newStatus: number): void;

    toString(): string;



}