import ollama from "ollama";
import text from "../assets/Script.txt";

const embedding = ollama.embeddings({
  model: "mxbai-embed-large",
  prompt: text,
});

embedding && console.log("Embedding:", embedding);
