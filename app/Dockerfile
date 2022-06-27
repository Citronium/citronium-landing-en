FROM ubuntu:20.04 as intermediate
 
RUN ln -snf /usr/share/zoneinfo/"Europe/Moscow" /etc/localtime && echo "Europe/Moscow" > /etc/timezone
 
RUN apt-get update \
        && apt-get install -y nginx php7.4 php7.4-cli php7.4-common php7.4-curl php7.4-dev php7.4-mysql php7.4-fpm
 
COPY app/conf/nginx.conf /etc/nginx/sites-available/default
 
COPY app/conf/entrypoint.sh /entrypoint.sh

RUN chmod a+x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
