# zemi-parser
ゼミの作業ファイル

imiv形式で書いたテキストファイルは、imiv-parser< クラス形式ファイルの中に保存してください。


[imiv形式の書き方さんこうURL]
https://imi.go.jp/ns/core/242/imicore242.imiv



#name "人型"
# "人の情報を表現するためのクラス用語"
#name@en "Person"
#description@en "A class term to express information of a person."
class ic:人型 {@ic:実体型} ;


#name "氏名"
# "氏名を記述するためのプロパティ用語"
#description@en "A name of the person."
set ic:人型>ic:氏名 {0..n} ;
