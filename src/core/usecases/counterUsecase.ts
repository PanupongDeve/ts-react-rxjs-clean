import { DtoCounter } from '../entities/counter/DtoCounter';

class CounterUseCase {
    private static instance: CounterUseCase = new CounterUseCase();

    private constructor() {

    }

    static getInstance(): CounterUseCase {
        if (!CounterUseCase.instance) {
            CounterUseCase.instance = new CounterUseCase();
        }
    
        return CounterUseCase.instance;
    }


    public increment(value: number): number {
        return value+1;
    };

    public decrement(value: number): number {
        return value-1;
    };
}


const counterUseCase: CounterUseCase = CounterUseCase.getInstance();

export {
    counterUseCase,
    CounterUseCase
}




