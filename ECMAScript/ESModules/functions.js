export function label(atributo){
    const element = document.createElement('label');
    Object.assign(element,atributo);
    return element;
}

export function input(atributo){
    const element = document.createElement('input');
    Object.assign(element,atributo);
    return element;
}

export function br(){
    const element = document.createElement('br');
    return element;
}
