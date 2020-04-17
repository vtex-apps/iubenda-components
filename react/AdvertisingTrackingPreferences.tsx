import * as React from 'react'
import { IOMessage } from 'vtex.native-types'
import { useCssHandles } from 'vtex.css-handles'

const HANDLES = ['advertisingTrackingPreferences']

const AdvertisingTrackingPreferences: SFC<Props> = ({
  label = 'store/iubenda.advertisingTrackingPreferences',
}) => {
  const handles = useCssHandles(HANDLES)

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      href="#"
      className={`${handles.advertisingTrackingPreferences} iubenda-advertising-preferences-link`}
    >
      <IOMessage id={label} />
    </a>
  )
}

interface Props {
  label: string
}

AdvertisingTrackingPreferences.schema = {
  title: 'admin/editor.iubenda.advertisingTrackingPreferences',
}

export default AdvertisingTrackingPreferences
