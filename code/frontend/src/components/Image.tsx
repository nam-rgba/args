import axios from 'axios';
import { useState, ChangeEvent } from 'react';

const ImageUpload = ({ onUpload }: { onUpload: (url: string) => void }) => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const PRESET = import.meta.env.VITE_PRESET_NAME;
  const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME;

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', PRESET);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        formData,
      );
      const url = response.data.secure_url;
      setImageURL(url);
      onUpload(url); // Gọi callback để trả về URL
      setLoading(false);
    } catch (error) {
      console.error('Error uploading image', error);
      setLoading(false);
    }
  };
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {imageURL && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageURL} alt="Uploaded" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
