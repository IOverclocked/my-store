import Link from 'next/link'

const ProductsList = ({ products }) => {
  const base64ToFile = (formAttachment) => {
    if (formAttachment) {
      const byteCharacters = atob(formAttachment.contents)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: 'application/octet-stream' })
      const file = new File([blob], formAttachment.name)

      setValues({ ...values, attachment: [file] })
    } else {
      setValues({ ...values, attachment: null })
    }
  }
  return (
    <>
      {products.map((product) => {
        const { _id, name, price, description, mediaUrl } = product
        return (
          <div className="card" key={_id}>
            <div className="card-image">
              <img src={mediaUrl} />
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
              <h5>Price: {price}$</h5>
              <p>{description}</p>
            </div>
            <div className="card-action">
              <Link href={`/product/[_id]`} as={`/product/${_id}`}>
                <a>View product</a>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductsList
