# LLM & AI Model Compare

LLM & AI Model Compare is a contributor-driven platform for comparing language models and AI technologies across various suppliers. Built with Svelte, it provides an interactive way to explore and understand the differences in cost, speed, and quality of AI models.

## Suppliers
- [x] OpenAI: [docs](https://platform.openai.com/docs/overview)
- [ ] Google: [docs](https://cloud.google.com/products/ai)
- [ ] Anthropic: [docs](https://www.anthropic.com/)
- [ ] Cohere: [docs](https://docs.cohere.ai/)
- [ ] Microsoft: [docs](https://docs.microsoft.com/en-us/azure/cognitive-services/)
- [ ] Anyscale: [docs](https://docs.anyscale.com/)
- [ ] Groq: [docs](https://groq.com/product/)
- [ ] Mistral: [docs](https://docs.mistral.ai/)

## Project Structure

- **`/data`**: Contains supplier directories and model details.
- **`/src`**: Source code for the Svelte app, including routes (pages) and components.

## Contributing

### Adding Data

1. **Models and Suppliers**:
   - Navigate to `/data`.
   - Create or select a supplier directory.
   - Add a `model.js` file for the model you're documenting, using the following structure:

     ```js
     export default {
       id: 'Model_ID',
       model: 'Model_Name',
       source: 'https://example.com',
       cost: {
         currency: 'USD',
         per_million_tokens_input: X,
         per_million_tokens_output: Y
       },
       speed: {
         tokens_per_second: Z,
         latency_first_token_ms: A
       },
       technical: {
         token_window: B
       },
       quality: {
         some_metric: C
       }
     };
     ```

### Enhancing the App

2. **Pages**:
   - For adding or updating pages, go to `/src/routes`.
   - Create a new `.svelte` file or update an existing one to incorporate new data or functionalities. Ensure the page is linked properly within the app for navigation.

### Visualization and Interaction

3. **Charting**:
   - Utilize the charting library integrated into the project to add visual data representations. Enhancements to existing charts or new chart implementations are encouraged.
   - You can learn how to do this by following our [guide](/CHARTS.md).

### Building and Deployment

- The project uses GitHub Actions for CI/CD, automatically building and deploying the app to GitHub Pages upon merging PRs.

## Getting Started

To contribute, fork this repository, make your changes, and submit a pull request. Ensure your additions or updates follow the project's structure and standards.

## Guidelines

- Document your code and changes thoroughly.
- Adhere to coding and UI design standards of the project.
- Use meaningful commit messages and provide detailed PR descriptions.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

