import FeaturedProductItems from "./FeaturedProductItems";
import TitleSection from "./TitleSection";

function FeaturedProductsSection() {
    return (
        <div className="pt-24">
            <TitleSection text="Featured Products" />
            <FeaturedProductItems />
        </div>
    );
}

export default FeaturedProductsSection;
