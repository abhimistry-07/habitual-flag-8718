import { useEffect } from "react";

export default function SingleCoursePage({ id }) {
  const getData = async () => {
    const res = await fetch(`http://localhost:8080/courses?id=${id}`);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>hi</div>;
}
