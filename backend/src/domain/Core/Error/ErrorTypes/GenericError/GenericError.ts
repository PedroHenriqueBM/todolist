import { IGenericError } from "./IGenericError";
import { randomUUID } from 'node:crypto';

interface IGenericErrorProps {
    type: String;
    message: String;
    cause: String;
    module: String;
    status: Number;
}

interface IInstantiatedErrorProps {
    cause: String;
    module: String;
    status: Number;
}

class GenericError implements IGenericError {

    private id: String;
    private type: String;
    private message: String;
    private date: String;
    private cause: String;
    private module: String;
    private status: Number;


    constructor(props: IGenericErrorProps) {

        const date = new Date().toString();
        const id = randomUUID().toString();

        this.setDate(date);
        this.setId(`${id}-${date}`);

        this.setType(props.type);
        this.setMessage(props.message);
        this.setCause(props.cause);
        this.setModule(props.module);
        this.setStatus(props.status);


    }


    getId(): String {
        return this.id;
    }
    setId(newId: String): void {
        this.id = newId;
    }

    getType(): String {
        return this.type;
    }
    setType(newType: String): void {
        this.type = newType;
    }

    getMessage(): String {
        return this.message;
    }
    setMessage(newMessage: String): void {
        this.message = newMessage;
    }
    getDate(): String {
        return this.date;
    }
    setDate(newDate: String): void {
        this.date = newDate;
    }
    getCause(): String {
        return this.cause;
    }
    setCause(newCause: String): void {
        this.cause = newCause;
    }
    getModule(): String {
        return this.module;
    }
    setModule(newModule: String): void {
        this.module = newModule;
    }
    getStatus(): Number {
        return this.status;
    }
    setStatus(newStatus: Number): void {
        this.status = newStatus;
    }


}

export { GenericError, IGenericErrorProps, IInstantiatedErrorProps }