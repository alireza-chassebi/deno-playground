import { Application } from 'https://deno.land/x/oak/mod.ts';
//need file extension in deno
import todoRoutes from './routes/todo.ts';

const app = new Application();
//oak automatically send a response after executing one middleware so
// we can use await next() to wait for promises returned from async route middlewares
app.use(async (ctx, next) => {
    console.log('middleware is working');
    await next();
});

//routing middleware
app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

await app.listen({ port: 3000 });
