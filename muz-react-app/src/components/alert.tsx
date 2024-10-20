interface Props {
  onClose: () => void;
}
const Alert = ({ onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable">
      Alert
      <button
        type="button"
        className="btn-close "
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
