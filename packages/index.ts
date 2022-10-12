import { App } from 'vue'
import { PluginsList } from './utils/pluginLoader'

declare module 'vue' {
	interface ComponentCustomProperties {
		$baiduMapAk: string
		$baiduMapPlugins: PluginsList
	}
}
interface InitOptions {
	ak?: string
	plugins?: PluginsList
}
// hooks
export * from './hooks/useAreaBoundary'
export * from './hooks/useTrackAnimation'

// components
import Map from './components/map/index.vue'
import Control from './components/control/control/index.vue'
import Scale from './components/control/scale/index.vue'
import Zoom from './components/control/zoom/index.vue'
import CityList from './components/control/city-list/index.vue'
import Location from './components/control/location/index.vue'
import Copyright from './components/control/copyright/index.vue'
import Navigation3d from './components/control/navigation3d/index.vue'
import Marker from './components/overlay/marker/index.vue'
import Marker3d from './components/overlay/marker3d/index.vue'
import Label from './components/overlay/label/index.vue'
import Polyline from './components/overlay/polyline/index.vue'
import Polygon from './components/overlay/polygon/index.vue'
import Circle from './components/overlay/circle/index.vue'

const componentsList = [
	Map,
	Control,
	Scale,
	Zoom,
	Navigation3d,
	Marker,
	Marker3d,
	Copyright,
	Location,
	Label,
	Polyline,
	Polygon,
	Circle,
	CityList
]

// global register
const vue3BaiduMapGl = {
	install: (app: App, options?: InitOptions) => {
		const { ak, plugins } = options || {}
		for (const component of componentsList) {
			const name = component.name
			app.component(name, component)
			app.component(name.replace('B', ''), component)
		}
		app.config.globalProperties.$baiduMapPlugins = plugins || []
		ak && (app.config.globalProperties.$baiduMapAk = ak)
	},
	version: '__VERSION__'
}
// for umd
export const install = vue3BaiduMapGl.install
export const version = vue3BaiduMapGl.version

export {
	Map,
	Control,
	Scale,
	Zoom,
	Navigation3d,
	Marker,
  Marker3d,
	Copyright,
	Location,
	Label,
	Polyline,
	Polygon,
	Circle,
	CityList
}
export default vue3BaiduMapGl
