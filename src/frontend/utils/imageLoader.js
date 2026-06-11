// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

export default function imageLoader({ src, width, quality }) {
  // Use relative path starting with a single '/' so the browser resolves it relative to the current host/protocol/port automatically.
  // Strip leading slash if present to prevent double-slash (//) which is interpreted as protocol-relative by browsers.
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `/${cleanSrc}?w=${width}&q=${quality || 75}`;
}
