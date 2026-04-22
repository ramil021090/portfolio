interface SubTitleProps {
  text: string;
}
const SubTitle = ({ text }: SubTitleProps) => {
  return <p className="py-8 mt-2 text-xl">{text}</p>;
};

export default SubTitle;
