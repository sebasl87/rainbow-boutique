import { useEffect, useState } from "react";
import { BreadcrumbRainbow, CartEmpty } from "../../molecules";
import { Box } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { productsInCart } from "../../../jotai/atoms";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Step1, Step2, Step3 } from "@/components/organisms";
import { useRouter } from "next/router";

export const Checkout = () => {
  const productsCart = useAtomValue(productsInCart);
  const [step1Complete, setStep1Complete] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    console.log(productsCart.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStep1Complete = () => {
    setStep1Complete(true);
    setTabIndex(1);
  };

  const handleStep2Complete = () => {
    setStep2Complete(true);
    setTabIndex(2);
  };

  const router = useRouter();

  return (
    <Box
      px={4}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <BreadcrumbRainbow isCheckout />
      {productsCart.length === 0 ? (
        <CartEmpty />
      ) : (
        <Box
          display="flex"
          width="100%"
          mt={8}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box display="flex" width="100%" order={{ base: 2, md: 1 }}>
            <Tabs
              width="100%"
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
            >
              <TabList display="flex" width="100%">
                <Tab
                  _selected={{
                    color: "#797B7A",
                    borderBottom: "2px solid",
                    borderColor: "#EBBEB3",
                    fontWeight: 700,
                  }}
                  fontFamily="Nunito"
                  color="#797B7A"
                  fontWeight={500}
                  flexGrow={1}
                  isDisabled={tabIndex !== 0}
                >
                  1. Envío
                </Tab>
                <Tab
                  _selected={{
                    color: "#797B7A",
                    borderBottom: "2px solid",
                    borderColor: "#EBBEB3",
                    fontWeight: 700,
                  }}
                  fontFamily="Nunito"
                  color="#797B7A"
                  fontWeight={500}
                  flexGrow={1}
                  isDisabled={tabIndex !== 1}
                >
                  2. Pago
                </Tab>
                <Tab
                  _selected={{
                    color: "#797B7A",
                    borderBottom: "2px solid",
                    borderColor: "#EBBEB3",
                    fontWeight: 700,
                  }}
                  fontFamily="Nunito"
                  color="#797B7A"
                  fontWeight={500}
                  flexGrow={1}
                  isDisabled={tabIndex !== 2}
                >
                  3. Revisión
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Step1 onComplete={handleStep1Complete} />
                </TabPanel>
                <TabPanel>
                  <Step2
                    onComplete={handleStep2Complete}
                    handleClickBack={() => setTabIndex(0)}
                  />
                </TabPanel>
                <TabPanel>
                  <Step3
                    onComplete={() => router.push("/checkout-success")}
                    handleClickBack={() => setTabIndex(1)}
                    goStepOne={() => setTabIndex(0)}
                    goStepTwo={() => setTabIndex(1)}
                  />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box
            width="300px"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            ml={4}
            order={{ base: 1, md: 2 }}
          >
            <Box
              background="#EEF5F4"
              fontFamily="Nunito"
              fontWeight={700}
              width="100%"
              display="flex"
              color="#797B7A"
              height="42px"
              justifyContent="center"
              alignItems="center"
              borderTopRadius={8}
            >
              Carrito
            </Box>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              background="#FBFBFB"
              height="100%"
            >
              lalal
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Checkout;
