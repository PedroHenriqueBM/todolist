import { IGenericError } from "./IGenericError";
import { randomUUID } from 'node:crypto';

interface IGenericErrorProps {
    type: string;
    message: string;
    cause: string | IGenericError;
    module: string;
    status: number;
}

interface IInstantiatedErrorProps {
    cause: string | IGenericError;
    module: string;
    status: number;
}

class GenericError implements IGenericError {

    private id: string;
    private type: string;
    private message: string;
    private date: string;
    private cause: string | IGenericError;
    private module: string;
    private status: number;


    constructor(props: IGenericErrorProps) {

        const date = new Date().toLocaleDateString("pt-BR");
        const id = randomUUID().toString();

        this.setDate(date);
        this.setId(`${id}-${date}`);

        this.setType(props.type);
        this.setMessage(props.message);
        this.setCause(props.cause);
        this.setModule(props.module);
        this.setStatus(props.status);


    }


    getId(): string {
        return this.id;
    }
    setId(newId: string): void {
        this.id = newId;
    }

    getType(): string {
        return this.type;
    }
    setType(newType: string): void {
        this.type = newType;
    }

    getMessage(): string {
        return this.message;
    }
    setMessage(newMessage: string): void {
        this.message = newMessage;
    }
    getDate(): string {
        return this.date;
    }
    setDate(newDate: string): void {
        this.date = newDate;
    }
    getCause(): string | IGenericError {
        return this.cause;
    }
    setCause(newCause: string | IGenericError): void {
        this.cause = newCause;
    }
    getModule(): string {
        return this.module;
    }
    setModule(newModule: string): void {
        this.module = newModule;
    }
    getStatus(): number {
        return this.status;
    }
    setStatus(newStatus: number): void {
        this.status = newStatus;
    }

    toString(): string {
        return JSON.stringify(this);
    }


}

export { GenericError, IGenericErrorProps, IInstantiatedErrorProps }