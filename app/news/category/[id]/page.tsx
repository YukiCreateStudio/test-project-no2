import Category from "@/app/_component/Category";
import NewsList from "@/app/_component/NewsList";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);
  const data = await getNewsList({
    filters: `category[equals]${category.id}`,
  }).catch(notFound);
  // console.log(category)
  return (
    <>
      <Category category={category}/>の一覧
      <NewsList news={data.contents} />
    </>
  );
}
