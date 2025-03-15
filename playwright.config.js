import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    actionTimeout: 10000, // Таймаут на каждое действие
    retries: 1,
    reporter: [['html'], ['json', { outputFile: 'test-results.json' }]],
    use: {
      headless: true, // Запуск браузера в фоновом режиме
      screenshot: 'only-on-failure', // Скриншоты только при неудачных тестах
      video: 'retain-on-failure', // Запись видео при ошибке
    },
});