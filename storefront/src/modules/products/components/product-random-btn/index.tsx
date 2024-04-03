"use client"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { addToCart } from "@modules/cart/actions"
import { useParams } from "next/navigation"

type IProductRandomBtnProps = {
  fullProducts: {
    product: PricedProduct
  }[]
}

export default async function ProductRandomBtn({
  fullProducts,
}: IProductRandomBtnProps) {
  let countryCode = useParams().countryCode as string

  const handleAddToCart = async () => {
    const randomProduct =
      fullProducts[Math.floor(Math.random() * fullProducts.length)]
    let randomVariant =
      randomProduct.product.variants[
        Math.floor(Math.random() * randomProduct.product.variants.length)
      ]
    if (!randomVariant?.id) return null

    await addToCart({
      variantId: randomVariant.id,
      quantity: 1,
      countryCode,
    })
  }

  return (
    <button
      onClick={handleAddToCart}
      className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    >
      Choose random
    </button>
  )
}
