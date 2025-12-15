import './productDetails.css'
import { useParams } from "react-router-dom";
import products from "../data/product";
function ProductDetails() {
  const {id}=useParams();
  const product = products.find((p) => p.id === Number(id));
  return (
    <ul className="card1">
          <li key={product.id} className="cardList1">
                <img src={product.image}/>
                <h3>{product.name}</h3>
                <h4>{product.shortDescription}</h4>
                <h5>{product.deliveryDay}<s>${product.actualRate}</s> <strong>${product.offerRate}</strong> offer:{product.discountPercentage}%</h5>
                <h4>{product.detailedDescription}</h4>
                <h5>Delivert with in {product.deliveryDay}</h5>
          </li>  
        </ul>  
  );
}

export default ProductDetails