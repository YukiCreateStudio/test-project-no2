import Article from "@/app/_component/Article";
import { getNewsDetail } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    draftKey?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.draftKey,
  }).catch(notFound);
  return <Article data={data} />;
}
