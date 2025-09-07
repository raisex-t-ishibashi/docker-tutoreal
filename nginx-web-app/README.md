# demo-web-app

frontendのコンテナとbackendのコンテナで構成されるシンプルなWebアプリ例

# 実行方法

1. ディレクトリ移動する
```
cd nginx-web-app
```

2. Dockerイメージのビルド

```
docker compose build
```

3. アプリの起動
```
docker compose up -d
```

1. ブラウザから `http://localhost` にアクセスする。
画面に以下の内容が表示される。
```
Hello
{ "message": "hello" }
Hello2
{ "message": "helloworld" }
```

