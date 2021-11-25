import TodoApp from './TodoApp.js';
const args = process.argv.slice(2);
import fs from 'fs';

// Router - paraméter => if else helyettesíteni
// Fájlbeolvasás
// SRP = Single Responsibility Principle

const fileContent = fs.readFileSync('./data/todos.json', 'utf-8');
const parsedJSON = JSON.parse(fileContent);

const app = new TodoApp(args);
app.init(parsedJSON);
app.run();
