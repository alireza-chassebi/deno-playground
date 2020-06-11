import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

interface Todo {
    id: string;
    text: string;
}

let todos: Todo[] = [];

router
    .get('/todos', (ctx) => {
        //oak assumes its json if body is set to object literal
        ctx.response.body = { todos };
    })
    .post('/todos', async (ctx) => {
        //oak auto parses json based on req body and headers
        // body returns a promise
        const data = await ctx.request.body();
        const newTodo: Todo = {
            id: new Date().toISOString(),
            text: data.value.text,
        };
        todos.push(newTodo);
        ctx.response.body = {
            message: 'created todo succesfully',
            todo: newTodo,
        };
    })
    .put('/todos/:id', async (ctx) => {
        const tid = ctx.params.id;
        const todoIdx = todos.findIndex((el) => el.id === tid);
        const data = await ctx.request.body();
        todos[todoIdx] = { id: todos[todoIdx].id, text: data.value.text };
        ctx.response.body = {
            message: 'todo succesfully updated',
            todo: todos[todoIdx],
        };
    })
    .delete('/todos:id', (ctx) => {
        const tid = ctx.params.id;
        const todoIdx = todos.findIndex((el) => el.id === tid);
        todos = todos.filter((el) => el.id !== tid);
        ctx.response.body = {
            message: 'deleted todo succesfully',
        };
    });

export default router;
