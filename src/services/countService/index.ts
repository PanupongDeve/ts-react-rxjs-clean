import { of, Observable, BehaviorSubject, Subject } from 'rxjs';

class CountService {
    private static instance: CountService = new CountService();

    private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    private constructor() {

    }

    public getCount(): BehaviorSubject<number> {
        return this.counterSubject;
    }

    public increment(): void {
        let count: number = this.counterSubject.getValue() + 1;
        this.counterSubject.next(count);
    };

    public decrement(): void {
        let count: number = this.counterSubject.getValue() - 1;
        this.counterSubject.next(count);
    };

    public setCount(count: number): void {
        this.counterSubject.next(count)
    }   


    public static getinstance() {
        return this.instance;
    }

}

const object: CountService = CountService.getinstance();

export default object