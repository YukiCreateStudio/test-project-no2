import NewsList from "../_component/NewsList";
import { NEWS_LIST_LIMIT } from "../_constans";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return <NewsList news={data.contents} />;
}
