import React, { ButtonHTMLAttributes, ForwardedRef, useCallback } from 'react';
import type { CSSObject, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Spinner from 'components/common/Spinner';

export type ButtonType = 'primary' | 'secondary' | 'text' | 'semantic';

export type ButtonSizeNormal = 'small' | 'medium' | 'regular' | 'large';
export type ButtonSizeSquare = 'squareSmall' | 'squareMedium' | 'squareRegular';
export type ButtonSize = ButtonSizeSquare | ButtonSizeNormal;

export interface ButtonPropsCommon {
  type?: ButtonType;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPlacement?: 'left' | 'right';
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
interface ButtonPropsSquare {
  size?: ButtonSizeSquare;
  block?: never;
}
interface ButtonPropsNormal {
  size?: ButtonSizeNormal;
  block?: boolean;
}

export type ButtonProps =
  | (ButtonPropsCommon & ButtonPropsNormal)
  | (ButtonPropsCommon & ButtonPropsSquare);
export type ButtonStyledProps = Required<
  Omit<ButtonProps, 'type' | 'loading' | 'icon' | 'iconPlacement'>
> & {
  containerType: ButtonType;
};
interface IconProps {
  size: ButtonSize;
  isLoading: boolean;
}

export type MButtonProps = ButtonProps &
  Omit<ButtonHTMLAttributes<HTMLElement>, 'type'> & {
    htmlType?: ButtonHTMLAttributes<HTMLElement>['type'];
    forwardedRef?: ForwardedRef<HTMLButtonElement>;
  };
export type MButtonType = React.FC<MButtonProps>;

const MButton: MButtonType = ({
  children,
  onClick,
  type = 'primary',
  size = 'regular',
  icon = null,
  iconPlacement = 'left',
  block = false,
  active = false,
  disabled = false,
  loading = false,
  forwardedRef,
  ...rest
}) => {
  const isSquareSingleText = React.useMemo(
    () =>
      !icon && size?.startsWith('square') && typeof children === 'string' && children.length === 1,
    [children, icon, size]
  );
  const iconClassName = React.useMemo(() => {
    if (!children || isSquareSingleText) {
      return 'icon-only';
    }
    return `icon-${iconPlacement}`;
  }, [children, iconPlacement, isSquareSingleText]);
  const IconNode = React.useMemo(
    () => (
      <IconContainer size={size} isLoading={loading} className={iconClassName}>
        {loading ? <Spinner /> : icon}
      </IconContainer>
    ),
    [size, iconClassName, loading, icon]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (disabled || loading) {
        return;
      }
      onClick?.(e);
    },
    [disabled, loading, onClick]
  );

  return (
    <StyledButton
      containerType={type}
      size={size}
      block={block}
      active={active}
      disabled={disabled || loading}
      onClick={handleClick}
      ref={forwardedRef}
      {...rest}
    >
      {(icon || loading) && iconPlacement === 'left' && IconNode}
      {(isSquareSingleText && loading) || children}
      {(icon || loading) && iconPlacement === 'right' && IconNode}
    </StyledButton>
  );
};

type DefaultSizeStyles = Pick<CSSObject, 'height' | 'padding' | 'fontSize'>;
type SquareSizeStyles = Pick<CSSObject, 'width' | 'height' | 'fontSize'>;

const buttonSizeStyles = ({ size, block }: ButtonStyledProps) => {
  const sizeMap: Record<ButtonSize, DefaultSizeStyles | SquareSizeStyles> = {
    squareSmall: {
      width: '28px',
      height: '26px',
      fontSize: '13px',
    },
    squareMedium: {
      width: '30px',
      height: '28px',
      fontSize: '13px',
    },
    squareRegular: {
      width: '34px',
      height: '32px',
      fontSize: '14px',
    },
    small: {
      height: '24px',
      padding: '3px 8px',
      fontSize: '12px',
    },
    medium: {
      height: '28px',
      padding: '4px 10px',
      fontSize: '13px',
    },
    regular: {
      height: '32px',
      padding: '5px 12px',
      fontSize: '14px',
    },
    large: {
      height: '36px',
      padding: '6px 14px',
      fontSize: '15px',
    },
  };

  const base = sizeMap[size];

  if (block) {
    return css`
      width: 100%;
      ${base};
    `;
  }
  return css`
    ${base}
  `;
};

const getThemeType = (
  type: ButtonType,
  active: boolean,
  disabled: boolean = false,
  hover: boolean = false
) => 'btn_' + type + (disabled ? '_disabled' : hover ? '_hover' : active ? '_active' : '');

type EmotionPaletteKey = keyof Theme['palette'];
const buttonColorStyles = ({
  theme,
  containerType,
  active,
  disabled,
}: ButtonStyledProps & { theme: Theme }) => {
  const defaultThemeType = getThemeType(containerType, active, disabled);
  const hoverThemeType = getThemeType(containerType, active, disabled, true);
  const activeThemeType = getThemeType(containerType, true, disabled);
  const disabledThemeType = getThemeType(containerType, active, true);

  return css`
    background: ${theme.palette[`${defaultThemeType}_bg` as EmotionPaletteKey]};
    border: 1px solid ${theme.palette[`${defaultThemeType}_border` as EmotionPaletteKey]};
    color: ${theme.palette[`${defaultThemeType}_color` as EmotionPaletteKey]};

    ${!active &&
    css`
      &:hover {
        background: ${theme.palette[`${hoverThemeType}_bg` as EmotionPaletteKey]};
        border: 1px solid ${theme.palette[`${hoverThemeType}_border` as EmotionPaletteKey]};
        color: ${theme.palette[`${hoverThemeType}_color` as EmotionPaletteKey]};
      }
    `}
    &:active {
      background: ${theme.palette[`${activeThemeType}_bg` as EmotionPaletteKey]};
      border: 1px solid ${theme.palette[`${activeThemeType}_border` as EmotionPaletteKey]};
      color: ${theme.palette[`${activeThemeType}_color` as EmotionPaletteKey]};
    }
    &:disabled {
      background: ${theme.palette[`${disabledThemeType}_bg` as EmotionPaletteKey]};
      border: 1px solid ${theme.palette[`${disabledThemeType}_border` as EmotionPaletteKey]};
      color: ${theme.palette[`${disabledThemeType}_color` as EmotionPaletteKey]};
    }
  `;
};

const StyledButton = styled.button<ButtonStyledProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2px;
  outline: none;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  user-select: ${({ containerType }) => (containerType === 'text' ? 'text' : 'none')};
  cursor: ${({ disabled, active }) => (disabled ? 'not-allowed' : active ? 'default' : 'pointer')};

  ${buttonSizeStyles};
  ${buttonColorStyles};
`;

const iconSizeStyles = ({ size }: IconProps) => {
  const fontSizeMap: Record<ButtonSize, number> = {
    squareSmall: 16,
    squareMedium: 16,
    squareRegular: 16,
    small: 14,
    medium: 16,
    regular: 16,
    large: 16,
  };

  return css`
    font-size: ${fontSizeMap[size]}px;
  `;
};

const IconContainer = styled.span<IconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;

  &.icon-left {
    margin-right: ${({ isLoading }) => (isLoading ? '10px' : '8px')};
  }

  &.icon-right {
    margin-left: ${({ isLoading }) => (isLoading ? '10px' : '8px')};
  }

  &.icon-only {
    margin: 0;
  }

  ${iconSizeStyles}
`;

const ForwardedMButton = React.forwardRef<HTMLButtonElement, MButtonProps>((props, ref) => (
  <MButton {...props} forwardedRef={ref} />
));

const name = MButton.displayName || MButton.name;
ForwardedMButton.displayName = `forwardRef(${name})`;

export default React.memo(ForwardedMButton);
