export interface DirectusFile {
  directus_files_id: string;
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
}

export interface NibiruSmpPoi {
  slug: string;
  translations: NibiruSmpPoiTranslations[];
  x: number;
  y: number;
  z: number;
  authors: MinecraftIdPairLink[];
  gallery: DirectusFile[];
  cover_image: DirectusSingleImage;
}
