/**
 * HSynex Navigation API Service
 * 
 * Provides dynamic menu structure for the corporate website navigation.
 * Supports standard route links as well as multi-column mega-menus with
 * categorized capabilities and featured product showcases.
 */

const NAVIGATION_DATA = [
  {
    id: "solutions",
    name: "Solutions",
    path: "/solutions",
    type: "mega-menu",
    megaMenu: {
      columns: [
        {
          heading: "Digital Capabilities",
          items: [
            {
              name: "Web Applications",
              desc: "Customer-facing experiences with a product backbone.",
              path: "/solutions/web-applications",
            },
            {
              name: "Mobile Applications",
              desc: "Native-feeling tools for teams in motion.",
              path: "/solutions/mobile-applications",
            },
            {
              name: "Business Software",
              desc: "Workflows, operations, and data in one place.",
              path: "/solutions/business-software",
              badge: "Enterprise",
            },
          ],
        },
        {
          heading: "Architecture & Scale",
          items: [
            {
              name: "SaaS Development",
              desc: "Focused software that earns a place in the daily stack.",
              path: "/solutions/saas-development",
              badge: "High-Scale",
            },
            {
              name: "CMS & Admin Systems",
              desc: "Clear control rooms for content and teams.",
              path: "/solutions/cms-admin-systems",
            },
            {
              name: "Automation & Integrations",
              desc: "The connective tissue between tools you use.",
              path: "/solutions/automation-integrations",
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Product Department",
        title: "Proprietary Software Lab",
        desc: "Confidential SaaS and operational platforms currently in development.",
        link: "/products",
        linkText: "Explore In-Dev Suite",
      },
    },
  },
  {
    id: "products",
    name: "Products",
    badge: "In Dev",
    path: "/products",
    type: "mega-menu",
    megaMenu: {
      columns: [
        {
          heading: "Product Pipeline // In Development",
          items: [
            {
              name: "Product Department & Roadmap",
              desc: "Explore what our engineering lab is actively building.",
              path: "/products",
              badge: "Coming Soon",
            },
            {
              name: "HSynex Restaurant (OS)",
              desc: "Connected workspace for dining, POS, kitchen, and inventory.",
              path: "/products",
              badge: "Private Alpha",
            },
            {
              name: "SynexFlow Automation",
              desc: "Distributed event orchestration and webhook pipeline engine.",
              path: "/products",
              badge: "In Sprint",
            },
          ],
        },
      ],
      featured: {
        eyebrow: "CONFIDENTIAL R&D",
        title: "Private Alpha Cohorts",
        desc: "Join select pilot partners testing our in-development commercial platforms.",
        link: "/contact",
        linkText: "Request Early Access",
      },
    },
  },
  {
    id: "about",
    name: "About",
    path: "/about",
    type: "link",
  },
  {
    id: "contact",
    name: "Contact",
    path: "/contact",
    type: "link",
  },
  {
    id: "blog",
    name: "Blog",
    path: "/blog",
    type: "link",
  },
];

/**
 * Fetches dynamic navigation menu items.
 * Handles API errors defensively with safe fallback data.
 */
export async function fetchNavigationMenu() {
  try {
    return Promise.resolve({
      success: true,
      data: NAVIGATION_DATA,
    });
  } catch (error) {
    console.error("Navigation API error, falling back to local dataset:", error);
    return {
      success: true,
      data: NAVIGATION_DATA,
    };
  }
}
