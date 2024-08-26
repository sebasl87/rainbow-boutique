export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const orderData = req.body;
    console.log("Received order data:", orderData);

    const products = orderData.products;

    for (const product of products) {
      try {
        const productId = product.id;

        const stockId = product.stockId; // tiene que ser el id del stock que se va a actualizar

        // Aquí asegúrate de tener la URL correcta para la API de Hygraph
        const response = await fetch(process.env.NEXT_PUBLIC_APOLLO_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_APOLLO_ENDPOINT_TOKEN}`,
          },
          body: JSON.stringify({
            query: `
            mutation {
              updateProduct(
                where: { id: "${productId}" }
                data: {
                  stock: {
                    update: {
                      where: { id: "${stockId}" },
                      data: { available: false }
                    }
                  }
                }
              ) {
                id
                stock {
                  id
                  available
                }
              }
            }
            `,
          }),
        });

        if (!response.ok) {
          const errorDetails = await response.text();
          console.error(`Error updating product ${productId}:`, errorDetails);
          return res
            .status(500)
            .json({ message: "Error updating product", details: errorDetails });
        }

        const result = await response.json();
        console.log("Product updated:", result.data.updateProduct);
      } catch (error) {
        console.error("Error in product loop:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    }

    return res.status(200).json({ message: "Stock updated successfully" });
  } catch (error) {
    console.error("Error in handler:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
