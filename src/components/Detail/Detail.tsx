import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log("id :", id);
  return <div className="Detail">Page en cours de construction</div>;
}

export default Detail;
