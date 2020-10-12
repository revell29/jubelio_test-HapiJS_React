import React from "react";
import { MainLayout } from "../components/MainLayout";
import { useStore } from "../store";
import { observer } from "mobx-react-lite";
import { CardProduct } from "../components/CardProduct";

const Home = observer(() => {
  const { productStore } = useStore();
  return (
    <MainLayout my="2rem">
      <CardProduct data={productStore.data} />
    </MainLayout>
  );
});

export default Home;
