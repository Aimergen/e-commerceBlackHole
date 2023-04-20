import { IProduct } from "@/interfaces/product";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  const [product, setProduct] = useState<IProduct | undefined>();
  const a = useRouter();
  console.log(a.query);
  const { _id } = a.query;
  console.log(_id);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/${_id}`)
      .then((res) => {
        setProduct(res.data);
        console.log("data", res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!product) return <h1>Product not found</h1>;

  return (
    <>
      <h1>{product.id}</h1>
      <Image
        src={product.imageSrc}
        alt={product.imageAlt}
        width={1000}
        height={100}
      />
    </>
  );
};

export default Index;