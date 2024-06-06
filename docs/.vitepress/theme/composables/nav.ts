import { computed } from 'vue'
import site from '@/site'

export const useNav = () => {
  const navlinksFromConfig = site.nav
  const navlinks = computed(() => navlinksFromConfig)

  return {
    navlinks,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (currentPath === '/home') {
    currentPath = '/'
  }
  return currentPath === navlink.link
}
