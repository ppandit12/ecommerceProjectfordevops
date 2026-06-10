// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import * as S from './Footer.styled';
import PlatformFlag from '../PlatformFlag';

const Footer = () => {
  return (
    <S.Footer>
      <p>
        <a href="https://www.kuamar.shop/">kumar shop</a>
      </p>
      <PlatformFlag />
    </S.Footer>
  );
};

export default Footer;
