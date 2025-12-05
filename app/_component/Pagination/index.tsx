import { NEWS_LIST_LIMIT } from "@/app/_constans";
import Link from "next/link";
import styles from "./index.module.css";
import classNames from "classnames";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({ totalCount, current = 1,basePath="/news"}: Props) {
  // console.log(totalCount);
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  // console.log(pages);
  return (
    <>
      <nav>
        <ul className={styles.container}>
          {pages.map((p) => (
            <li key={p} className={styles.list}>
              {p === current ? (
                <span className={styles.item}>{p}</span>
              ) : (
                <Link
                  href={`${basePath}/p/${p}`}
                  className={classNames(styles.item, styles.current)}
                >
                  {p}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
