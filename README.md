# imiv-parser

ここにあるファイルをすべてダウンロードしてください

macOS14.1とubuntu22.04では動作確認済み

# imiv-parser-masterに移動

# 実行するためにnodeバージョン

最新版を使用


## npm

```
npm install imiv-parser
```

## 実行するTXTファイルの作成
imivparserを利用するにはIMIV形式に沿ったテキストファイルを作成してくだい
```
touch index.txt
```
例
```
#name "競馬"
#"競馬を表す単語"
class ic:競馬型;

#name "重賞"
#"レースを表す単語"
set ic:競馬型>ic:重賞型;

#name "レース名"
#"レース名を表す単語"
set ic:競馬型>ic:レース名型;
```



## 実行するためのJSファイルの作成


```
touch index.js
```

作成したindex.jsに下記コードをコピペしてください
```
const fs = require('fs');
const IMIVParser = require('imiv-parser');

// RDF Schemaのテキストファイルのパス
const filePath = 'aaa';  // ファイルの実際のパスに置き換えてください

// ファイルを読み込んでIMIVパーサーに渡す
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // IMIVパーサーを実行して結果を表示
    const result = IMIVParser.parse(data);
    console.log(JSON.stringify(result, null, 2));
    
    const resultFilePath = 'parsedResult.json';
    fs.writeFileSync(resultFilePath, JSON.stringify(result, null, 2));


});
```

## 実行結果を保存するためのJSONファイルを作成

```
touch parsedResult.json
```

## 実行

```
node index.js
```

実行するとターミナルとparsedResult.jsonに結果が表示されます





