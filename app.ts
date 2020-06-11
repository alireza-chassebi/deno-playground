import { extractEmoji } from 'https://deno.land/x/emoji/mod.ts';

const encoder = new TextEncoder();
const emoji = extractEmoji('🦕🦕');
const data = encoder.encode(`i love ${emoji}`);

//top level await 🦕  // --allow-write flag needed deno is secure by default requires explicit executiton permissions!
await Deno.writeFile('data.txt', data);
