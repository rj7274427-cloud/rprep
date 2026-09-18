export interface PdfDoc {
  id?: string;
  title: string;
  slug: string;
  description: string;
  driveId: string;
  category: string;
  tags: string[];
  date: string;
  views: number;
  downloads: number;
  thumbnail?: string;
}
