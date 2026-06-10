import { useEffect, useState } from 'react';
import * as S from './PlatformFlag.styled';

const PlatformFlag = () => {
  const [platform, setPlatform] = useState('pawan');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ENV) {
      const val = window.ENV.NEXT_PUBLIC_PLATFORM;
      if (val && val !== 'undefined') {
        setPlatform(val);
      }
    }
  }, []);

  return (
    <S.Block>{platform}</S.Block>
  );
};

export default PlatformFlag;
