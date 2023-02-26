import { defineConfig } from 'orval';

export default defineConfig({
    evo: {
        output: {
            mode: 'tags',
            schemas: 'src/services/api',
            mock: false,
            prettier: true,
            clean: true,
        },
        input: {
            target: 'http://localhost:8080/api/v1/v3/api-docs',
        },
    },
});
