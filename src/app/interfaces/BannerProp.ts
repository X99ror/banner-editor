export interface BannerProp {
    id: number;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    imageOrientation?: 'bottom-right' | 'top-left' | 'top-right' | 'bottom-left' | 'center'; 
    textColor?: string;
    buttonColor?: string;
    onEdit: () => void;
  }
  