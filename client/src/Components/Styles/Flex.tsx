import styled, { css } from 'styled-components/macro';
import React from "react";

export type IGaps = 'none' | 'small' | 'medium' | 'large' | 'xlarge' | 'huge';

interface FlexProps {
    direction?: React.CSSProperties['flexDirection'];
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
    nowrap?: boolean;
    gap?: IGaps;
}

export const Flex = styled.div<FlexProps>(
    ({ gap = 'none', direction, justify, align, nowrap }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${nowrap ? 'no-wrap' : 'wrap'};
    & > *:not(:last-child) {
      ${direction === 'column'
        ? css`
            margin-bottom: ${p => p.theme.space[gap]}px;
          `
        : css`
            margin-right: ${p => p.theme.space[gap]}px;
          `}
    }
  `
);

export default Flex;