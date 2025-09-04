import type { TFunction } from 'react-i18next';
import type { SiteConfig } from '../config/site';

export interface TranslationProps {
  t: TFunction;
}

export interface ProfileCardProps {
  t: TFunction;
  siteConfig: SiteConfig;
}

export interface HeaderProps {
  t: TFunction;
  handlePanelClick: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}