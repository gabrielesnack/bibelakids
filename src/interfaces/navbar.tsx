//
// most all properties overriding struct of chakra ui, such as bg, height, brand
//

export interface INavbar {
  height?: (string | null)[];
  bg?: string;
  brand: IBrand;
  isMenuOpen: boolean;
  onClickMenu: IFuncOnClickMenu;
}

export interface IFuncOnClickMenu {
  (): void;
}

export interface IBrand {
  src: string;
  alt: string;
  size: string | (string | null)[];
}
