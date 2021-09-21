const sentence = "The best ballers get together and pinch nickles";




for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 50) // <= 1s delay to make it noticeable. Can dial it down later.
}
