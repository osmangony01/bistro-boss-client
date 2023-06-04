

const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 bg-slate-800 text-white px-3 py-1 rounded mr-4 mt-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 text-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;