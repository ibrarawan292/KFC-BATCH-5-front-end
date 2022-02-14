import { useParams } from "react-router-dom";
import{ products} from "../data/products";
import Card from "../components/Card";

const Products = () => {
    const { category } = useParams();

    const prods = products.filter(product => product.category === category)

    return (
        <div>
         <h2 style={{textAlign: 'center', texttransform:'uppercase', marginTop:'24PX', marginBottom:'24px'}}> {category.replace(/[^a-zA-Z0-9]/g,' ')} </h2>
       
         <div className="row">
         {
             prods.map(p => <Card data={p}/>)
         }
            
         </div>


        </div>
    )
}

export default Products