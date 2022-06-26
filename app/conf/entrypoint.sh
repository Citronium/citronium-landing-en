#!/bin/bash
 
echo "Запускаю nginx & php-fpm"
nginx && php-fpm7.4
 
#Здесь мы вешаем бесконечный просмотр лога nginx который будет показывать ошибки пока контейнер запущен
tail -f /var/log/nginx/error.log
