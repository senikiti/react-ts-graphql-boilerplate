interface Props {
    name: string;
    enthusiasmLevel?: number;
}

class EnthusiasmProps implements Props {
    name: string;
    enthusiasmLevel?: number | undefined;
    constructor(name:string, enthusiasmLevel: number){
        this.name = name;
        this.enthusiasmLevel = enthusiasmLevel ? enthusiasmLevel : 1;
    }
}

export default EnthusiasmProps;