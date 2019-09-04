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

class Enthusiasm {
    enthusiasmProps: EnthusiasmProps;
    constructor(enthusiasmProps: EnthusiasmProps){
        this.enthusiasmProps = enthusiasmProps;
    }
    /*
    setEnthusiasmLevel(level: number){
        this.enthusiasmProps.enthusiasmLevel = level;
    }
    setName(name: string){
        this.enthusiasmProps.name = name;
    }
    getEnthusiasmLevel(){
        return this.enthusiasmProps.enthusiasmLevel ? this.enthusiasmProps.enthusiasmLevel : 1;
    }
    getName(){
        return this.enthusiasmProps.name;
    }*/
}

export { EnthusiasmProps, Enthusiasm }
