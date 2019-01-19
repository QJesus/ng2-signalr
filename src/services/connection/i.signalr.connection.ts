import { Observable } from 'rxjs';
import { BroadcastEventListener } from '../eventing/broadcast.event.listener';
import { ConnectionStatus } from './connection.status';

export interface ISignalRConnection {
    readonly errors: Observable<any>;
    readonly status: Observable<ConnectionStatus>;
    readonly id: string;
    start(): Promise<ISignalRConnection>;
    invoke(method: string, ...parameters: any[]): Promise<any>;
    listen<T>(listener: BroadcastEventListener<T>): void;
    stopListen<T>(listener: BroadcastEventListener<T>): void;
    listenFor<T>(event: string): BroadcastEventListener<T>;
    stopListenFor(event: string): void;
    listenForRaw(event: string): BroadcastEventListener<any[]>;
    stop(): void;
}
