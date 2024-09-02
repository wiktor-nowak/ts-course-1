import { type FC, type PropsWithChildren } from "react";

type HeaderProps = { image: { src: string; alt: string } };
type HeaderPropsWithChildren = PropsWithChildren<HeaderProps>;

const Header: FC<HeaderPropsWithChildren> = ({ image, children }) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {/* The version above is shorter!!! */}
      {children}
    </header>
  );
};

export default Header;
