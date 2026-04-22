interface TitleProps {
  text: string;
}
const Title = ({ text }: TitleProps) => {
  return (
    <p className="mb-4 text-2xl text-center font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      {text}
    </p>
  );
};

export default Title;
