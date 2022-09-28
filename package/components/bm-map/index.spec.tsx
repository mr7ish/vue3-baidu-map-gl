// @ts-nocheck
import { mount } from '@vue/test-utils'
import Map from './index.vue'
import { describe, it, expect } from 'vitest'

describe('Map components test cases', async () => {
	it('Map should be define', () => {
		expect(Map).toBeDefined()
	})

	const map = (<Map ak='123' />) as any
	const wrapper = mount(map)
	it('props with default', () => {
		expect(wrapper.props()).toEqual({
			ak: '123',
			width: '100%',
			height: '400px',
			center: { lat: 39.915185, lng: 116.403901 },
			mapType: 'BMAP_NORMAL_MAP',
			zoom: 14,
			maxZoom: 21,
			minZoom: 0,
			heading: 0,
			tilt: 0,
			enableDragging: true,
			enableInertialDragging: true,
			enableScrollWheelZoom: false,
			enableContinuousZoom: true,
			enableResizeOnCenter: true,
			enableDoubleClickZoom: false,
			enableKeyboard: true,
			enablePinchToZoom: true,
			enableAutoResize: true
		})
	})
	it('map loading text', () => {
		expect(wrapper.text()).toBe('map loading...')
	})

	it('custom map Loading text', () => {
		const MapWithCustomLoading = (
			<Map ak='11123'>
				{{
					loading: () => [<div>loading...</div>]
				}}
			</Map>
		) as any

		const wrapper = mount(MapWithCustomLoading)
		expect(wrapper.text()).toBe('loading...')
	})
})
