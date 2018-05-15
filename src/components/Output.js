import * as React from 'react';

type Props = {
  value: string;
}

export default ({value}: Props) => (
    <div className="output">{value}</div>
);