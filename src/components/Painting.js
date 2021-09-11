import React from "react"
import PropTypes from "prop-types"

const Painting = ({ url, title, price, profileUrl, tag, quantity }) => {
  return (
    <div>
      <img src={url} alt={title} width='480' />
      <h2>{title}</h2>

      <p>
        Автор: <a href={profileUrl}>{tag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? "Заканчивается" : "Есть в наличии"}</p>
      <button type='button'>Добавить в корзину</button>
    </div>
  )
}
Painting.defaultProps = { title: "Unknown author" }

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  price: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default Painting
