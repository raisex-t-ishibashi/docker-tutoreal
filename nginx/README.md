# nginx

index.htmlをnginxのデフォルトページに設定する例

# 実行手順

1. ディレクトリ移動
```
cd nginx
```

2. Dockerイメージのビルド

```
docker compose build
```

3. アプリの起動
```
docker compose up -d
```

4. ブラウザから `http://localhost` にアクセスする。

画面に以下が表示される。
```
Welcome to my Nginx Server!
```