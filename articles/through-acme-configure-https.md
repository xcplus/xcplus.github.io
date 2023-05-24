---
title: 通过 acme.sh 配置 https
slug: through-acme-configure-https
intro: 为了网站安全，我们经常会给我们的域名配置并启用https，使我们的网站更加安全，如今有很多可以自动生成证书的工具，比如：acme.sh、Certbot等，由于经常性的使用，所以写一下使用acme.sh的方法和配置
tags: ruby, acme.sh, nginx
date: "2020-08-19"
---

1、 安装acme.sh 如下命令：

```rb
curl https://get.acme.sh | sh
```
为了能在命令行中执行，在.bashrc中配置：

```rb
alias acme.sh=~/.acme.sh/acme.sh
```
srouce .bashrc一下就可在控制台中查看acme.sh命令了

acme.sh -h 查看帮助

2、生成dhparams在/etc/nginx/ssl目录下：

```rb
openssl dhparam -out /etc/nginx/ssl/dhparams.pem 4096
```
3、配置nginx可以访问对应域名下的.well-known文件(因为要使对应域名可用)
比如在/var/html/www下创建一个.well-known文件夹

```rb
location /.well-known {
  root /var/html/www;
}
```
4、颁发证书

```rb
acme.sh --issue -w  /var/html/www -d xcx.org -k 4096
```

5、生成对应的nginx的配置证书

```rb
acme.sh --install-cert -d xcx.org --key-file /etc/nginx/ssl/xcx/xcx.org.key --fullchain-file /etc/nginx/ssl/xcx/xcx.org.cer --reloadcmd 'service nginx restart'
```
6、配置对应的nginx

```rb
listen 443 ssl;
ssl_certificate /etc/nginx/ssl/xcx/xcx.org.cer ;
ssl_certificate_key /etc/nginx/ssl/xcx/xcx.org.key;
ssl_session_timeout 30m;
ssl_protocols TLSv1.1 TLSv1.2;
ssl_ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS;
ssl_session_cache shared:SSL:10m;
ssl_dhparam /etc/nginx/ssl/dhparams.pem;
ssl_prefer_server_ciphers on;
add_header Strict-Transport-Security max-age=31536000;
```


配置参考

```ruby
upstream talent {
  server unix:///data/talent/shared/tmp/sockets/puma.sock;
}

server {
  listen       80 default_server;
  listen 443 ssl;
  server_name  abc.com;
  root /data/talent/current/public;
  index index.html;
  add_header Access-Control-Allow-Origin *;
  ssl_prefer_server_ciphers on;
  ssl_session_timeout 30m;
  ssl_protocols TLSv1.1 TLSv1.2;
  ssl_ciphers ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:ECDH+AES128:DH+AES:ECDH+3DES:DH+3DES:RSA+AESGCM:RSA+AES:RSA+3DES:!aNULL:!MD5:!DSS;
  ssl_session_cache shared:SSL:10m;
  ssl_prefer_server_ciphers on;
  add_header Strict-Transport-Security max-age=31536000;


  ssl_certificate /etc/nginx/ssl/talent/abc.com.cer;
  ssl_certificate_key  /etc/nginx/ssl/talent/abc.com.key;
  ssl_dhparam /etc/nginx/ssl/talent/dhparams.pem;
  try_files $uri/index.html $uri.html $uri @talent;

  location @talent {
    proxy_set_header   Host $host;
    proxy_set_header   X-Forwarded-Host $host;
    proxy_set_header   X-Forwarded-Server $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_pass         http://talent;
  }

  location ~ ^/(assets)/ {
    gzip_static on;
    expires max;
    add_header Cache-Control public;
  }
  error_page 404 /404.html;
      location = /400.html {
  }

  error_page 500 502 503 504 /500.html;
      location = /500.html {
  }
}
```