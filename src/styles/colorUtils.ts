import Color from 'color';

export function darken(color: string, amt: number = 0.2): string {
  return Color(color).darken(amt).hex();
}

export function lighten(color: string, amt: number = 0.2): string {
  return Color(color).lighten(amt).hex();
}
export function alpha(color: string, amt: number = 0.2): string {
  const _color: any = Color(color).alpha(amt).rgb();
  return `rgba(${_color.color.join(', ')}, ${_color.valpha})`;
}
