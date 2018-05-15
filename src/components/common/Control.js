import * as React from 'react';

type Props = {
  value: string | number;
  onClick: Function;
}

export default (props: Props) => (
  <div className="control" onClick={() => props.onClick(props.value)}>{props.value}</div>
);