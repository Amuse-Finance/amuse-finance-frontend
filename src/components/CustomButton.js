function CustomButton({ styles, children, ...others }) {
  return (
    <button className={styles} {...others}>
      {children}
    </button>
  );
}

export default CustomButton;
