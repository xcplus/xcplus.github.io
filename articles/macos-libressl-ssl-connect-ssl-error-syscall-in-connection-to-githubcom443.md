---
title: macOS安装Homebrew遇到错误LibreSSL SSL_connect SSL_ERROR_SYSCALL in connection to github.com:443
slug: macos-libressl-ssl-connect-ssl-error-syscall-in-connection-to-githubcom443
intro: macOS安装Homebrew遇到错误LibreSSL SSL_connect SSL_ERROR_SYSCALL in connection to github.com:443
tags: macOS, homebrew
date: "2022-02-15"
---

#### 安装 Homebrew
针对 macOS, 只需要在 terminal 中运行如下命令:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### LibreSSL SSL_connect: SSL_ERROR_SYSCALL
在执行该安装脚本是遇到错误：
```bash
fatal: unable to access 'https://github.com/Homebrew/homebrew-core/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443
```

解决：由于在中国大陆网络的问题，为git添加socks代理
通过如下命令打开.gitconfig
```bash
vim ~/.gitconfig
```
添加如下内容：
```bash
[http]
      sslBackend = openssl
      proxy = socks5://127.0.0.1:1080
      # 1080是代理端口
```

添加该文件后，如果再次尝试运行安装脚本，会遇到错误

```bash
error: Not a valid ref: refs/remotes/origin/master
```

解决：这是由于多次重复安装造成冲突，需要执行卸载然后再次安装

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
```

还需要手动删除两个目录

```bash
sudo rm -rf /usr/local/Homebrew
sudo rm -rf /usr/local/var/homebrew
```

卸载成功。
现在再次执行安装脚本即可成功安装。