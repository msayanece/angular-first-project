import { Injectable } from '@angular/core';
@Injectable()

export class LogService {
    log(msg: string): void{
        console.log(new Date() + ': ' + msg);
    }
}
