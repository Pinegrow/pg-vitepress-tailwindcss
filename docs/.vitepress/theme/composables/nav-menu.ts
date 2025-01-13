import siteMeta from '@/site'
import { useRoute } from 'vitepress'

export const useNavMenu = () => {
  const navs = siteMeta.navs

  const allNavs = Object.values(navs).reduce((acc, navMenu) => {
    return [...acc, ...navMenu]
  }, [])

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    allNavs,
    navsPrimary: navs.primary,
    navsSecondary: navs.secondary,
    currentPath,
  }
}
