import { error } from "console";
import { createClient } from "microcms-js-sdk";
import {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSQueries,
} from "microcms-js-sdk";

//type設定//
export type Category = {
  name: string;
} & MicroCMSListContent;

export type News = {
  title: string;
  description: string;
  content: string;
  category: Category;
  thumbnail: MicroCMSImage;
} & MicroCMSListContent;

export type CategoryType = {
  name: string;
};
export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

//microCMSとのAPI通信設定//
if (!process.env.MICROCMS_DOMAIN) {
  throw new Error("MICROCMS_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}
const client = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

//メンバーデータ取得//
export const getMembersList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Member>({
    endpoint: "members",
    queries,
  });
  return listData;
};

//News一覧データ取得//
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = client.getList<News>({
    endpoint: "news",
    queries,
  });
  return listData;
};

//News詳細データ取得//
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const listData = client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
  return listData;
};
