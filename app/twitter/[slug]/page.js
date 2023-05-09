export default function page() {
  return 'dynamic page'
}

export async function generateMetadata() {
  const icon = '/home-icon.png'
  return {
    title: 'title',
    description: 'description',
    icons: {
      icon: icon,
      apple: icon,
      shortcut: icon,
    },

  }
}