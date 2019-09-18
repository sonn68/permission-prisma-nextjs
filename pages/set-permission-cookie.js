import React from 'react'
import { withRouter } from 'next/router'
import PermissionSetView from '../components/permission-set'

const PermissionSet = withRouter((props) => (
  <>
    {console.log(props.router.query.permission)}
    <PermissionSetView permission={props.router.query.permission} />
  </>
)
)

export default PermissionSet