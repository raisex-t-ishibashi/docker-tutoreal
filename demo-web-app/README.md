# demo-web-app

frontendのコンテナとbackendのコンテナで構成されるシンプルなWebアプリ例

# 実行方法

1. ディレクトリ移動する
```
cd demo-web-app
```

2. Dockerイメージのビルド

```
docker compose build
```

3. アプリの起動
```
docker compose up -d
```

4. ブラウザから `http://localhost:3000` にアクセスする。
画面に以下の内容が表示される。
```
Hello
{ "message": "hello" }
Hello2
{ "message": "helloworld" }
```

