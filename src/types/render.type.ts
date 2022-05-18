import React from 'react';

export type MaybeRenderElementProp<P> = React.ReactElement | ((props: P) => React.ReactElement);
