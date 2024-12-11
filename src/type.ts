export function mull(x: number, y: number): number {
    return x * y
}

function div(x: number, y: number): number {
    return x / y
}

function applyfunc(funcs: ((a: number, b: number) => number)[], values: [[number, number], [number, number]]): number[] {
    const results = [] as number[];
    for (let index = 0; index < funcs.length; index++) {
        const args = values[index];
        const result = funcs[index](args[0], args[1]);
        results.push(result);
    }
    return results;
}
applyfunc([mull, div], [[1, 2], [3, 4]])


function getItemLength(value: string | string[], value2: string | string[]) {

}

