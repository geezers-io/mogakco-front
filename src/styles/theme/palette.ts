import { colors } from 'styles/theme/colors';

export const palette = {
  brand_blue: colors.blue['800'],
  brand_yellow: colors.yellow['500'],

  txt_static: colors.ink['900'],
  txt_default: colors.ink['900'],
  txt_hover: colors.ink['900'],
  txt_active: colors.ink['900'],
  txt_disabled: colors.ink['400'],
  txt_label: colors.ink['900'],
  txt_point: colors.ink['400'],
  txt_link: colors.ink['400'],
  txt_link_secondary: colors.ink['500'],
  txt_link_active: colors.blue['700'],
  txt_desc: colors.ink['400'],

  btn_primary_bg: colors.blue['800'],
  btn_primary_border: colors.blue['800'],
  btn_primary_color: colors.ink['50'],
  btn_primary_hover_bg: colors.blue['500'],
  btn_primary_hover_border: colors.blue['500'],
  btn_primary_hover_color: colors.ink['50'],
  btn_primary_active_bg: colors.blue['800'],
  btn_primary_active_border: colors.blue['800'],
  btn_primary_active_color: colors.ink['50'],
  btn_primary_disabled_bg: colors.ink['50'],
  btn_primary_disabled_border: colors.ink['200'],
  btn_primary_disabled_color: colors.ink['400'],

  btn_secondary_bg: colors.white,
  btn_secondary_border: colors.ink['200'],
  btn_secondary_color: colors.ink['600'],
  btn_secondary_hover_bg: colors.blue['100'], // or 50
  btn_secondary_hover_border: colors.blue['700'],
  btn_secondary_hover_color: colors.blue['700'],
  btn_secondary_active_bg: colors.blue['100'],
  btn_secondary_active_border: colors.blue['700'],
  btn_secondary_active_color: colors.blue['700'],
  btn_secondary_disabled_bg: colors.ink['50'],
  btn_secondary_disabled_border: colors.ink['200'],
  btn_secondary_disabled_color: colors.ink['400'],

  btn_text_bg: colors.transparent,
  btn_text_border: colors.transparent,
  btn_text_color: colors.ink['900'],
  btn_text_hover_bg: colors.transparent,
  btn_text_hover_border: colors.transparent,
  btn_text_hover_color: colors.blue['700'],
  btn_text_active_bg: colors.transparent,
  btn_text_active_border: colors.transparent,
  btn_text_active_color: colors.blue['700'],
  btn_text_disabled_bg: colors.transparent,
  btn_text_disabled_border: colors.transparent,
  btn_text_disabled_color: colors.ink['400'],

  btn_semantic_bg: colors.white,
  btn_semantic_border: colors.yellow['500'],
  btn_semantic_color: colors.yellow['700'],
  btn_semantic_hover_bg: colors.yellow['50'],
  btn_semantic_hover_border: colors.yellow['500'],
  btn_semantic_hover_color: colors.yellow['700'],
  btn_semantic_active_bg: colors.yellow['100'],
  btn_semantic_active_border: colors.yellow['700'],
  btn_semantic_active_color: colors.yellow['700'],
  btn_semantic_disabled_bg: colors.ink['50'],
  btn_semantic_disabled_border: colors.ink['200'],
  btn_semantic_disabled_color: colors.ink['400'],

  index_header_bg: colors.ink['50'],
  index_middle_block_subtitle_color: colors.ink['500'],
} as const;
