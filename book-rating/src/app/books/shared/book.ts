export interface Book {
  isbn: string;
  title: string;
  description: string;
  rating: number;

  thumbnails: Thumbnail[];
}

export interface Thumbnail {
  url: string;
  title: string;
}
