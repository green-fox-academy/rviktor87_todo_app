import Todo from './Todo.js';

export default class TodoApp {
    #args;
    #commands;
    #todoList = [];

    constructor(args) {
        this.#args = args;
        this.#commands = [
            ["-l", this.list],
            ["-a", this.addTodo, this.checkIfNextParameterIsACommand],
            ["-r", this.remove, this.checkIfNextParameterIsACommand]
        ];
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

    init(rawTodos) {
        rawTodos.forEach((rawTodo) => {
            this.#todoList.push(new Todo(rawTodo));
        });

        console.log(this.#todoList)
    }

    run() {
        /*
        switch (this.#args[0]){
            case "-l": {
                this.list();
                break;
            }
            case "-a": {
                this.addTodo(this.#args[1]);
            }
        }
         */

        /*
        if (this.#args.includes('-l')) {
            this.list();
        } else if (this.#args.includes('-a')) {
            this.addTodo();
        } else {
            this.printIntro();
        }
         */

        this.#commands.forEach(([possibleParameter, functionToRun, validateFn]) => {
            // const [possibleParameter, functionToRun] = commandPair;
            // const possibleParameter = commandPair[0];
            // const functionToRun = commandPair[1];
            if (this.#args.includes(possibleParameter)) {
                const indexOfPossibleParameter = this.#args.indexOf(possibleParameter)
                const nextParameterValue = this.#args[indexOfPossibleParameter + 1];
                if (validateFn === undefined) {
                    functionToRun(this.#args[indexOfPossibleParameter + 1]);
                } else if (validateFn(nextParameterValue, possibleParameter)) {
                    functionToRun(this.#args[indexOfPossibleParameter + 1]);
                }
            }
        });
    }

    checkIfNextParameterIsACommand(nextParameterValue, actualParameter) {
        if (nextParameterValue === undefined ||
            (nextParameterValue.length === 2 && nextParameterValue[0] === "-")) {
            console.error(`Hiányzik egy paraméter a ${actualParameter} paraméter után`);
            return false;
        }
        return true;
    }

    addTodo(todo) {
        console.log(todo);
        // console.log("adding Todo: " + todo);
    }

    printIntro() {
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

    remove(id) {
        console.log("removing a todo: " + id);
    }
}
