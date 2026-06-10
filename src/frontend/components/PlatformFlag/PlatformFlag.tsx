// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import * as S from './PlatformFlag.styled';

const { NEXT_PUBLIC_PLATFORM = 'local' } = typeof window !== 'undefined' ? window.ENV : {};

const platform = NEXT_PUBLIC_PLATFORM && NEXT_PUBLIC_PLATFORM !== 'undefined' ? NEXT_PUBLIC_PLATFORM : 'pawan';

const PlatformFlag = () => {
  return (
    <S.Block>{platform}</S.Block>
  );
};

export default PlatformFlag;
