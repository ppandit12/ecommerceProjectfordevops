// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

import { useEffect, useState } from 'react';
import * as S from './Footer.styled';
import SessionGateway from '../../gateways/Session.gateway';
import { CypressFields } from '../../utils/Cypress';
import PlatformFlag from '../PlatformFlag';

const { userId } = SessionGateway.getSession();

const Footer = () => {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    setSessionId(userId);
  }, []);

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
