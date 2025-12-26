import Category from "@/app/_component/Category";
import NewsList from "@/app/_component/NewsList";
import Pagination from "@/app/_component/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

export const runtime = 'edge';

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const category = await getCategoryDetail(params.id);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  console.log("params:", params);
  console.log("params.id:", params.id);
  console.log("current:", current);
  console.log("category:", category);

  return (
    <>
      <p>
        <Category category={category} />
        の一覧
      </p>

      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} basePath={`/news/category/${category.id}`}/>
    </>
  );
}
