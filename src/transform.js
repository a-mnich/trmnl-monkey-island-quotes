function transform(input) {
  let language = input.trmnl.plugin_settings.custom_fields_values.language;
  // Get quotes for the selected language
  const quotes = input.quotes[language] || input.quotes['english'];
  // Select a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return {
    quote: randomQuote
  }
}