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
|   ├── technologies.json //Список технологий
|   ├── texts_home.json //Тексты главной страницы
|   └── texts_app.json //Тексты остальных страниц
├── _includes // HTML куски, встраиваемые в других файлах
    ├──articles //Тексты постов
├── _posts // Каркас постов
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
layout: project //Используемый шаблон
permalink: project/isup/ //Желаемый вид uri в браузере

postTitle: //Титул в списке проектов
    ru: Информационная система управления проектами
    en: Project Management Information System
postDescription: //Описание в списке проектов
    ru: Разработали систему управления проектами с визуализацией и обновляемой информацией более чем по 30 проектам
    en: We have developed the project management system with visualization and regular information updates for over 30 projects

prevImage: "/assets/img/projects/prev/isup-prev.png" //Картинка в списке проектов
prevPosition: right //Расположение картинки в списке проектов
spheres: ["business-processes", "project-management"] //Сферы проекта
technologies: ["web"] //Технологии проекта
---
```

3. Указать путь текстов ru en
```
{% if site.lang == "ru" %}
{%- include articles/isup.ru.md -%}
{% else %}
{%- include articles/isup.en.md -%}
{% endif %}

```

4. Добавить в папке articles файлы проектов ru en

## Обновление английской версии сайта

Нужно в форкнутом репозитории сделать синхронизацию от основного репозитория (master)

смержить мастер ветку в gh-pages

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

Переведены тексты: aspyre, lukoil, stroycontrol, isup
Главная, шапка, страница проекты(app)

Остальное через переводчик