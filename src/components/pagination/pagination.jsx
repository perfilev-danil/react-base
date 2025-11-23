import { getPagesArray } from "../utils/pages";
import MyButton from "../UI/button/MyButton";
export default function Pagination({ totalPages, page, changePage }) {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div style={{ marginTop: 30 }}>
      {pagesArray.map((p) => (
        <MyButton key={p} onClick={() => changePage(p)}>
          {p}
        </MyButton>
      ))}
    </div>
  );
}
