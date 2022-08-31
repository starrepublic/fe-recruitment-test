type Props = {
  label: string;
};

const Checkbox = ({ label }: Props) => {
  return (
    <div>
      <input type="checkbox" />
      {label}
    </div>
  );
};

export default Checkbox;
