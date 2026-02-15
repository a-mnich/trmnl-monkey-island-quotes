function transform(input) {
  var quotes = {};
  for (const language in input.quotes) {
    const options = input.quotes[language];
    if (Array.isArray(options) && options.length > 0) {
      const randomIndex = Math.floor(Math.random() * options.length);
      quotes[language] = [options[randomIndex]];
    }
  }
  return {
    quotes: quotes
  };
}