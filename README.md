# Лендинг компании Цитрониум

## Требования

- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/downloads/) 2.5.0 и выше
- [RubyGems](https://rubygems.org/pages/download)
- [GCC](https://gcc.gnu.org/install/) и [Make](https://www.gnu.org/software/make/)

## Разрабатываемое окружение
- Ruby 3.2.2
- Gem 3.3.7

## Быстрый старт 

1. Склонируйте проект
```sh
git clone ...
```
2. Перейдите в папку с проектом

3. Установка зависимостей

```sh
bundle
```

4. Запуск проекта

Без JEKYLL_ENV, по умолчанию development

```sh
bundle exec jekyll serve
```

или 

```sh
bundle exec jekyll serve --livereload
```

или 

```sh
bundle exec  jekyll serve --livereload --baseurl=""
```

Production

```sh
JEKYLL_ENV=production bundle exec jekyll serve
```

```sh
JEKYLL_ENV=production bundle exec jekyll build
```



## Структура проекта
```sh
.
├── _data
|   ├── spheres.json //Список сфер
|   └── technologies.json //Список технологий
├── _includes // HTML куски, встраиваемые в других файлах
├── _posts // Все файлы проектов
├── _sass // Стили
├── _site // Билд проекта, генерирует Jekyll. В репозитории его нет.
├── assets // Картинки, скрипты, главный файл стилей

```

## Добавление нового поста

1. Создайте файл с расширением .md в папке _posts: ДАТА-имя.md

2. В шапке заполнить Front Matter

Пример:
```sh
---
layout: project //Имя шаблона, без расширения
permalink: projects/test/ //Желаемый вид uri в браузере
title: Test title //Титул
description: Тестовое описание // Описание проекта
prev_image: "/assets/img/projects/prev/test-prev.png" //Путь к изображению, который будет показываться на странице со списком проектов
prev_position: center // Расположение изображения. Варианты: center, left, right
spheres: ['business-processes', 'geolocation'] //К какой сфере относится проект. Весь список находится в _data/spheres.json
technologies: ['hybrid', 'web'] //К какой технологии относится проект. Весь список находится в _data/technologies.json
---
```

3. В процессе разработки

## Плагины

jekyll-autoprefixer, "1.0.1"

Префиксы добавляются только со скриптом 

```sh
JEKYLL_ENV=production bundle exec jekyll serve
```

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

## FAQ

- [Установка Jekyll](https://jekyllrb.com/docs/installation/)

Определение dev окружения для JavaScript везде в layout подключено env.html

```sh
{% if jekyll.environment == "development" %}
<script type="javascript">
    window.dev = true
</script>
{%- endif -%}
```

Для изменения api feedback.js
```sh
function sendMail
...
if (window.dev === true) {
    api = "https://citronium-landing-api.psrv5.citronium.com/users/send-email";
} else {
    api = "https://citronium-landing-api.psrv5.citronium.com/users/send-email"
}
```