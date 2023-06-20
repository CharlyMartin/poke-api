import { useParams } from "react-router-dom";

export default function ViewPage() {
  const { id } = useParams();

  return <h1>View Pokemon {id}</h1>;
}
