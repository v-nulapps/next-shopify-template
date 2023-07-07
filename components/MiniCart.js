import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "context/shopContext";

function MiniCart() {
  const { cart, cartOpen, setCartOpen, checkoutUrl } = useContext(CartContext);

  return (
    <div
      className={` ${
        cartOpen
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition duration-500 absolute tablet:right-4 right-0 tablet:h-auto h-[100vh] bottom-[-14px] bg-white tablet:w-96 w-full translate-y-full p-8 pt-12 rounded-[--radius]`}
    >
      <Image
        className="absolute right-3 top-3"
        src="/images/close.svg"
        alt="Close cart"
        width={20}
        height={20}
        data-cursor="pointer"
        onClick={() => setCartOpen(false)}
      />
      <div>
        {cart.length != 0 ? (
          <>
            <div className="max-h-[50vh] overflow-y-auto pr-4 h-auto">
              {cart.toReversed().map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex border-b-2 border-gray-200 py-4"
                    as={"image"}
                  >
                    <Image
                      src={item.image}
                      alt={item.altText}
                      width={70}
                      height={70}
                    />
                    <div>
                      <h4 className="text-sm mb-1">
                        {item.title} ({item.variantTitle})
                      </h4>
                      <p className="text-sm">
                        {item.variantPrice} {item.currencyCode} x{" "}
                        {item.variantQuantity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-4">
              <Link
                className="mt-4 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-300 w-1/2 inline-block text-center"
                href={checkoutUrl}
              >
                checkout
              </Link>
              <Link
                onClick={() => setCartOpen(false)}
                className="mt-4 py-3 link border-2 border-[--black] rounded-[--radius] hover:border-[--accent] hover:text-[--accent] transition duration-300 w-1/2 inline-block text-center"
                href="/cart"
              >
                view cart
              </Link>
            </div>
          </>
        ) : (
          <h5>No products in the cart :(</h5>
        )}
      </div>
    </div>
  );
}

export default MiniCart;
