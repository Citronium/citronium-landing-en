# Лендинг компании Цитрониум

## Требования

- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/downloads/) 2.5.0 и выше
- [RubyGems](https://rubygems.org/pages/download)
- [GCC](https://gcc.gnu.org/install/) и [Make](https://www.gnu.org/software/make/)

## Разрабатываемое окружение
- Mac OS BigSur 11.6.7
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

## Структура проекта
```sh
.
├── _data
|   ├── spheres.json //Список сфер
|   └── technologies.json //Список технологий
├── _includes // HTML куски, встраиваемые в других файлах
├── _posts // Все посты лежат здесь
├── _sass // Стили
├── _site // Билд проекта, генерирует Jekyll. В репозитории его нет.
├── assets // Картинки, скрипты, главный файл стилей

```

## Добавление нового поста

1. Создайте файл с расширением .md в папке _posts

2. В шапке заполнить Front Matter

Пример:
```sh
---
layout: project //Имя шаблона, без расширения
permalink: projects/test/ //Желаемый вид uri в браузере
id: 1 //Уникальный номер проекта
title: Test title //Титул
description: Тестовое описание // Описание проекта
prev_image: "/assets/img/projects/prev/test-prev.png" //Путь к изображению, который будет показываться на странице со списком проектов
prev_position: center // Расположение изображения. Варианты: center, left, right
prev_background: "#367CF4" //Цвет фона за изображением
spheres: 'business-processes' //К какой сфере относится проект. Весь список находится в _data/spheres.json
technologies: 'hybrid' //К какой технологии относится проект. Весь список находится в _data/technologies.json
---
```

3. Заполните остальной  контент

3.1 HTML код для выделения текста на половину ширины экрана
```sh
<p class="project-content-item-half">Текст на половину ширины контента</p>
```

3.2 HTML код для обозначения времени разработки. Замените нужный текст
```sh
<div class="project-content-time">
    <div class="project-content-time__left">
        <p class="project-content-time__left-title">Первый релиз</p>
        <p class="project-content-time__left-month">18 месяцев</p>
    </div>
    <div class="project-content-time__right">
        <p class="project-content-time__right-title">Развитие продукта</p>
        <p class="project-content-time__right-month">15 месяцев</p>
    </div>
</div>
```

3.3 HTM код для вставки видео и текста отзыва. Замените нужный текст

```sh
<div class="project-content-video">
    <div class="project-content-video__left">
        <video height="100%" width="100%" controls autoplay></video>
    </div>
    <div class="project-content-video__right">
        <p class="project-content-video__right-title">Имя фамилия</p>
        <p class="project-content-video__right-descr">
            Здесь будет написан краткий текст отзыва
        </p>
    </div>
</div>
```

## FAQ

- [Установка Jekyll](https://jekyllrb.com/docs/installation/)