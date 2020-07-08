import { BehaviorSubject } from 'rxjs';
import { counterUseCase, CounterUseCase } from '../../core/usecases/counterUsecase';
class CountService {
    private static instance: CountService = new CountService();

    private counterSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    private counterUseCase: CounterUseCase = counterUseCase;

    private constructor() {

    }

    public getCount(): BehaviorSubject<number> {
        return this.counterSubject;
    }

    public increment(): void {
        let count: number = this.counterSubject.getValue();
        const valueUpdated = this.counterUseCase.increment(count)
        this.counterSubject.next(valueUpdated);
    };

    public decrement(): void {
        let count: number = this.counterSubject.getValue();
        const valueUpdated = this.counterUseCase.decrement(count)
        this.counterSubject.next(valueUpdated);
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