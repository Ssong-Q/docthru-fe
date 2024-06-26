import '@/styles/tailwind.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';

interface Props {
  destination?: string;
  image: StaticImageData;
  direction: 'left' | 'right';
  style: string;
  type?: 'button' | 'reset' | 'submit';
  isLink: boolean;
  width: number;
  height: number;
  onClick?: () => void;
}

// destination: 사용할 때 props에 이동할 Route를 string 형태로 넣어주세요.
// style: tailwindCSS를 넣어주세요.
const IncludingImgButton = memo(
  ({
    destination,
    image,
    direction,
    style,
    children,
    type,
    isLink,
    width,
    height,
    onClick,
  }: PropsWithChildren<Props>) => {
    return (
      <>
        {isLink ? (
          direction === 'left' ? (
            <Link href={`${destination}`} className="flex items-center gap-5">
              <button className={`${style}`} type={type} onClick={onClick}>
                <Image src={image} alt="이미지 아이콘" width={width} height={height} />
                {children}
              </button>
            </Link>
          ) : (
            <Link href={`${destination}`}>
              <button className={`${style}`} type={type} onClick={onClick}>
                {children}
                <Image src={image} alt="이미지 아이콘" width={width} height={height} />
              </button>
            </Link>
          )
        ) : direction === 'left' ? (
          <button className={`${style}`} type={type} onClick={onClick}>
            <Image src={image} alt="이미지 아이콘" width={width} height={height} />
            {children}
          </button>
        ) : (
          <button className={`${style}`} type={type} onClick={onClick}>
            {children}
            <Image src={image} alt="이미지 아이콘" width={width} height={height} />
          </button>
        )}
      </>
    );
  }
);

export default IncludingImgButton;
