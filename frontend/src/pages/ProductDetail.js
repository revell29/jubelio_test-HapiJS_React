import React, { useEffect } from "react";
import {
  Stack,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Image,
  useToast,
  SimpleGrid,
} from "@chakra-ui/core";
import { MainLayout } from "../components/MainLayout";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { Link } from "react-router-dom";

const ProductDetail = observer((props) => {
  const id = props.match.params.id;
  const { productStore } = useStore();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    await productStore
      .updateProduct(form, id)
      .then((res) => {
        toast({
          title: "Success",
          description: res.message,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(() => {
        console.log(productStore.error);
      });
  };

  useEffect(() => {
    const init = async () => {
      await productStore.fetchById(id);
    };

    init();
  }, [id, productStore]);
  return (
    <MainLayout>
      <Stack>
        <SimpleGrid columns={[1, null, 2]}>
          <Stack
            mx="auto"
            height="full"
            justify="center"
            alignItem="center"
            spacing={10}
          >
            <Image
              src="https://cynthiarenee.com/wp-content/uploads/2018/11/placeholder-product-image-300x300.png"
              alt="Segun Adebayo"
              display="block"
              align="center"
            />
          </Stack>
          <Box>
            <form onSubmit={(e) => handleSubmit(e)}>
              <FormControl mb={4} isRequired>
                <FormLabel htmlFor="sku">SKU</FormLabel>
                <Input
                  type="text"
                  id="sku"
                  name="sku"
                  aria-describedby="sku-helper-text"
                  value={productStore.detail["sku"]}
                  onChange={(e) =>
                    productStore.setFormData(e.target.name, e.target.value)
                  }
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel htmlFor="prodName">Product Name</FormLabel>
                <Input
                  type="text"
                  id="prodName"
                  name="prodName"
                  aria-describedby="prodName-helper-text"
                  value={productStore.detail["prodName"]}
                  onChange={(e) =>
                    productStore.setFormData(e.target.name, e.target.value)
                  }
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel htmlFor="prodName">Image</FormLabel>
                <Input
                  type="file"
                  id="image"
                  name="files"
                  aria-describedby="image-helper-text"
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel htmlFor="prodName">Price</FormLabel>
                <Input
                  type="text"
                  id="price"
                  name="price"
                  aria-describedby="price-helper-text"
                  value={productStore.detail["price"]}
                  onChange={(e) =>
                    productStore.setFormData(e.target.name, e.target.value)
                  }
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel htmlFor="stock">Stock</FormLabel>
                <Input
                  type="number"
                  id="stock"
                  name="stock"
                  aria-describedby="stock-helper-text"
                  value={productStore.detail["stock"]}
                  onChange={(e) =>
                    productStore.setFormData(e.target.name, e.target.value)
                  }
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel htmlFor="stock">Description</FormLabel>
                <Textarea
                  id="stock"
                  name="description"
                  aria-describedby="stock-helper-text"
                  value={productStore.detail["description"]}
                  onChange={(e) =>
                    productStore.setFormData(e.target.name, e.target.value)
                  }
                />
              </FormControl>
              <Button type="submit" variantColor="blue">
                Submit
              </Button>
              <Link to="/">
                <Button variantColor="red" variant="outline" ml="2">
                  Back
                </Button>
              </Link>
            </form>
          </Box>
        </SimpleGrid>
      </Stack>
    </MainLayout>
  );
});
export default ProductDetail;
