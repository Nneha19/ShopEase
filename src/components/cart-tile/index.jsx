import { useDispatch} from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";


export default function CardTile({cartItem}){
   
    const dispatch=useDispatch();

    function handleRemovefromCart(){
        dispatch(removeFromCart(cartItem.id))
    }

   
    return (
    <>
  <div className="flex flex-col md:flex-row items-center p-5 justify-between mt-2 mb-2 rounded-xl">
    <div className="md:flex p-3">
        <img src={cartItem?.image} className="h-28 rounded-lg mb-3 md:mb-0 md:mr-5" alt={cartItem?.title} />
        <div className="self-start space-y-2 ">
            <h1 className="text-xl text-black font-bold">{cartItem?.title}</h1>
            <p className="text-black font-extrabold">{cartItem?.price}</p>
        </div>
    </div>
    <div>
        <button
            onClick={handleRemovefromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-3 md:p-4"
        >
            Remove from Cart
        </button>
    </div>
</div>

    </>)
}