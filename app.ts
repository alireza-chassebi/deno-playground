const encoder = new TextEncoder();
const data = encoder.encode("i love 🦕");

//top level await 🦕  // --allow-write flag needed deno is secure by default requires explicit executiton permissions!
await Deno.writeFile("data.txt", data);
