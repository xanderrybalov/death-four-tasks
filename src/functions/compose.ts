export const compose = (): void => {

    const main = <T>(...funcs: Array<(arg: T) => T> ) => {
        return (arg: T): T => funcs.reduceRight((res, f) => f(res), arg);
    };
    const square = (x: number) => x * x;
    const times2 = (x: number) => x * 2;

    console.log(main(square, times2)(2))
}


