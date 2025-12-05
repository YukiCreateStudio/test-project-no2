import NewsList from "../_component/NewsList";
import Pagination from "../_component/Pagination";
import SearchField from "../_component/SearchField";
import { NEWS_LIST_LIMIT } from "../_constans";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
