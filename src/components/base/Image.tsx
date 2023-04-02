interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const Image: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export default Image;