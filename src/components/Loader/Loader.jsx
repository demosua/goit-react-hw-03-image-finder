import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <InfinitySpin
      height="80"
      width="80"
      radius="10"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  )
};
  
export default Loader;