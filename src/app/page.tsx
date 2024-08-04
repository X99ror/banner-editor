'use client'
import { useState } from "react"
import Banner from "./components/Banner";
import EditBanner from "./components/EditBanner";

const initialBanners = [
  {
    id: 1,
    title: 'Ad 1 ',
    description: 'Description for Ad 1',
    cta: 'Click Here',
    image: '/images/image1.jpg',
    background: '/images/background1.png',
    imageOrientation: 'bottom-right' as 'bottom-right', 
    textColor:'black',
    buttonColor: '#f50057'
  },
  {
    id: 2,
    title: 'Ad 2',
    description: 'Description for Ad 2',
    cta: 'Learn More',
    image: '/images/image2.jpg',
    background: '/images/background2.png',
    imageOrientation: 'bottom-right' as 'bottom-right', 
    textColor:'black',
    buttonColor: '#f50057'
  },
];

export default function Home() {
  const [banners, setBanners] = useState(initialBanners);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (banner: any) => {
    setEditingBanner(banner);
    setIsEditing(true);
  };

  const handleSave = (updatedBanner: any) => {
    const updatedBanners = banners.map((banner) =>
      banner.id === updatedBanner.id ? updatedBanner : banner
    );
    setBanners(updatedBanners);
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '100vh' }}>
      {banners.map((banner) => (
        <Banner
          key={banner.id}
          id={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          imageOrientation={banner.imageOrientation}
          textColor={banner.textColor}
          buttonColor={banner.buttonColor}
          onEdit={() => handleEditClick(banner)}
        />
      ))}
      {editingBanner && (
        <EditBanner
          open={isEditing}
          onClose={() => setIsEditing(false)}
          banner={editingBanner}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
