import { useState, useEffect } from 'react';

interface ContentSection {
  id: string;
  section_key: string;
  title: string | null;
  content: string | null;
  image_url: string | null;
}

export const useContent = (sectionKey: string) => {
  const [data, setData] = useState<ContentSection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/content/${sectionKey}`);
        if (response.ok) {
          const content = await response.json();
          setData(content);
        } else {
          console.error('Error fetching content:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [sectionKey]);

  return { data, loading };
};