# 📺 Streamify

**Streamify** — это концептуальный интерфейс стримингового сервиса, разработанный с акцентом на чистую архитектуру и высокую производительность. Проект представляет собой современное SPA (Single Page Application) для обзора и поиска видеоконтента.

> **Примечание:** В данном проекте функционал воспроизведения видео может быть ограничен или отсутствовать в связи с политикой использования сторонних API. Основной фокус сделан на архитектуре и UX/UI.

## 🔗 Ссылки

- **Демо (GitHub Pages):** [https://mattuzik.github.io/Streamify](https://mattuzik.github.io/Streamify)
- **Репозиторий:** `https://github.com/mattuzik/Streamify`

## 🛠 Стек технологий

- **Framework:** [React](https://reactjs.org) (Vite)
- **State Management:** [Redux Toolkit](https://js.org)
- **Data Fetching:** [RTK Query](https://js.orgrtk-query/overview)
- **Architecture:** [Feature-Sliced Design (FSD)](https://feature-sliced.design)
- **Styling:** CSS Modules / Tailwind CSS (выбери свое)

## 🏗 Архитектурный подход

Проект реализован согласно методологии **Feature-Sliced Design**. Это позволяет сохранять код поддерживаемым и масштабируемым:

- `app/` — настройка роутинга, store и глобальных стилей.
- `pages/` — компоненты страниц.
- `widgets/` — композиционные слои (например, боковая панель, сетка видео).
- `features/` — интерактивные действия (поиск, подписка, лайк).
- `entities/` — бизнес-сущности (видео, канал, плейлист) и их логика.
- `shared/` — переиспользуемые UI-компоненты, API-конфиги и утилиты.

## 🚀 Запуск проекта

### Предварительные условия

Убедитесь, что у вас установлен [Node.js](https://nodejs.org) (рекомендуется версия LTS).

### Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com.git
   ```
2. Перейдите в папку проекта:
   ```bash
   cd streamify
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```

### Разработка и сборка

- **Запуск в режиме разработки:**
  ```bash
   npm run dev
  ```
- **Сборка проекта:**
  ```bash
   npm run build
  ```
- **Предпросмотр сборки:**
  ```bash
   npm run preview
  ```

## 📝 Лицензия

Проект создан в учебных целях.
