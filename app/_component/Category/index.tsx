import styles from "./index.module.css";
import { CategoryType } from "@/app/_libs/microcms";

type Props = {
  category: CategoryType;
};

export default function Category({ category }: Props) {
  return (
    <>
      <span className={styles.tag}>{category.name}</span>
    </>
  );
}
