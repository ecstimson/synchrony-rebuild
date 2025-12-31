import fs from 'fs/promises';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// --- Shared Types ---
export interface HeroSection {
    headline: string;
    description: string;
}

export interface CTASection {
    title: string;
    description: string;
    primary_button_text: string;
    primary_button_link: string;
}

export interface WhyChooseCard {
    icon_name: string;
    title: string;
    description: string;
}

export interface WhyChooseSection {
    title: string;
    description?: string | null;
    cards: WhyChooseCard[];
}

// --- Hub Page Types ---
export interface HubSubpagesSection {
    title: string;
    description: string;
    cards: {
        icon_name: string;
        title: string;
        description: string;
        link_url: string;
    }[];
}

export interface FeaturedServicesSection {
    title: string;
    services: {
        title: string;
        description: string;
        cta_text: string;
        cta_url: string;
        image_placeholder: string;
    }[];
}

export interface RelatedServicesSection {
    title: string;
    description: string;
    cards: {
        title: string;
        description: string;
        cta_text: string;
        cta_url: string;
    }[];
}

export interface HubPageData {
    page_slug: string;
    page_title: string;
    hero: HeroSection;
    subpages_section: HubSubpagesSection;
    why_choose_section: WhyChooseSection;
    featured_services: FeaturedServicesSection;
    related_services: RelatedServicesSection;
    cta_section: CTASection;
}

// --- Parent Page Types ---
export interface ParentPageData {
    page_slug: string;
    page_title: string;
    parent_hub: {
        name: string;
        url: string;
    };
    hero: HeroSection;
    sub_services: {
        title: string;
        description: string;
        cards: {
            icon_name: string;
            title: string;
            description: string;
            link_url: string;
        }[];
    };
    primary_content: {
        title: string;
        description: string;
        key_capabilities: {
            title: string;
            capabilities: {
                title: string;
                description: string;
            }[];
        };
    };
    why_choose: WhyChooseSection;
    cta_section: CTASection;
}

// --- Child Page Types ---
export interface ChildPageData {
    page_slug: string;
    page_title: string;
    parent_page: {
        name: string;
        url: string;
    };
    hero: HeroSection;
    primary_content: {
        title: string;
        description: string;
        key_capabilities: {
            title: string;
            capabilities: {
                title: string;
                description: string;
            }[];
        };
    };
    why_choose: WhyChooseSection;
    cta_section: CTASection;
}

// --- Loader Functions ---

// Hub Loader
export async function getHubPageData(slug: string): Promise<HubPageData | null> {
    try {
        const filePath = path.join(CONTENT_DIR, 'hub-pages', `${slug}-hub.json`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent) as HubPageData;
    } catch (error) {
        console.error(`Error loading hub page data for slug: ${slug}`, error);
        return null;
    }
}

export async function getAllHubSlugs(): Promise<string[]> {
    try {
        const hubDir = path.join(CONTENT_DIR, 'hub-pages');
        const files = await fs.readdir(hubDir);
        return files
            .filter(file => file.endsWith('-hub.json'))
            .map(file => file.replace('-hub.json', ''));
    } catch (error) {
        return [];
    }
}

// Parent Loader
export async function getParentPageData(slug: string): Promise<ParentPageData | null> {
    try {
        const filePath = path.join(CONTENT_DIR, 'parent-pages', `${slug}-parent.json`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent) as ParentPageData;
    } catch (error) {
        console.warn(`Parent page data not found for: ${slug}`);
        return null;
    }
}

export async function getAllParentSlugs(): Promise<string[]> {
    try {
        const dir = path.join(CONTENT_DIR, 'parent-pages');
        const files = await fs.readdir(dir);
        return files
            .filter(file => file.endsWith('-parent.json'))
            .map(file => file.replace('-parent.json', ''));
    } catch (error) {
        return [];
    }
}

// Child Loader
export async function getChildPageData(slug: string): Promise<ChildPageData | null> {
    try {
        const filePath = path.join(CONTENT_DIR, 'child-pages', `${slug}-child.json`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent) as ChildPageData;
    } catch (error) {
        console.warn(`Child page data not found for: ${slug}`);
        return null;
    }
}

export async function getAllChildSlugs(): Promise<string[]> {
    try {
        const dir = path.join(CONTENT_DIR, 'child-pages');
        const files = await fs.readdir(dir);
        return files
            .filter(file => file.endsWith('-child.json'))
            .map(file => file.replace('-child.json', ''));
    } catch (error) {
        return [];
    }
}

// --- Routing Helpers ---

// List of hubs that use 2-level structure (hub -> child, no intermediate parent)
const TWO_LEVEL_HUBS = ['dermatological', 'urogenital', 'gastrointestinal', 'respiratory', 'neurological', 'musculoskeletal'];

export function isTwoLevelHub(hubSlug: string): boolean {
    return TWO_LEVEL_HUBS.includes(hubSlug);
}

