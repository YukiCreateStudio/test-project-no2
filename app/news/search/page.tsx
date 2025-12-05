// import NewsList from "@/app/_component/NewsList";
// import SearchField from "@/app/_component/SearchField";
// import { TOP_NEWS_LIST_LIMIT } from "@/app/_constans";
// import { getNewsList } from "@/app/_libs/microcms";

import NewsList from "@/app/_component/NewsList";
import Pagination from "@/app/_component/Pagination";
import SearchField from "@/app/_component/SearchField";
import { NEWS_LIST_LIMIT } from "@/app/_constans";
import { getNewsList } from "@/app/_libs/microcms";

// type Props = {
//   searchParams: {
//     q?: string;
//   };
// };

// export default async function Page({ searchParams }: Props) {
//   console.log(searchParams);
//   const { contents: news } = await getNewsList({
//     limit: TOP_NEWS_LIST_LIMIT,
//     q: searchParams.q,
//   });
//   console.log(news)
//   return (
//     <>
//       <SearchField />
//       <NewsList news={news} />
//     </>
//   );
// }

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function page({ searchParams }: Props) {
  console.log("searchParams.q:", searchParams.q);
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });
  return (
    <>
      <SearchField/>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
