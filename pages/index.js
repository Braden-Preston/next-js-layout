import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../components/Page'

const Home = () => (
  <Page>
    <Link href="/editor"><a>To Editor</a></Link>
  </Page>
)

export default Home
