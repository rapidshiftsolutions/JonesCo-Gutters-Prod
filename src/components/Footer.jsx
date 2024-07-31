import Link from 'next/link';

const socialMediaLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61558126626290' },
  { name: 'Instagram', href: 'https://www.instagram.com/jonesco.gutters/' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UChpWecDqRs1v6l8QeQLG0Yw' },
  { name: 'Twitter', href: 'https://twitter.com/JonesCoGutters' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@jonesco.gutters' },
  { name: 'Pinterest', href: 'https://www.pinterest.com/jonescogutters/' },
];

const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
  { name: 'Subcontracting', href: '/subcontracting' },
  { name: 'Service Locations', href: '/servicelocations' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/termsandconditions' },
  { name: 'Warranty', href: '/warranty' },
];

const servicesLinks = [
  { name: 'Seamless Gutter Installation', href: '/seamless-gutter-installation' },
  { name: 'Gutter Replacement', href: '/gutter-replacement' },
  { name: 'Gutter Cleaning', href: '/gutter-cleaning' },
  { name: 'Gutter Guards', href: '/gutter-guards' },
  { name: 'Custom Gutters', href: '/custom-gutters' },
  { name: 'Downspouts', href: '/downspouts' },
  { name: 'Snow Guards', href: '/snow-guards' },
  { name: 'Rain Chains', href: '/rain-chains' },
];

const stylesLinks = [
  { name: 'Copper Gutters', href: '/copper-gutters' },
  { name: 'Galvanized Gutters', href: '/galvanized-gutters' },
  { name: 'Galvalume Gutters', href: '/galvalume-gutters' },
  { name: 'Colored Gutters', href: '/colored-gutters' },
];

export default function Footer() {
  return (
    <footer className="bg-JonesCo-Blue-50 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-JonesCo-Blue-900">Quick Links</h2>
            <ul className="space-y-2">
              {pageLinks.map((page) => (
                <li key={page.name}>
                  <Link href={page.href} legacyBehavior>
                    <a className="text-gray-500 hover:text-gray-700">{page.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-JonesCo-Blue-900">Services</h2>
            <ul className="space-y-2">
              {servicesLinks.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} legacyBehavior>
                    <a className="text-gray-500 hover:text-gray-700">{service.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-JonesCo-Blue-900">Styles</h2>
            <ul className="space-y-2">
              {stylesLinks.map((style) => (
                <li key={style.name}>
                  <Link href={style.href} legacyBehavior>
                    <a className="text-gray-500 hover:text-gray-700">{style.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-JonesCo-Blue-900">Social Media</h2>
            <ul className="space-y-2">
              {socialMediaLinks.map((social) => (
                <li key={social.name}>
                  <Link href={social.href} legacyBehavior>
                    <a className="text-gray-500 hover:text-gray-700">{social.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          &copy; 2024 JonesCo Seamless Gutter Systems, LLC. All rights reserved.
          <div className="flex justify-center mt-2 space-x-4 text-xs leading-5 text-gray-500">
            <Link href="/privacy" legacyBehavior>
              <a className="hover:text-gray-600">Privacy Policy</a>
            </Link>
            <span>|</span>
            <Link href="/termsandconditions" legacyBehavior>
              <a className="hover:text-gray-600">Terms & Conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
