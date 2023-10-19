export interface DirectusTimestamp {
  date_created: string;
  date_updated: string;
}
export interface DirectusFile {
  directus_files_id: string;
}

export interface DirectusFileDetailContent {
  id: string;
  uploaded_on: string;
}

export interface DirectusFileDetail {
  directus_files_id: DirectusFileDetailContent;
}

export interface DirectusSingleImage {
  id: string;
}

export interface MinecraftIdPair {
  username: string;
  uuid: string;
}

export interface MinecraftIdPairLink {
  minecraft_id_pair_id: MinecraftIdPair;
}

export interface NibiruSmpPoiTranslations {
  name: string;
  short_summary: string;
  description: string;
  tags: string[];
}

export interface NibiruSmpPoi extends DirectusTimestamp {
  slug: string;
  translations: NibiruSmpPoiTranslations[];
  x: number;
  y: number;
  z: number;
  authors: MinecraftIdPairLink[];
  gallery: DirectusFileDetail[];
  cover_image: DirectusSingleImage;
}

export interface NibiruSmpAboutTranslations {
  title: string;
  content: string;
}

export interface NibiruSmpAbout {
  translations: NibiruSmpAboutTranslations[];
}

export interface ExternalLink {
  name: string;
  url: string;
  icon: string;
}

export interface DisclaimerTranslation {
  language_code: string;
  disclaimer: string;
}

export interface IcpPutOn {
  name: string;
  icp: string;
}

export interface NibiruSmpPostAuthor {
  name: string;
  avatar: DirectusSingleImage;
}

export interface NibiruSmpPostTranslation {
  title: string;
  summary: string;
  article: string;
}

export interface NibiruSmpPost {
  slug: string;
  cover: DirectusSingleImage;
  content: string;
  author: NibiruSmpPostAuthor;
  translations: NibiruSmpPostTranslation[];
}
