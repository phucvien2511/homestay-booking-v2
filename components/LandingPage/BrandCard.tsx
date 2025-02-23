import { memo } from 'react';

const BrandCard = () => {
  const generateRandomString = (length: number) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };
  const generateRandomNumber = () => {
    // From 5 to 10
    return Math.floor(Math.random() * 6) + 5;
  };
  return (
    <div className="rounded-md border border-[#D5D5D5] text-xl font-semibold p-4">
      {generateRandomString(generateRandomNumber())}
    </div>
  );
};

export default memo(BrandCard);
