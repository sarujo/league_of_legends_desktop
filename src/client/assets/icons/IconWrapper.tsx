import React, { SVGAttributes } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '@material-ui/core';

import { Colors } from '../../constants';

export type IconSize =
  | 'small'
  | 'base'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'xxl'
  | 'huge'
  | 'massive';

export interface IconProps extends SVGAttributes<HTMLOrSVGElement> {
  size?: IconSize;
  color?: Colors;
  backgroundColor?: Colors;
  hoverColor?: Colors;
  rotate?: Rotate;
  className?: string; // needed to make styled-components work
  viewBox?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

type Rotate = 90 | 180 | 270;

export function IconWrapper(props: IconProps) {
  const theme = useTheme<any>();

  const {
    size = 'base',
    color = theme.palette.primary.dark,
    className,
    viewBox,
    ariaLabel,
    rotate,
    children,
    ...rest
  } = props;

  return (
    <Icon
      size={size}
      color={color}
      rotate={rotate}
      className={className}
      viewBox={viewBox}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </Icon>
  );
}

const getRotation = (rotate: Rotate) =>
  css`
    transform: rotate(${rotate}deg);
  `;

const sizeInRem: { [key in IconSize]: number } = {
  small: 0.75,
  base: 1,
  medium: 1.25,
  large: 1.5,
  extraLarge: 3,
  xxl: 4.5,
  huge: 9,
  massive: 15,
};

const Icon = styled.svg`
  display: inline-block;
  transform-origin: center;
  vertical-align: middle;
  fill: ${(p) => p.color};
  background: ${(p) => p.backgroundColor};
  &:hover {
    fill: ${(p) => p.hoverColor};
  }

  ${(p) => css`
    min-width: ${sizeInRem[p.size || 'small']}rem;
    max-width: ${sizeInRem[p.size || 'small']}rem;
    min-height: ${sizeInRem[p.size || 'small']}rem;
    max-height: ${sizeInRem[p.size || 'small']}rem;
  `}
  z-index: 2;

  ${({ rotate }: Partial<IconProps>) => rotate && getRotation(rotate)};
`;
