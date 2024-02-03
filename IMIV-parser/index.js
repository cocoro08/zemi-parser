
const IMIVParser = require("imiv-parser");
const fs = require("fs");

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
