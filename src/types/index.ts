import { WorkerController } from "../controllers/workercontroller";
import { Session } from "../io/input";

/** A type defining the strings that can be used as methods */
export type HTTPMethod =
    "get" | "GET" |
    "head" | "HEAD" |
    "post" | "POST" |
    "put" | "PUT" |
    "delete" | "DELETE" |
    "connect" | "CONNECT" |
    "options" | "OPTIONS" |
    "trace" | "TRACE" |
    "patch" | "PATCH" |
    "any" | "ANY";

// Types for middleware and endware components
export type Middleware = (session: Session, next: undefined | Middleware | Endware) => any
export type Endware =    (session: Session, data: any, next: undefined | Endware) => any

/** Defines a route to a given endpoint */
export interface Routing {
    method: HTTPMethod; 
    host?: string;
    route: string;
    controller: WorkerController;
    propertyKey: string;
    DOBinding?: string;
}

/** Defines a target durable object */
export interface DOTarget {
    name?: string;
    idstring?: string;
    id?: DurableObjectId;
}