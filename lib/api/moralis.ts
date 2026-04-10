import Moralis from "moralis";

let started = false;

export async function initMoralis() {
  if (!started) {
    await Moralis.start({
      apiKey: process.env.MORALIS_API_KEY,
    });
    started = true;
  }
}