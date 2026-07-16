export const site = {
  tradeName: "Georgia Trailer Outlet",
  legalName: "Georgia Trailer Outlet, LLC",
  domain: "georgiatraileroutlet.com",
  phone: "(770) 608-6882",
  phoneHref: "tel:+17706086882",
  email: "admin@georgiatraileroutlet.com",
  emailHref: "mailto:admin@georgiatraileroutlet.com",
  address: {
    line1: "45 Carson Loop Rd NW",
    city: "Cartersville",
    state: "GA",
    zip: "30121-4429",
    zipShort: "30121",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  positioning:
    "The largest selection of trailers at the lowest prices in the Southeast.",
  brands: [
    "Lamar",
    "Diamond Cargo",
    "Load Trail",
    "RawMaxx",
    "Behnke Trailers",
    "NEO",
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=45+Carson+Loop+Rd+NW,+Cartersville,+GA+30121",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=45%20Carson%20Loop%20Rd%20NW%2C%20Cartersville%2C%20GA%2030121&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export function formatAddress(shortZip = false) {
  const zip = shortZip ? site.address.zipShort : site.address.zip;
  return `${site.address.line1}, ${site.address.city}, ${site.address.state} ${zip}`;
}
