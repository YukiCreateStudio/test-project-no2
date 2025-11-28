/** Day.js 関連の import */
import dayjs from "dayjs";
import ja from "dayjs/locale/ja";

/** NOTE: location(Japan)を設定する */
dayjs.locale(ja);

export const formatDate = (date: string) => {
  return dayjs(date).format("YYYY年MM月DD日 HH時mm分");
};
console.log("formattedDate", formatDate);
// 日付文字列
