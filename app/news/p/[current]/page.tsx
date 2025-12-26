import NewsList from "@/app/_component/NewsList";
import Pagination from "@/app/_component/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

export const runtime = "edge";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  console.log(params.current);
  const current = parseInt(params.current, 10);
  if (current < 1 || Number.isNaN(current)) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}
