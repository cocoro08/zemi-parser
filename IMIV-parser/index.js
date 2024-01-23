// const IMIVParser = require("imiv-parser");
// const fs = require("fs");

// const readfile =
//   "/Users/coeur08/Downloads/IMIV-parser/imiv-parser-master/test/testcases/restriction-eq-integer.json";
// // use.jsonファイルの読み込み
// fs.readFile(readfile, "utf8", (err, data) => {
//   if (err) {
//     console.error("ファイルの読み込みに失敗しました:", err);
//     return;
//   }

//   // データのパース
//   try {
//     const parsedData = IMIVParser.parse(data);
//     // 結果の表示
//     console.log(parsedData);
//   } catch (parseErr) {
//     console.error("データのパースに失敗しました:", parseErr);
//   }
// });

// // データのパース
// try {
//   const parsedData = IMIVParser.parse(textdata);
//   // 結果の表示
//   console.log(parsedData);
// } catch (parseErr) {
//   console.error("データのパースに失敗しました:", parseErr);
// }
// const jsondata = {
//   type: "class",
//   prefix: "ex",
//   name: "Person",
//   deprecated: true,
// };

// const textdata = JSON.stringify(jsondata);

// const IMIVParser = require("imiv-parser");
// const fs = require("fs");

// // JSONデータを定義
// const jsondata = //
//   type: "class",
//   prefix: "ex",
//   name: "Person",
//   deprecated: true,;

// // JSONデータを文字列に変換
// const textdata = JSON.stringify(jsondata);

// // データのパース
// try {
//   const parsedData = IMIVParser.parse(textdata);
//   // 結果の表示
//   console.log(parsedData);
// } catch (parseErr) {
//   console.error("データのパースに失敗しました:", parseErr);
// }
//chatGPT修正

// const IMIVParser = require("imiv-parser");
// const fs = require("fs");

// // JSONデータを定義
// const jsondata = {
//   type: "class",
//   prefix: "ex",
//   name: "Person",
//   deprecated: true
// };

// // JSONデータを文字列に変換
// const textdata = JSON.stringify(jsondata);

// // データのパース
// try {
//   const parsedData = IMIVParser.parse(textdata);
//   // 結果の表示
//   console.log(parsedData);
// } catch (parseErr) {
//   console.error("データのパースに失敗しました:", parseErr);
// }

// const IMIVParser = require('imiv-parser');
// const fs = require('fs');

// // IMIV形式のサンプルデータ
// const imivData = `
//   class ex:Person {
//     property ex:name {
//       datatype xsd:string;
//     };
//     property ex:age {
//       datatype xsd:integer;
//     };
//   };
// `;

// # "人の情報を表現するためのクラス用語"
// #name@en "Person"
// #description@en "A class term to express information of a person."
// class ic:人型 {@ic:実体型} ;
// // データの解析
// try {
//   const parsedData = IMIVParser.parse(imivData);

//   // 結果をJSONファイルに書き出す
//   fs.writeFile('parsedData.json', JSON.stringify(parsedData, null, 2), (err) => {
//     if (err) {
//       console.error('ファイルの書き込みに失敗しました:', err);
//     } else {
//       console.log('結果がparsedData.jsonに保存されました。');
//     }
//   });
// } catch (parseErr) {
//   console.error('データのパースに失敗しました:', parseErr);
// }

const IMIVParser = require("imiv-parser");
const fs = require("fs");

// IMIV形式のサンプルテキストデータ
// const imivData = `
//   # "人の情報を表現するためのクラス用語"
//   #name@en "Person"
//   #description@en "A class term to express information of a person."
//   class ic:人型 {@ic:実体型} ;
// `;
// IMIV形式のサンプルテキストデータ

// const sampledata = "

const imivText = `
# "動物の情報を表現するためのクラス用語"
#name@en "Animal"
#description@en "A class term to express information of an animal."
class ic:動物型 {@ic:生物型} ;
`;

// データの解析
try {
  const parsedData = IMIVParser.parse(imivText);

  // 解析結果をコンソールに表示
  console.log(parsedData);

  // 結果をJSONファイルに書き出す（オプション）
  fs.writeFile(
    "parsedData.json",
    JSON.stringify(parsedData, null, 2),
    (err) => {
      if (err) {
        console.error("ファイルの書き込みに失敗しました:", err);
      } else {
        console.log("結果がparsedData.jsonに保存されました。");
      }
    }
  );
} catch (parseErr) {
  console.error("データのパースに失敗しました:", parseErr);
}
