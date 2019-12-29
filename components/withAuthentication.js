import React, { Component, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { inject, observer } from 'mobx-react'

const withAuthentication = Component => {
    const WithAuthentication = observer(({ store, ...rest }) => {
        const authenticated = store.authenticated
        const router = useRouter()
        useEffect(() => {
            !authenticated && router.push('/login')
        })
        return (
            <>{authenticated && <Component {...{store, ...rest}} />}</>
        )
    })
    return inject('store')(WithAuthentication);
}




    // @inject('store')
    // class WithAuthentication extends React.Component {

    //     componentDidMount() {
    //         !this.props.store.authenticated && Router.push(this.props.href)
    //     }
    //     render() {
    //         const { store, children } = this.props
    //         const { authenticated } = store
    //         return (
    //             <>{authenticated && <Component {...this.props} />}</>
    //         )
    //     }
    // }


export default withAuthentication;

// @inject('store')
// @observer

// class Authenticator extends Component {

//     render() {
//         const { store, children } = this.props
//         const { authenticated } = store
//         return (
//             <>{ authenticated ? { children } : <Redirect href="/login" />}</>
//         )
//     }
// }

// export default Authenticator

class Redirect extends Component {
    componentDidMount() {
        Router.push(this.props.href)
    }
    render() {
        return <></>
    }
}
