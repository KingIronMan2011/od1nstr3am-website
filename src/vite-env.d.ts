/// <reference types="vite/client" />

export interface TranslationProps {
  t: TFunction;
}

export interface ProfileCardProps {
  t: TFunction;
  siteConfig: SiteConfig;
  handleCopy: handleCopy;
  copiedField: string | null;
}

export interface HeaderProps {
  t: TFunction;
  i18n: i18n;
  darkMode: boolean;
  toggleDarkMode: () => void;
  handlePanelClick: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
