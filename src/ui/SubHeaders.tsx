interface SubHeadersProps {
  text: string;
}

const SubHeaders = ({ text }: SubHeadersProps) => {
  <p className="mb-4 font-bold text-2xl">{text}</p>;
  return;
};

export default SubHeaders;
