---
title: Ruby 实现 Java 中的"DESede/ECB/PKCS5Padding"的加密  
slug: dessede-ecb-pkcs5padding-java-to-ruby
intro: 开发过程中，第三方SDK经常都是针对java、php、python、node.js的封装或者给出相应的事例，而针对 Ruby 的很少，工作中遇到了ECB加密解密的需求，下面给出Ruby 如何实现 Java 中的 ECB 加密解密的相关例子
tags: ruby, java, ecb加密
date: "2020-10-11"
---

开发过程中，第三方SDK经常都是针对java、php、python、node.js的封装或者给出相应的事例，
而针对 Ruby 的很少，工作中遇到了ECB加密解密的需求，
下面给出Ruby 如何实现 Java 中的 ECB 加密解密的相关例子：

Java 代码1:
```java
Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
cipher.init(Cipher.ENCRYPT_MODE, new SecretKeySpec(build3DesKey(secretKey), "DESede"));
String base64Encode = getBase64Encode(cipher.doFinal(src.getBytes("UTF-8")));
```


Java 代码2:
```java
public static byte[] build3DesKey(String keyStr) throws UnsupportedEncodingException {
  byte[] key = new byte[24];    //声明一个24位的字节数组，默认里面都是0
  byte[] temp = keyStr.getBytes("UTF-8");    //将字符串转成字节数组

  /*
  * 执行数组拷贝
  * System.arraycopy(源数组，从源数组哪里开始拷贝，目标数组，拷贝多少位)
  */
  if(key.length > temp.length){
    //如果temp不够24位，则拷贝temp数组整个长度的内容到key数组中
    System.arraycopy(temp, 0, key, 0, temp.length);
  }else{
    //如果temp大于24位，则拷贝temp数组24个长度的内容到key数组中
    System.arraycopy(temp, 0, key, 0, key.length);
  }
  System.out.println("aaaaa");
  System.out.println(key);
  System.out.println(key.length);
  for(int i=0; i< key.length ; i++) {
    System.out.print(key[i] +" ");
  }
  System.out.println("aaaaa");
  return key;
}
```

ruby对应的加密解密

```rb
require 'base64'
require 'digest'
require 'openssl'

module Des3Encrypt
  def self.cipher(mode, key, iv, data)
    cipher = OpenSSL::Cipher.new('DES-EDE3').send(mode)
    cipher.key = build_3des_key(key)
    cipher.iv  = iv if iv

    encrypted = ''
    encrypted << cipher.update(data)
    encrypted << cipher.final
    encrypted
  end

  def self.encrypt(key, iv, data)
    Base64.strict_encode64 cipher(:encrypt, key, iv, data)
  end

  def self.decrypt(key, iv, data)
    cipher(:decrypt, key, iv, Base64.strict_decode64(data))
  end

  def self.build_3des_key(key)
    key_bytes_length = key.bytes.length
    skey = if key_bytes_length < 24
      key.bytes + (0...(24 - key_bytes_length)).to_a.map{|x| 0}
    else
      key.bytes[0...24]
    end

    skey.pack("c*")
  end

  def self.md5_capital(str)
    Digest::MD5.hexdigest(str).upcase
  end
end
```