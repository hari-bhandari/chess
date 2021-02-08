import React from 'react';
import styled, { css } from 'styled-components/macro';
import Flex from "../../../Components/Styles/Flex";
import colorVariants, {VariantTypes} from "../../../Components/Styles/ColorVarients";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface StyledButtonProps {
    variant?: VariantTypes;
    size?: 'small' | 'medium';
    width?: string;
}

interface ButtonProps extends StyledButtonProps {
    icon?: any;
    isLoading?: boolean;
    [x: string]: any;
}

const button_sizes: any = {
    small: css`
      padding: 8px 10px;
      font-size: 12px;
    `,
    medium: css`
      padding: 10px 15px;
      font-size: 12px;
    `
};

type IStyledButton = StyledButtonProps & React.HTMLAttributes<HTMLDivElement>;

const StyledButton = styled.button<IStyledButton>`
  width: ${p => p.width};
  height: fit-content;
  margin: 10px 0;
  padding: 10px 15px;
  border: none;
  border-radius: 50px;
  line-height: 1;
  font-size: 14px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
  &:disabled {
    opacity: 0.8;
  }
  ${p => (p.theme.variants as any)[p.variant as string]}
  ${p => button_sizes[p.size as string]};
  @media screen and (${p => p.theme.media.mobile}) {
    padding: 10px 25px;
  }
`;

export const Button: React.FC<ButtonProps> = ({variant = 'primary', size, width, icon, children, type, isLoading, ...props}) => (
    <StyledButton
        {...props}
        variant={variant}
        size={size}
        disabled={isLoading}
        width={width}
    >
        {icon && (
            <FontAwesomeIcon
                data-testid="icon"
                spin={isLoading}
                icon={isLoading ? 'spinner' : icon}
            />
        )}
        {children}
    </StyledButton>
);

const ButtonGroupFloat: any = {
    left: `margin-right: auto;`,
    right: `margin-left: auto;`
};
export const ButtonGroup = styled(Flex)<{ float?: string }>`
  width: fit-content;
  ${p => ButtonGroupFloat[p.float || 'right']}
`;

export const HomeWrapper = styled.section`
  
  @media screen and (${p => p.theme.media.tablet}) {
    
    .flex-container{
      flex-direction: column;
    }

  }
}
  .home__left {
    flex: 0.5;
    min-height: 100vh;
    position: relative;
    top: 0;
    bottom: 0;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    .home__text {
      margin-left: -50px;
      z-index: 1;
    }
  
    @media screen and (${p => p.theme.media.tablet}) {
      min-height: 45vh;
      width: 100%;
      .home__text {
        margin-left: 0px;
      }
      .flex-container{
        flex-direction: column;
      }
      
    }
  }
  .home__right {
    flex: 0.5;
  }
  .home__shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    z-index: 1;
  }
`;
export default Button;