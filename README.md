# Wise Search Front

Этот проект представляет собой фронтенд-приложение для **Wise Search**, разработанное с использованием современных инструментов и фреймворков для создания отзывчивого и эффективного пользовательского интерфейса.

## Начало работы

Чтобы настроить проект для разработки, выполните следующие шаги.

### Предварительные требования

- Убедитесь, что на вашем компьютере установлены **Node.js** (рекомендуется версия 14 или выше) и **npm**. Node.js можно скачать [здесь](https://nodejs.org/).
- Знание фреймворков Vue.js и Quasar будет полезным для работы с проектом.

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <repository_url>
   ```
2. Перейдите в директорию проекта:
   ```bash
   cd wise-search-front
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```

### Запуск сервера разработки

После установки зависимостей можно запустить сервер разработки:

```bash
npm run dev
```

Это запустит сервер разработки с поддержкой горячей перезагрузки, что позволит вам видеть изменения в реальном времени. По умолчанию сервер работает на [http://localhost:3000](http://localhost:3000), но при необходимости порт можно настроить.

### Сборка для продакшена

Чтобы создать оптимизированную сборку приложения для продакшена, выполните команду:

```bash
npm run build
```

После выполнения сборки файлы будут находиться в директории `dist` и будут готовы для деплоя.

## Стек технологий

- **Vue 3**: Прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов.
- **Vite**: Быстрый и легковесный инструмент сборки, обеспечивающий быструю разработку и оптимизированный процесс сборки.
- **Quasar CLI**: Мощный CLI для создания отзывчивых и полнофункциональных приложений на основе Quasar, который отлично интегрируется с Vue.

## Структура проекта

- `src/`: Содержит исходный код приложения, включая компоненты, представления и ресурсы.
- `public/`: Статические файлы, обслуживаемые сервером напрямую, такие как шаблон `index.html`.
- `dist/`: Директория, содержащая оптимизированные файлы для продакшена, которая создается после выполнения сборки.

## Полезные команды

- **Запуск сервера разработки**: `npm run dev`
- **Сборка для продакшена**: `npm run build`
- **Линтинг и исправление файлов**: `npm run lint`
- **Просмотр продакшен-сборки**: `npm run preview` (удобно для локального тестирования перед деплоем)
