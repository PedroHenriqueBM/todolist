export interface IGenericError {

    getId(): String;
    setId(newId: String): void;

    getType(): String;
    setType(newType: String): void;

    getMessage(): String;
    setMessage(newMessage: String): void;

    getDate(): String;
    setDate(newDate: String): void;

    getCause(): String;
    setCause(newCause: String): void;

    getModule(): String;
    setModule(newModule: String): void;

    getStatus(): Number;
    setStatus(newStatus: Number): void;



}