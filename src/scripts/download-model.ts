import { pipeline, env } from '@huggingface/transformers';

env.cacheDir = "../models";

console.log("Downloading model weights...");
const pipe = await pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning');
console.log("Done");