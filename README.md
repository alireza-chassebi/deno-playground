## installation

install deno

```
    brew install deno
```

if you are using vscode make sure you have the denoland extension and ensure your workspce is using typescript 3.9.5

## cacheing modules and running programs

to cache remote imports you just have to run the file that contains the import this requires network access in order to cache the module
for server.ts network access is always needed because we are listening and responding to incoming requests

```
    deno run --allow-net server.ts
```

app.ts contains writes to a txt file therefore need to specify flag to allow writes to the file system as well as this needs network acces on first run
to cache the module. So to get app.ts to work on first run:

```
    deno run --allow-net --allow-write app.ts
```
