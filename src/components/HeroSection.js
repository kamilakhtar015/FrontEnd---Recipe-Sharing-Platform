import CustomImage from './CustomImage';
export default function HeroSection() {
    const images = [
        "/images/img_1.jpg",
        "/images/img_2.jpg",
        "/images/img_3.jpg",
        "/images/img_4.jpg",
        "/images/img_5.jpg",
        "/images/img_6.jpg",
        "/images/img_7.jpg",
        "/images/img_8.jpg",
        "/images/img_9.jpg",
    ];

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">RecipeSharing is a place where you can please your soul
                    and tummy with delicious food recipes of all cuisines, and our service is absolutely
                    free. So start exploring now</p>
                <button className="btn">Explore now</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={""} />
                ))}
            </div>
        </div>
    );
}
