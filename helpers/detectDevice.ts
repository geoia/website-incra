import UAParser from 'ua-parser-js';

const detectDevice = () => {
  const parser = new UAParser();
  const result = parser.getResult();
  const isMobile = result.device.type === 'mobile' || result.device.type === 'tablet';
  console.log('Device detected:', result.device.type); 
  return isMobile;
};

export default detectDevice;
