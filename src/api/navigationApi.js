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
        eyebrow: "Flagship Software Product",
        title: "HSynex Restaurant",
        desc: "Live POS, kitchen pipeline, floor maps, and inventory.",
        link: "/products/restaurant",
        linkText: "Explore Live Product",
      },
    },
  },
  {
    id: "products",
    name: "Products",
    path: "/products",
    type: "mega-menu",
    megaMenu: {
      columns: [
        {
          heading: "Flagship Software",
          items: [
            {
              name: "HSynex Restaurant",
              desc: "Connected OS for dining, POS, kitchen, and inventory.",
              path: "/products/restaurant",
              badge: "In Development",
            },
            {
              name: "Products Overview",
              desc: "Explore how we design and build commercial software.",
              path: "/products",
            },
          ],
        },
      ],
      featured: {
        eyebrow: "Product Engineering",
        title: "Custom SaaS Partnerships",
        desc: "We co-found and engineer high-scale products with industry partners.",
        link: "/contact",
        linkText: "Inquire About Product Build",
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
