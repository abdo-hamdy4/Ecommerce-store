import { Link } from "react-router-dom";
import "./CategoryItem.css"; 

const CategoryItem = ({category}) => {
	return (
		<div className="category-item-container">
			<Link to={"/category" + category.href}>
				<div className="category-item-content">
					<div className="category-item-overlay" />
					<img
						src={category.imageUrl}
						alt={category.name}
						className="category-item-image"
						loading="lazy"
					/>
					<div className="category-item-text">
						<h3 className="category-item-title">{category.name}</h3>
						<p className="category-item-description">Explore {category.name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
