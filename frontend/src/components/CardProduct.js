import React from "react";
import {
  Box,
  SimpleGrid,
  useColorMode,
  Image,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useToast,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

export const CardProduct = observer(({ data }) => {
  const { colorMode } = useColorMode();
  const { productStore } = useStore();
  const [isOpen, setIsOpen] = React.useState();
  const [selectedId, setSelectedId] = React.useState("");
  const onClose = () => setIsOpen(false);
  const selectId = (id) => {
    setIsOpen(true);
    setSelectedId(id);
  };
  const cancelRef = React.useRef();
  const toast = useToast();

  const deleteProduct = async (id) => {
    await productStore.removeProduct(id);

    if (productStore.error) {
      console.log(productStore.error);
    }

    toast({
      title: "Success",
      description: "Product successfully deleted.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
  };

  return (
    <SimpleGrid columns={[2, null, 2, null, 6]} spacing={8}>
      {data.map((value) => (
        <Box
          key={value.id}
          bg={colorMode === "light" ? "white" : "gray.600"}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          overflow="hidden"
          shadow="md"
        >
          <Image
            src={
              value.image
                ? `${process.env.REACT_APP_IMAGE_URL}/${value.image}`
                : "https://cynthiarenee.com/wp-content/uploads/2018/11/placeholder-product-image-300x300.png"
            }
            alt={value.prodName}
            objectFit="cover"
          />
          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {value.prodName}
            </Box>
            <Box>
              Rp{value.price}
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>
            <Box mt={3} spacing={10}>
              <Link to={`/product/${value.id}`}>
                <Button variantColor="blue" width="full" type="button">
                  Edit
                </Button>
              </Link>
              <Button
                variantColor="red"
                width="full"
                variant="outline"
                mt="3"
                onClick={() => selectId(value.id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Product
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variantColor="red"
              onClick={() => deleteProduct(selectedId)}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SimpleGrid>
  );
});
