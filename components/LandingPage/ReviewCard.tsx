const ReviewCard = () => {
  return (
    <div className="p-6 bg-[#201B43] rounded-lg text-white flex flex-col gap-4 w-[450px] h-[200px] mx-2">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="size-12 rounded-full bg-white" />
        <div className="flex flex-col gap-1">
          <div className="font-semibold">Cristiano Ronaldo</div>
          <div className="text-white/40 text-sm">@cr7siuuu</div>
        </div>
      </div>
      <div>SDSC Homestay iz da best.</div>
    </div>
  );
};

export default ReviewCard;
