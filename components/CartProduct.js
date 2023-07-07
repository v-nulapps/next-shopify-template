import Image from "next/image";

function CartProduct({ item }) {
  const properties = Object.keys(item.options);

  return (
    <div className="CartProduct my-8 ">
      <div className="flex py-8 border-2 border-black rounded-[--radius]">
        <div className="relative h-auto w-72 ">
          <Image
            src={item.image}
            alt={item.altText}
            fill
            className="object-contain"
            priority
            sizes="33vw"
          />
        </div>
        <div>
          <h3 className="mb-4">{item.title}</h3>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-8">
            {properties &&
              properties.map((property) => {
                const value = item.options[property];
                return (
                  <div key={property} className="my-2">
                    <h6>{property}</h6>
                    <p>{value}</p>
                  </div>
                );
              })}

            <div className="my-2">
              <h6>Quantity</h6>
              <p>
                {item.variantQuantity} x {item.variantPrice} {item.currencyCode}
              </p>
            </div>
            <div className="my-2">
              <h6>Price</h6>
              <p>
                {item.variantPrice * item.variantQuantity}.0 {item.currencyCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
