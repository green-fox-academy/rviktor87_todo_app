export default class TodoApp {
    #args;

    constructor(args) {
        this.#args = args;
    }
    list() {
        console.log("listing");
        // File beolvasást
        // JSON parseolás => rawTodoList
        // rawTodoList => todoList = [ Todo{}, Todo{}, ]
        // a todoList kilistázása
    }
    print(string) {
        console.log(string);
    }
    run() {
        if (this.#args.includes('-l')) {
            this.list();
        } else {

            const intro = 'Parancssori Todo applikáció\n\
            =============================\n\
            \n\
            Parancssori argumentumok:\n\
            -l   Kilistázza a feladatokat\n\
            -a   Új feladatot ad hozzá\n\
            -r   Eltávolít egy feladatot\n\
            -c   Teljesít egy feladatot';

            this.print(intro);
        }
    }
}
