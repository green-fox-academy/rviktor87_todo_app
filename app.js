import TodoApp from './TodoApp.js';
const args = process.argv.slice(2);

// Router - paraméter => if else helyettesíteni
// Fájlbeolvasás
// SRP = Single Responsibility Principle

const app = new TodoApp(args);
app.run();
