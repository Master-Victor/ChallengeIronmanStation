import {IpcMainEvent} from 'electron';

export interface IpcChannelInterface {
    myReact(): string;

    handle(event: IpcMainEvent, request: any): void;
}