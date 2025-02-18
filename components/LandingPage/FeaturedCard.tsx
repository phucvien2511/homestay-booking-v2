import Image, { StaticImageData } from 'next/image';

type FeaturedCardProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  rating?: number;
  price: number;
  discountPrice: number;
  isHot?: boolean;
};
const FeaturedCard = (props: FeaturedCardProps) => {
  const {
    title,
    description,
    image,
    rating = 5.0,
    price,
    discountPrice,
    isHot = false,
  } = props;
  return (
    <div className="flex-1 bg-[#201B43] rounded-lg text-white flex flex-col cursor-pointer hover:scale-[1.05] transition-[scale_300ms]">
      <Image src={image} alt={title} className="size-full rounded-t-lg" />
      <div className="p-6 flex flex-col gap-4">
        <div className="space-y-3">
          <div className="text-lg font-semibold flex items-center gap-3">
            {title}
            <div className="size-fit px-2 rounded-sm bg-[#02345E] text-sm text-center">
              ⛤ {rating.toFixed(1)}
            </div>
            {/* Create HOT chip */}
            {isHot && (
              <div className="size-fit px-2 rounded-sm bg-[#FF4500] text-sm text-center">
                HOT DEAL
              </div>
            )}
          </div>
          <div className="opacity-55">{description}</div>
        </div>
        <span className="text-2xl flex items-center gap-1">
          <span className="line-through text-lg text-white/40">${price}</span> →
          <span className="gradient-text">${discountPrice}</span>
          <span className="text-base text-white/40">/ night</span>
          <div className="ml-1 size-fit px-2 rounded-sm bg-[#87087C] text-sm font-semibold">
            -{100 - Math.floor((discountPrice / price) * 100)}% OFF
          </div>
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;
