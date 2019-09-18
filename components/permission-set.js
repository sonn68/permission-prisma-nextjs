import React from 'react'
import { localCache } from '../utils/utils-cache'

export default class PermissionSetView extends React.Component {
  async setPermission () {
    const { permission } = await this.props
    var obj = { 'permission': permission }
    if (process.env.ENV === 'local') {
      await localCache.remove('permission')
      await localCache.set('permission', obj)
      console.log('permission',permission)
    }
  }
  componentDidMount () {
    setTimeout(() => {this.setPermission()}, 3000)
  }

  render () {
    return (
      <div> Set </div>
    )
  }
}